import Pages from "../Constants";
import Navbar from "./Navbar";
import React from "react";

function Manage(){
    return (
      <div id='manage'>
          <h1>Manage</h1>
          <Navbar current={Pages.MANAGE}/>
      </div>
    );
}

export default Manage;