import React from "react";
import Box from "@mui/material/Box";

import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Content />
    </Box>
  );
}

export default App;
