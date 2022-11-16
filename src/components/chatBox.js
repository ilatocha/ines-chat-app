import React from "react";
import { Paper } from "@mui/material";

function ChatBox({children}) {
  return (
    <Paper sx={{
      display: "block",
      p: 2,
      m: 2,
      width: {xs: "80vw", sm:"50vw"},
      height: "400px",
      overflowY: "auto",
    }}
    >
      {children}
    </Paper>
  );
}

export default ChatBox;
