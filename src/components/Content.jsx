import React from "react";
import Box from "@mui/material/Box";
import Header from "./ContentComponents/Header";
import ProgressIndicator from "./ContentComponents/ProgressIndicator";
function Content() {
  return (
    <Box
      backgroundColor="#F5F6FA"
      minHeight={"100vh"}
      width="100%"
      flex={"flex"}
      flexDirection={"column"}
    >
      <Header />
      <ProgressIndicator />
    </Box>
  );
}

export default Content;
