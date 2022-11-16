import React, { useState, useCallback } from "react";
import { Box, TextField, Button } from "@mui/material";

function MessageBox({ placeholder, hidden, onMessage }) {
  const [message, setMessage] = useState("");

  const handleChange = useCallback(() => {
    onMessage(message);
    setMessage("");
  }, [message, setMessage, onMessage]);

  const handleEnter = useCallback((event) => {
    if(event.keyCode == 13){
      handleChange();
   }
  }, [handleChange]);

  if (hidden) return "";

  return (
    <Box sx={{
      display: "flex", 
      flexDirection:"row", 
      justifyContent:"center", 
      alignItems:"center",
      m: 2,
      minWidth: "360px",
      }}
    >
      <TextField
        fullWidth
        value={message}
        label={placeholder}
        size="small"
        autoComplete="false"
        onChange={(event) => setMessage(event?.target?.value)}
        onKeyDown={handleEnter}
      />
      <Button 
        sx={{ml:2}} 
        variant="contained" 
        onClick={handleChange}
        disabled={!message}
        >
        SEND
      </Button>
    </Box>
  );
}

export default MessageBox;
