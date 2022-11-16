import React, { useMemo } from "react";

import { Box, Typography, Chip } from "@mui/material";

function ChatMessage({id, name, showName, message, color, leftAlign}) {

  const justifyContent = useMemo(() => {
    if (leftAlign) {
      return { justifyContent: "flex-start" };
    }
    return { justifyContent: "flex-end" };
  },[leftAlign]);

  const username = useMemo(() => {
    if (showName) {
      return (
        <Typography 
          sx={{ 
            display: "flex", 
            justifyContent,
            color:"gray"
          }}
          variant="subtitle2"
          >
          {name}
        </Typography> 
      );
    }
    return "";
  },[name, leftAlign, showName]);

  return (
    <Box 
      key={id}
      sx={{
        py: "1px"
      }}
      >
      {username}
      <Box 
        sx={{ 
          display: "flex", 
          justifyContent,
        }}>
        <Chip 
          sx={{
            backgroundColor: color,
            color: "white",
            maxWidth:"200px",
            height:"auto",
            minHeight:"32px",
            "& .MuiChip-label": {
              whiteSpace: "break-spaces",
              padding: "6px 12px",
          }}}
          label={
            <Typography variant="body2">{message}</Typography>
          } 
          />
      </Box>
    </Box>
  );
}

export default ChatMessage;
