import React from "react";

const Scroll = (props) => {
  // console.log(props);
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "5px solid darkblue",
        // height: "70vh",
        maxHeight: "80vh",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
