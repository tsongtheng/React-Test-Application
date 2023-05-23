import React from "react";
import { Box, List, ListItem, ListItemIcon, Typography } from "@mui/material";
import { UploadFileIcon } from "../../assets/icons/ContentIcons";
import UploadFileButton from "../../assets/customStyles/buttons/UploadFileButton";

const UploadFile = () => {
  return (
    <Box
      width={"1508px"}
      height="570px"
      margin={"0 56px 40px"}
      backgroundColor="#ffffff"
      borderRadius={"5.4px"}
    >
      <Box
        width={"1444px"}
        height="506px"
        margin={"32px"}
        backgroundColor="#F8F8F8"
        borderRadius={"5px"}
        border={"dashed"}
        borderColor={"#8A8A8A"}
        sx={{ borderWidth: "1.5px" }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"174px"}
          height={"196px"}
          margin={"147px 635px 163px"}
        >
          <List disablePadding>
            <ListItem
              disablePadding
              sx={{
                minWidth: "100px",
              }}
            >
              <ListItemIcon>
                <UploadFileIcon />
              </ListItemIcon>
            </ListItem>
          </List>

          <UploadFileButton
            variant="contained"
            disableRipple
            sx={{ letterSpacing: 0 }}
          >
            Browse Files
          </UploadFileButton>
          <Typography
            variant="caption"
            fontFamily={"inherit"}
            fontStyle={"normal"}
            fontWeight={500}
            fontSize={16}
            lineHeight={"21px"}
            letterSpacing={0}
            color={"#0F0F0F"}
            margin={"0 23px 0 22px"}
            sx={{ minWidth: "129px" }}
          >
            or drop files here
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default UploadFile;
