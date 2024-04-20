import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { UserContext } from "./context/UserContext";
import Loader from "./Loader";

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [phone, setPhone] = useState(null);
  const [loader, setLoader] = useState(false);

  const [msg, setMsg] = useState(null);
  const { setUser } = useContext(UserContext);

  // * check if user are loged in *
  // useEffect(() => {
  //   async function lodae() {
  //     const data = JSON.parse(localStorage.getItem("myAcu"));
  //     if (data?.name) {
  //       navigate("/");
  //     } else {
  //       console.log(data);
  //     }
  //   }
  //   lodae();
  // }, []);

  function goSignIn() {
    navigate("/signin");
  }

  function changMsg(value = null) {
    setMsg(value);
  }

  async function CreateAccount() {
    setLoader(true);
    const userLog = await Axios.post("/adduser", {
      name,
      email,
      password,
      phone,
    });
    console.log(userLog);
    if (userLog.data.message) {
      changMsg(userLog.data.message);
      console.log(userLog.data.message);
    } else {
      await localStorage.setItem("myAcu", JSON.stringify(userLog.data));

      setUser(userLog.data);
      console.log(userLog.data);
      navigate("/");
    }
    setLoader(false);
  }

  return (
    <div className="signin">
      <form
        className="sign-up-div"
        onChange={() => {
          changMsg();
        }}
        onSubmit={(e) => {
          CreateAccount();
          e.preventDefault();
        }}
      >
        <h1>Sign up</h1>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          type="text"
          placeholder="Your name"
          required
          minLength={3}
        />
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          type="email"
          placeholder="email"
          required
        />
        <input
          onChange={(e) => {
            setPass(e.target.value);
          }}
          value={password}
          type="password"
          placeholder="password"
          required
          minLength={6}
        />
        <input
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          value={phone}
          type="tel"
          placeholder="phone"
          required
          minLength={7}
        />
        <button className={`${loader ? "dis" : ""}`} type="submit">
          <span className={`${loader ? "hide" : ""} dis`}>SignIn</span>
          <Loader loader={loader} />
        </button>
        <hr />
        <h5 className="red">{msg}</h5>
        <span>
          I have account{" "}
          <span onClick={goSignIn} className="span1">
            signIn
          </span>
        </span>
      </form>
    </div>
  );
}
