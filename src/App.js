import React from "react";
// import { Route, Routes } from "react-router-dom";
import Box from "@mui/material/Box";

import Sidebar from "./components/sidebar/Sidebar";
import Content from "./components/content/Content";

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/books" element={<BookList />} />
    //   <Route path="*" element={<NotFound />} />
    // </Routes>

    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Content />
    </Box>
  );
}

export default App;
