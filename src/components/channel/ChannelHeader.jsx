import React from "react";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";

const headingName = [
  "Channel",
  "Primary Channel(default select)",
  "Reference Channel(default N/A)",
];
function ChannelHeader() {
  return (
    <Stack
      flexDirection="row"
      width={1508}
      height={63}
      borderRadius={"3px"}
      margin={"0 56px 32px"}
      sx={{ backgroundColor: "#E5F3FF" }}
    >
      {headingName.map((value, index) => (
        <Typography
          variant="caption"
          fontSize={18}
          fontStyle={"normal"}
          fontWeight={500}
          lineHeight={"23px"}
          letterSpacing={0}
          fontFamily="inherit"
          color={"#0F0F0F"}
          marginTop={"20px"}
          marginBottom={"20px"}
          key={index}
          sx={{
            ml: index === 0 ? "56px" : index === 1 ? "212px" : "103px",
            mr: index === 3 ? "517px" : 0,
            width: index === 0 ? "70px" : "275px",
          }}
        >
          {value}
        </Typography>
      ))}
    </Stack>
  );
}

export default ChannelHeader;
