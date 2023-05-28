import { Stack, Box } from "@mui/material";
import React from "react";
import ChannelSelect from "./ChannelSelect";
import { DeleteIcon } from "../../assets/icons/ContentIcons";
import { DeleteButton } from "../../assets/customStyles/buttons/DeleteButton";

function BackupChannels({ channelKey, moreBackupChannelClick, onDeleteClick }) {
  const handleDelete = () => {
    onDeleteClick(channelKey);
  };
  return (
    <Stack
      flexDirection="column"
      width={1508}
      height={86}
      borderRadius={"0 0 0 0"}
      margin={"-24px 0 0"}
      sx={{
        marginTop: moreBackupChannelClick && 0,

        backgroundColor: "#F7F7F7",
        // backgroundColor: "yellow",
      }}
    >
      <Stack
        flexDirection="row"
        justifyContent={"space-between"}
        width={800}
        height={86}
        margin={"0 370px 0 338px"}
      >
        <Box height={54} margin={"24px 64px 0 0"}>
          <ChannelSelect />
        </Box>
        <Stack flexDirection="row" alignItems={"center"}>
          <DeleteIcon />
          <DeleteButton
            onClick={handleDelete}
            // onClick={handleOnDeleteClick}
            sx={{ marginLeft: "8px" }}
          >
            Delete
          </DeleteButton>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default BackupChannels;
