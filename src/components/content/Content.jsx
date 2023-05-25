import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Header from "../ContentComponents/Header";
import ProgressIndicator from "../ContentComponents/ProgressIndicator";
// import UploadFile from "../ContentComponents/UploadFile";
import BottomNavbar from "../ContentComponents/BottomNavbar";
import ChannelHeader from "../ContentComponents/ChannelHeader";
import ChannelForm from "../ContentComponents/ChannelForm";
import Optionals from "../ContentComponents/Optionals";
import { getFormattedData } from "../../schemaData/schemaData";
const Content = () => {
  const [channels, setChannels] = useState([]);
  const [optionals, setOptionals] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getFormattedData();
      // console.log(data);
      setChannels(data.channels);
      setOptionals(data.optionals);
    })();
  }, []);
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

      {channels.map((channel, index) => (
        <ChannelForm key={index} channelData={channel} />
      ))}
      <Optionals optionalsData={optionals} />
      {/* <UploadFile /> */}
      <BottomNavbar />
    </Box>
  );
};

export default Content;
