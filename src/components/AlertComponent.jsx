import React from "react";
import { Alert, AlertTitle } from "@mui/material";

export default function AlertComponent(props) {
  const alertText = props.res;
  const state = props.state;
  const active = props.active;

  if (state) {
    return (
      <div
        style={{
          position: "fixed",
          bottom: "0",
          right: "0",
          display: `${props.active ? "block" : "none"}`,
        }}>
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          {alertText} — <strong>check it out!</strong>
        </Alert>
      </div>
    );
  } else {
    return (
      <div
        style={{
          position: "fixed",
          bottom: "0",
          right: "0",
          display: `${active ? "block" : "none"}`,
        }}>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {alertText} — <strong>check it out!</strong>
        </Alert>
      </div>
    );
  }

  //   return (
  //     <>
  //       <div
  //         style={{
  //           position: "fixed",
  //           bottom: "0",
  //           right: "0",
  //           display: `${props.active ? "block" : "none"}`,
  //         }}>
  //         <div
  //           className={`${alertColor} text-white font-bold rounded-t px-4 py-2`}>
  //           {alertText}
  //         </div>
  //       </div>
  //     </>
  //   );
  // }
}
