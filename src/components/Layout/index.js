import React from "react";
import Box from "@mui/material/Box";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ProgressIndicator from "../progressIndicator/ProgressIndicator";
// import ProgressIndicator from "../ContentComponents/ProgressIndicator";
import BottomNavbar from "./components/BottomNavbar";

function Layout({ children }) {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box
        backgroundColor="#F5F6FA"
        minHeight={"100vh"}
        width="100%"
        display={"flex"}
        flexDirection={"column"}
      >
        <Header />
        <ProgressIndicator />
        {children}
        <BottomNavbar />
      </Box>
    </Box>
  );
}

export default Layout;
