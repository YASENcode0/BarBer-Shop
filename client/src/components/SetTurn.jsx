import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import { UserContext } from "./context/UserContext";

export default function SetTurn({popTurns,setPopTurns}) {
  const [freeTurns, setFreeTurns] = useState([{}]);
  const { user, setUser , rerender , setRerender } = useContext(UserContext);

useEffect(()=>{
  async function getFreeTurns() {
    await Axios.get("/getfreeturn").then((res) => setFreeTurns(res.data));
  }
  getFreeTurns()
},[])

  async function addTurnToUser(_id) {
    console.log(_id);
    await Axios.post("/addturnuser", { _id, id: user.id }).then((res) => {
      console.log(res);
    });
  }

  if(popTurns)
  return (
    <div className="set-turn">
      {freeTurns?.map((freeTurn) => {
        return (
          <div
            key={freeTurn?._id}
            onClick={() => {
              addTurnToUser(freeTurn._id);
              setRerender(rerender + 1);
              console.log(rerender)
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
