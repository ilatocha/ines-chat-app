import React, { useState, useMemo } from "react";
import { Typography, Box } from "@mui/material";

import MessageBox from "./components/messageBox";
import Chat from "./components/chat";

function randomColor() {
  return `#${Math.floor(Math.random() * 0xFFFFFF).toString(16)}`;
}

function App() {
  const [name, setName] = useState(undefined);
  // eslint-disable-next-line no-unused-vars
  const [color, _] = useState(randomColor());
  const title = useMemo(() => {
    let _title = "Ines Chat App";
    if (name) {
      return  <>{_title}&nbsp;<b style={{color}}>{"(" + name + ")"}</b></>
    }
    return _title;
  },[name, color]);

  return (
    <Box sx={{
      display:"flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      height: "100vh",
    }}>
      <header>
        <Typography 
          variant="h1" 
          sx={{
            my:2,
            display: "flex",
            fontSize:"20px"
          }}>
          {title}
        </Typography>
      </header>
      <section>
        {name ? <Chat name={name} color={color} /> 
              : <MessageBox onMessage={setName} hidden={name} placeholder="Enter your name and press SEND" />}
      </section>
    </Box>
  );
}

export default App;
