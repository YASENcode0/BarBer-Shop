import React, { useContext, useState } from "react";
import Axios from "axios";
import { UserContext } from "./context/UserContext";

export default function SetTurn() {
  const [freeTurns, setFreeTurns] = useState([{}]);
  const { user, setUser } = useContext(UserContext);

  async function getFreeTurns() {
    await Axios.get("/getfreeturn").then((res) => setFreeTurns(res.data));
  }

  async function addTurnToUser(_id) {
    console.log(_id);
    await Axios.post("/addturnuser", { _id, id: user.id }).then((res) => {
      console.log(res);
    });
  }

  return (
    <div onClick={getFreeTurns} className="set-turn">
      {freeTurns.map((freeTurn) => {
        return (
          <div
            onClick={() => {
              addTurnToUser(freeTurn._id);
            }}
            className="turn-time"
          >
            {freeTurn.date}
          </div>
        );
      })}
    </div>
  );
}
