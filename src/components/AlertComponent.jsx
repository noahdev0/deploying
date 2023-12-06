import React from "react";

export default function AlertComponent(props) {
  const alertText = props.res;

  let alertColor;

  if (props.state) {
    alertColor = "bg-green-500";
  } else {
    alertColor = "bg-red-500";
  }

  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: "0",
          right: "0",
          display: `${props.active ? "block" : "none"}`,
        }}>
        <div
          className={`${alertColor} text-white font-bold rounded-t px-4 py-2`}>
          {alertText}
        </div>
      </div>
    </>
  );
}
