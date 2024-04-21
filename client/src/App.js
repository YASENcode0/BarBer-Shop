import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import Signup from "./components/Signup";
import { UserContext } from "./components/context/UserContext";
import { useEffect, useState } from "react";
import My from "./components/My";

function App() {
  const [user, setUser] = useState({});
  const [rerender,setRerender] = useState(0);

  useEffect(() => {
    async function lodae() {
      const data = localStorage.getItem("myAcu");
      setUser(JSON.parse(data));
      console.log(data)
    }
    lodae();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser , rerender , setRerender }}>
      <Router>
        <div className="app">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="blobs">
                    <div className="back-blob"></div>
                    <div className="back-blob2"></div>
                    <div className="back-blob3"></div>
                  </div>
                  <NavBar />
                  <Main />
                </>
              }
            />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/my"
              element={
                <>
                  <NavBar />
                  <div className="my-main">
                    <My />
                  </div>
                </>
              }
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
