import React from "react";

const Operation = ({ value, onClick, onKeyUp }) => {
  /** TODO: What happens when a user clicks an Operation, what do we want to pass to our parent? */
  return (
    <div className="opButton">
      <button
        style={{
          fontSize: 18,
          fontWeight: "bolder",
          padding: 10,
          border: "0.5px solid black",
          borderRadius: 8,
          margin: 3,
          width: 60,
          cursor: "pointer",
          backgroundColor: "#F03B3B"
        }}
        onClick={() => onClick(value)}
        onKeyUp={(e) => onKeyUp(e.key)}
      >
        {value}
      </button>
    </div>
  );
};

export default Operation;
