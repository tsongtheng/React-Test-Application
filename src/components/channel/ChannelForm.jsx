import React from "react";
import {
  Box,
  Stack,
  Typography,
  // Link,
} from "@mui/material";
import { AddBackupChannelsButton } from "../../assets/customStyles/buttons/AddBackupChannelsButton";
import ChannelSelect from "./ChannelSelect";

function ChannelForm({
  channelData,
  handleAddClick,
  addChannel,
  onDelete,
  noOfBackupChannel,
}) {
  return (
    <Stack
      flexDirection={"row"}
      //   justifyContent={"space-between"}
      width={1508}
      minHeight={102}
      borderRadius={!addChannel ? "8px" : "8px 8px 0 0"}
      margin={0}
      sx={{
        backgroundColor: "#ffffff",
      }}
    >
      <Typography
        variant="body1"
        width={"101px"}
        fontSize={18}
        fontStyle={"normal"}
        fontWeight={500}
        lineHeight={"23px"}
        letterSpacing={0}
        fontFamily="inherit"
        color={"#0F0F0F"}
        margin={"39px 179px 40px 56px"}
      >
        {channelData}
      </Typography>
      <Box margin="24px 64px 24px 0">
        <ChannelSelect />
      </Box>

      {/* <Link
        href=""
        width={"180px"}
        fontSize={16}
        fontStyle={"normal"}
        fontWeight={500}
        lineHeight={"21px"}
        letterSpacing={0}
        fontFamily="inherit"
        color={"#2F7EC7"}
        margin={"40px 242px 41px 0"}
      >
        +Add Backup Channels
      </Link> */}

      <AddBackupChannelsButton
        onClick={handleAddClick}
        variant="text"
        disableRipple
        sx={{ margin: "40px 242px 41px 0" }}
      >
        {addChannel
          ? `Hide backup channels (${noOfBackupChannel})`
          : noOfBackupChannel > 0
          ? `View backup channels (${noOfBackupChannel})`
          : "+ Add Backup Channels"}
      </AddBackupChannelsButton>
    </Stack>
  );
}

export default ChannelForm;
