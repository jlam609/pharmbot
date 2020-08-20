const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "../dist")));

const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;
const request = require("request");
const body_parser = require("body-parser");
app.use(body_parser.json()); 

app.post("/webhook", (req, res) => {
  let body = req.body;

  if (body.object === "page") {
    body.entry.forEach(function (entry) {
      let webhook_event = entry.messaging[0];
      console.log(webhook_event);

      let sender_psid = webhook_event.sender.id;
      console.log("Sender ID: " + sender_psid);

      if (webhook_event.message) {
        handleMessage(sender_psid, webhook_event.message);
      } else if (webhook_event.postback) {
        handlePostback(sender_psid, webhook_event.postback);
      }
    });
    res.status(200).send("EVENT_RECEIVED");
  } else {
    res.sendStatus(404);
  }
});

app.get("/webhook", (req, res) => {
  const VERIFY_TOKEN = process.env.VERIFY_TOKEN;

  let mode = req.query["hub.mode"];
  let token = req.query["hub.verify_token"];
  let challenge = req.query["hub.challenge"];

  if (mode && token) {
    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      console.log("WEBHOOK_VERIFIED");
      res.status(200).send(challenge);
    } else {
      res.sendStatus(403);
    }
  }
});


function firstEntity(nlp, name) {
    return nlp && nlp.entities && nlp.entities[name] && nlp.entities[name][0];
}

function handleMessage(sender_psid, message) {
 

    if( message && message.attachments && message.attachments[0].payload){
        callSendAPI(sender_psid, "Thank you for visiting this page!");
        callSendAPIWithTemplate(sender_psid);
        return;
    }

    let entitiesArr = [ "greetings", "thanks", "bye" ];
    let entityChosen = "";
    entitiesArr.forEach((name) => {
        let entity = firstEntity(message.nlp, name);
        if (entity && entity.confidence > 0.8) {
            entityChosen = name;
        }
    });

    if(entityChosen === ""){
        //default
        callSendAPI(sender_psid,`The bot is needed more training, try to say "thanks a lot" or "hi" to the bot` );
    }else{
       if(entityChosen === "greetings"){
           //send greetings message
           callSendAPI(sender_psid,'Hi there! Thank you for visiting this page!');
       }
       if(entityChosen === "thanks"){
           //send thanks message
           callSendAPI(sender_psid,`You 're welcome!`);
       }
        if(entityChosen === "bye"){
            //send bye message
            callSendAPI(sender_psid,'bye-bye!');
        }
    }
}

function handlePostback(sender_psid, received_postback) {
  console.log("ok");
  let response;
  let payload = received_postback.payload;

  if (payload === "yes") {
    response = { text: "Thanks!" };
  } else if (payload === "no") {
    response = { text: "Oops, try sending another image." };
  }
  callSendAPI(sender_psid, response);
}

function callSendAPI(sender_psid, response) {
  let request_body = {
    recipient: {
      id: sender_psid,
    },
    message: response,
  };
  request(
    {
      uri: "https://graph.facebook.com/v2.6/me/messages",
      qs: { access_token: PAGE_ACCESS_TOKEN },
      method: "POST",
      json: request_body,
    },
    (err, res, body) => {
      if (!err) {
        console.log("message sent!");
      } else {
        console.error("Unable to send message:" + err);
      }
    }
  );
}
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"), (err) => {
      if (err) {
        res.status(500).send(err);
      }
    });
  });
app.listen(PORT, () => console.log(`listening ${PORT}`));
