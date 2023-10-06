import React from "react";

function DateDisplay(props) {
  return (
    <div>
      <h2>Date</h2>
      <p>{props.currentDate}</p>
    </div>
  );
}

export default DateDisplay;
