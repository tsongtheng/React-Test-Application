import React from "react";
import Box from "@mui/material/Box";
import Header from "./ContentComponents/Header";
function Content() {
  return (
    <Box sx={{ backgroundColor: "yellow", minHeight: "100vh", width: "100%" }}>
      <Header />
    </Box>
  );
}

export default Content;
