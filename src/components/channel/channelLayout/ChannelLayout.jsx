import React, { useState, useEffect } from "react";
import ChannelHeader from "../ChannelHeader";
import ChannelFormComponent from "../ChannelFormComponent";
import Optionals from "../Optionals";
import { getFormattedData } from "../../../schemaData/schemaData";

function Content() {
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
    <>
      <ChannelHeader />
      {channels.map((channel, index) => (
        <ChannelFormComponent key={index} channelData={channel} />
      ))}
      <Optionals optionalsData={optionals} />
    </>
  );
}

export default Content;
