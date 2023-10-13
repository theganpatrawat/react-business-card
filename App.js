import React from "react";
import Photo from "./components/photo";
import Main from "./components/main";
import Social from "./components/social";

export default function App(){
  return (
    <div className="container">
      <Photo/>
      <Main/>
      <Social/>
    </div>
  );
};