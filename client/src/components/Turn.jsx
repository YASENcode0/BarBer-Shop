import Axios from "axios";
import React from "react";

export default function Turn({ turn }) {
  async function cancelTurn(_id) {
    await Axios.post("/cancelturn", { _id }).then((res) => console.log(res));
  }

  return (
    <div className="turn" onMouseOver={()=>{console.log(turn._id)}}>
      <h4>{turn?.date}</h4>
      <h4>Hour</h4>
      <button
        onClick={() => {
          console.log(turn._id);
          cancelTurn(turn._id);
        }}
      >
        cancel
      </button>
    </div>
  );
}
