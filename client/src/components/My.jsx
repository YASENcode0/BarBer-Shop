import React, { useEffect, useState } from "react";
import Turn from "./Turn";
import Axios from "axios";
import SetTurn from "./SetTurn";

export default function My() {
  const [myTurns, setMyTurns] = useState([]);

  useEffect(() => {
    async function loade() {
      Axios.post("/getuserturns", {
        id: "Tue Apr 16 2024 18:29:08",
      }).then((res) => {
        console.log(res.data);
        setMyTurns(res.data);
      });
    }
    loade();
  }, []);

  return (
    <div className="my">
      <div>My</div>
      <div className="my-turns">
        <div>
          <h2>my Turns</h2>
          <div className={`turn-div ${myTurns.length > 0 ? "hide" : ""}`}>
            {myTurns?.map((turn) => {
              return <Turn turn={turn} />;
            })}
            <div
              onClick={() => {}}
              className={`add-turn ${myTurns.length > 0 ? "hide" : "hide"} `}
            >
              +
            </div>
          </div>
        </div>
        <SetTurn />
      </div>
    </div>
  );
}
