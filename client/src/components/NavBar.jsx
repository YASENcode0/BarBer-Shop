import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";

export default function NavBar() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  function goSignIn() {
    navigate("/signin");
  }
  function goSignUp() {
    navigate("/signup");
  }
  async function signOut() {
    setUser({});
    await localStorage.removeItem("myAcu");
  }
  return (
    <div className="NavBar">
      <ul className="List-tst-btns">
        <li
          onClick={() => {
            navigate("/");
          }}
        >
          HOME
        </li>
        <li>ABOUT</li>
        <li
          onClick={() => {
            navigate("/my");
          }}
        >
          MY
        </li>
        <li>CONTENT</li>
      </ul>
      <div className="List-btns">
        <button
          onClick={goSignIn}
          className={`btn-sign-in ${user?.name ? "hide" : ""}`}
        >
          SIGN IN
        </button>
        <button
          onClick={goSignUp}
          className={`btn-sign-up ${user?.name ? "hide" : ""}`}
        >
          SIGN UP
        </button>
        <button
          onClick={signOut}
          className={`btn-sign-up ${user?.name ? "" : "hide"}`}
        >
          SIGN OUT
        </button>
      </div>
    </div>
  );
}
