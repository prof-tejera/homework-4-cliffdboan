import React from "react";

const Number = ({ value, onClick, onKeyUp }) => {
  /** TODO: What happens when a user clicks a number, what do we want to pass to our parent? */
  return (
    <div className="numButton">
      <button
        style={{
          padding: 10,
          border: "0.5px solid black",
          borderRadius: 8,
          margin: 1,
          width: 50,
          height: 60,
          cursor: "pointer",
          backgroundColor: "#B9DCFF",
          fontSize: 18
        }}
        onClick={() => onClick(value)}
        onKeyUp={(e) => onKeyUp(e.key)}
        >
      {value}
      </button>
    </div>
  );
};

export default Number;
