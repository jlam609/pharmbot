const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const axios = require("axios");
dotenv.config();

app.use(cors());

const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;
const request = require("request");
const body_parser = require("body-parser");
app.use(body_parser.json());

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "../dist")));

app.get("/covidData", async (req, res) => {
  try {
    const covidDataSource = (
      await axios({
        url: `https://api.covidtracking.com/v1/states/current.json`,
        method: "get",
        headers: { "Access-Control-Allow-Origin": "*" },
      })
    ).data;
    res.status(200).send(covidDataSource);
  } catch (e) {
    console.error(e);
  }
});

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

function handleMessage(sender_psid, received_message) {
  let response;
  let intents = [...received_message.nlp.intents];
  let name = intents[0].name;
  let confidence = intents[0].confidence;
  if (name === "greetings" && confidence > 0.8) {
    response = {
      text: "Hello there how are you feeling today!",
    };
  } else if (name === "bye" && confidence > 0.8) {
    response = {
      text: "Thank you come visit us again soon!",
    };
  } else if (name === "thanks" && confidence > 0.8) {
    response = {
      text: "You're welcome!",
    };
  } else if (name === "sick" && confidence > 0.8) {
    response = {
      text:
        "I'm sorry you're not feeling well today. Please visit https://pharmbotrx.herokuapp.com/recommend for a recommendation to help you feel better!",
    };
  } else if (received_message.text) {
    response = {
      text: `Thank you for contacting us! This bot needs more training!`,
    };
  } else if (received_message.attachments) {
    // Get the URL of the message attachment
    let attachment_url = received_message.attachments[0].payload.url;
    response = {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: [
            {
              title: "Is this the right picture?",
              subtitle: "Tap a button to answer.",
              image_url: attachment_url,
              buttons: [
                {
                  type: "postback",
                  title: "Yes!",
                  payload: "yes",
                },
                {
                  type: "postback",
                  title: "No!",
                  payload: "no",
                },
              ],
            },
          ],
        },
      },
    };
  }

  // Send the response message
  callSendAPI(sender_psid, response);
}

function handlePostback(sender_psid, received_postback) {
  console.log("ok");
  let response;
  // Get the payload for the postback
  let payload = received_postback.payload;

  // Set the response based on the postback payload
  if (payload === "yes") {
    response = { text: "Thanks!" };
  } else if (payload === "no") {
    response = { text: "Oops, try sending another image." };
  }
  // Send the message to acknowledge the postback
  callSendAPI(sender_psid, response);
}

function callSendAPI(sender_psid, response) {
  // Construct the message body
  let request_body = {
    recipient: {
      id: sender_psid,
    },
    message: response,
  };

  // Send the HTTP request to the Messenger Platform
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
