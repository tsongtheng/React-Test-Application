// import React, { useState } from "react";
import Box from "@mui/material/Box";
import Header from "../ContentComponents/Header";
import ProgressIndicator from "../ContentComponents/ProgressIndicator";
// import UploadFile from "../ContentComponents/UploadFile";
// import BottomNavbar from "../ContentComponents/BottomNavbar";
import ChannelHeader from "../ContentComponents/ChannelHeader";
import ChannelForm from "../ContentComponents/ChannelForm";
import Optionals from "../ContentComponents/Optionals";
// import { getFormattedData } from "../../schemaData/schemaData";
function Content() {
  // const [channels, setChannels] = useState([]);
  // const [optionals, setOptionals] = useState([]);
  // const fetchData = async () => {
  //   const data = await getFormattedData();
  //   console.log(data);
  //   setChannels(data.channels);
  //   setOptionals(data.optionals);
  // };
  // fetchData();
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
      <ChannelHeader />
      <ChannelForm />
      <Optionals />
      {/* {channels.map((channel) => (
        <ChannelForm channelData={channel} />
      ))}
      <Optionals optionals={optionals} /> */}
      {/* <UploadFile />
      <BottomNavbar /> */}
    </Box>
  );
}

export default Content;
