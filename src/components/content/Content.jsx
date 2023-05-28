import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Header from "../ContentComponents/Header";
import ProgressIndicator from "../ContentComponents/ProgressIndicator";
// import UploadFile from "../ContentComponents/UploadFile";
import BottomNavbar from "../ContentComponents/BottomNavbar";
import ChannelHeader from "../ContentComponents/ChannelHeader";
import ChannelForm from "../ContentComponents/ChannelForm";
// import Optionals from "../ContentComponents/Optionals";
import { getFormattedData } from "../../schemaData/schemaData";
import BackupChannels from "../ContentComponents/BackupChannels";
import ChannelFormComponent from "../ContentComponents/ChannelFormComponent";

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
      {/* <ChannelFormComponent /> */}
      {/* <ChannelForm />
      <BackupChannels /> */}

      {channels.map((channel, index) => (
        <ChannelFormComponent
          key={index}
          channelData={channel}
          // sx={{ marginBottom: channel[channel.length] && "200px" }}
        />
      ))}
      {/* <Optionals optionalsData={optionals} /> */}
      {/* <UploadFile /> */}
      <BottomNavbar />
    </Box>
  );
};

export default Content;
