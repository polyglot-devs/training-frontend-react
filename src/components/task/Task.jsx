import { useState } from "react";

function Task({ children }) {
  const [fill, setFill] = useState("transparent");
  const cardStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "grey",
    borderRadius: "20px",
    padding: "10px",
    margin: "30px 0px",
  };
  const btnStyle = {
    borderRadius: "50px",
    width: "30px",
    height: "30px",
    border: "1px solid black",
    backgroundColor: fill,
    cursor: "pointer",
  };

  return (
    <div style={cardStyle}>
      <p>{children}</p>
      <div
        onClick={() => {
          if (fill === "green") {
            setFill("transparent");
          } else {
            setFill("green");
          }
        }}
        style={btnStyle}
      ></div>
    </div>
  );
}

export default Task;
