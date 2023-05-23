import React from "react";
import Box from "@mui/material/Box";
import Header from "./ContentComponents/Header";
import ProgressIndicator from "./ContentComponents/ProgressIndicator";
import UploadFile from "./ContentComponents/UploadFile";
import BottomNavbar from "./ContentComponents/BottomNavbar";
function Content() {
  return (
    <Box
      backgroundColor="#F5F6FA"
      minHeight={"100vh"}
      width="100%"
      display={"flex"}
      flexDirection={"column"}
    >
      <Header />
      <ProgressIndicator />
      <UploadFile />
      <BottomNavbar />
    </Box>
  );
}

export default Content;
