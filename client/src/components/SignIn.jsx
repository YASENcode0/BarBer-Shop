import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { UserContext } from "./context/UserContext";
import Loader from "./Loader";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [msg, setMsg] = useState(null);
  const { setUser } = useContext(UserContext);
  const [loader, setLoarder] = useState(false);

  useEffect(() => {
    async function lodae() {
      const data = JSON.parse(localStorage.getItem("myAcu"));
      if (data?.name) {
        navigate("/");
      } else {
        console.log(data);
      }
    }
    lodae();
  }, []);

  function goSignUp() {
    navigate("/signup");
  }

  async function logIn() {
    setLoarder(true);
    const userLog = await Axios.post("/login", { email, password });

    if (userLog.data.message) {
      changMsg(userLog.data.message);
      console.log(userLog.data.message, "hi");
    } else {
      await localStorage.setItem("myAcu", JSON.stringify(userLog.data));
      console.log(userLog);
      setUser(userLog.data);
      navigate("/");
    }
    setLoarder(false);
  }

  function changMsg(value = null) {
    setMsg(value);
  }

  return (
    <div className="signin">
      <div
        onChange={() => {
          changMsg();
        }}
        className="sign-div"
      >
        <h1>Sign In</h1>
        <input
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          placeholder="email"
        />
        <input
          required
          onChange={(e) => {
            setPass(e.target.value);
          }}
          type="password"
          placeholder="password"
        />
        <button className={`${loader ? "dis" : ""}`} onClick={logIn}>
          <span className={`${loader ? "hide" : ""}`}>SignIn</span>
          <Loader loader={loader} />
        </button>
        <hr />
        <h5 className="red">{msg}</h5>
        <span>
          create account{" "}
          <span onClick={goSignUp} className="span1">
            create
          </span>
        </span>
      </div>
    </div>
  );
}
