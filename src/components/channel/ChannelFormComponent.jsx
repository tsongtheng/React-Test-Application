import React, { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import ChannelForm from "./ChannelForm";
import BackupChannels from "./BackupChannels";
import { AddBackupChannelsButton } from "../../assets/customStyles/buttons/AddBackupChannelsButton";

const ChannelFormComponent = ({ channelData }) => {
  const [showBackupChannel, setShowBackupChannel] = useState(false);
  const [moreBackupChannel, setMoreBackupChannel] = useState([]);
  const [onDelete, setOnDelete] = useState(false);
  const [moreBackupChannelPos, setMoreBackupChannelPos] = useState(null);

  const handleAddBackupChannelClick = () => {
    if (moreBackupChannel.length < 1) {
      setMoreBackupChannel([
        <BackupChannels
          onDeleteClick={handleOnDeleteClick}
          moreBackupChannelClick={handleMoreBackupChannelClick}
          key={moreBackupChannel.length}
          channelKey={moreBackupChannel.length}
        />,
      ]);
      setShowBackupChannel((prevState) => !prevState);
    } else {
      setShowBackupChannel((prevState) => !prevState);
    }
  };

  const handleMoreBackupChannelClick = () => {
    setMoreBackupChannel((moreBackupChannel) => [
      ...moreBackupChannel,
      <BackupChannels
        onDeleteClick={handleOnDeleteClick}
        moreBackupChannelClick={handleMoreBackupChannelClick}
        key={moreBackupChannel.length}
        channelKey={moreBackupChannel.length}
      />,
    ]);
  };

  const handleOnDeleteClick = (key) => {
    setMoreBackupChannelPos(key);
    setOnDelete(true);
  };

  useEffect(() => {
    if (onDelete) {
      const a = moreBackupChannel.filter(
        (ch) => ch.props.channelKey !== moreBackupChannelPos
      );
      setMoreBackupChannel(a);

      if (a.length === 0) {
        setShowBackupChannel((prevState) => !prevState);
      }
      setOnDelete(false);
    }
  }, [onDelete, moreBackupChannel, moreBackupChannelPos]);

  return (
    <Stack
      width={1508}
      margin={"0 56px 24px 56px"}
      boxShadow={"1px 1px 4px rgba(0, 0, 0, 0.05)"}
      borderRadius={2}
      sx={{
        backgroundColor: "#F7F7F7",
        // backgroundColor: "red",
      }}
    >
      <ChannelForm
        channelData={channelData}
        moreBackupChannel={moreBackupChannel}
        noOfBackupChannel={moreBackupChannel.length}
        handleAddClick={handleAddBackupChannelClick}
        addChannel={showBackupChannel}
      />
      {/* {addBackupChannel && <BackupChannels />} */}

      {showBackupChannel &&
        moreBackupChannel.length > 0 &&
        moreBackupChannel.map((value, i) => value)}

      {showBackupChannel && (
        <AddBackupChannelsButton
          disableRipple
          onClick={handleMoreBackupChannelClick}
          variant="text"
          sx={{
            width: "178px",
            color: "#2CA9E3",
            backgroundColor: "transparent",
            // backgroundColor: "#F7F7F7",
            // backgroundColor: "green",
            margin: "24px 992px 32px 338px",
          }}
        >
          + Add backup channels
        </AddBackupChannelsButton>
      )}
    </Stack>
  );
};

export default ChannelFormComponent;
