import React from "react";
import Shortcut from "./shortcut";
function shortcuts({ shortcuts }) {
  return (
    <div className="container-fluid   ">
      <div className="row   justify-content-center">
        {shortcuts.map((shortcut, index) => {
          return <Shortcut key={index} domain={shortcut}></Shortcut>;
        })}
      </div>
    </div>
  );
}

export default shortcuts;
