import { Typography, Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();
  return (
    <div className="home-background">
      <div className="home">
        <Typography variant="h2">Get a Free Consultation</Typography>
        <img
          src="https://miro.medium.com/max/1260/0*TMomIf3np7FUDufH.png"
          height={200}
          width={300}
        />
        <Button
          variant="outlined"
          fullWidth={false}
          onClick={(e) => {
            e.preventDefault();
            history.push("/recommend");
          }}
        >
          Click Here to Find Product Recommendations
        </Button>
        <br />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjfeuvq8dY07lnrwmL6Bma50N_GUtCiCvedg&usqp=CAU"
          height={200}
          width={200}
        />
        <Button
          variant="outlined"
          fullWidth={false}
          onClick={(e) => {
            e.preventDefault();
            history.push("/search");
          }}
        >
          Click Here to Search For a Drug
        </Button>
      </div>
    </div>
  );
};

export default Home;
