import axios from "axios";
import React from "react";

export const Strava: React.FC = () => {
  async function stravaRes() {
    await axios
      .get("https://www.strava.com/activities/5587829054")
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }
  return (
    <div>
      {stravaRes()}
    </div>
  );
};
