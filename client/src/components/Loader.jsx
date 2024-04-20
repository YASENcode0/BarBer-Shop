import React from "react";
import loaderIcon from "../assets/loading.png";

export default function Loader({loader}) {
  if(loader)
  return (
    <>
      <img className="loader" src={loaderIcon} alt="loader"></img>
    </>
  );
}
