import Axios from "axios";
import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

export default function Turn({ turn }) {

  const { user, setUser , rerender , setRerender } = useContext(UserContext);

  async function cancelTurn(_id) {
    await Axios.post("/cancelturn", { _id }).then((res) => console.log(res));
  }

  return (
    <div className="turn">
      <h4>{turn?.date}</h4>
      <h4>Hour</h4>
      <button
        onClick={() => {
          console.log(turn._id);
          cancelTurn(turn._id);
          setRerender(rerender + 1);
        }}
      >
        cancel
      </button>
    </div>
  );
}
