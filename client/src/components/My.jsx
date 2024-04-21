import React, { useContext, useEffect, useState } from "react";
import Turn from "./Turn";
import Axios from "axios";
import SetTurn from "./SetTurn";
import { UserContext } from "./context/UserContext";

export default function My() {
  const [myTurns, setMyTurns] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const [popTurns,setPopTurns] = useState(false);

  useEffect(() => {
    async function loade() {
      const userId = await getUserId()

      await Axios.post("/getuserturns", {
        id: userId,
      }).then((res) => {
        // console.log(res.data);
        setMyTurns(res.data);
      });
    }
    loade();
  }, []);

  function popTurnsOn(){
    setPopTurns(true);
  }


  async function getUserId(){
    const data = await localStorage.getItem("myAcu");
    const userId = JSON.parse(data);
    console.log(userId.id)
    return userId.id;
  }

  // console.log(myTurns)

  return (
    <div className="my">
      <div>My</div>
      <div className="my-turns">
        <div>
          <h2>my Turns</h2>
          <div className={`turn-div ${myTurns.length > 1 ? "hide" : ""}`}>
            {myTurns?.map((turn) => {
              // console.log(turn)
              return <Turn  turn={turn} key={turn._id}/>;
            })}
            <div
              className={`add-turn hide`}
              onClick={popTurnsOn}
            >
              +
            </div>
          </div>
        </div>
        <SetTurn popTurns={popTurns} setPopTurns={setPopTurns}/>
      </div>
    </div>
  );
}
