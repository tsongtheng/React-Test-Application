import React from "react";

import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import {
  ProgressIndicatorIconGreen,
  ProgressIndicatorIconGrey,
  ProgressIndicatorNumber1,
  ProgressIndicatorNumber2,
  ProgressIndicatorNumber3,
} from "../../assets/icons/ContentIcons";
import { useMatch } from "react-router-dom";

const ProgressIndicatorDescription = [
  "Upload EDFs",
  "Map Channels",
  "Save & Preview",
];
function ProgressIndicator() {
  const isChannelPage = useMatch("/channels");
  console.log("matches", isChannelPage);

  return (
    <Box
      width="1508px"
      height="137px"
      margin={"0 56px 40px"}
      backgroundColor="#ffffff"
      borderRadius={"8px"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Box display={"flex"}>
        <List
          disablePadding
          sx={{
            width: "990px",
            margin: "27px 265px 60px 253px",
          }}
        >
          <ListItem disablePadding sx={{ justifyContent: "space-between" }}>
            <ListItemIcon sx={{ minWidth: "50px" }}>
              <ProgressIndicatorIconGreen />
            </ListItemIcon>
            <ListItemIcon sx={{ minWidth: "50px" }}>
              <ProgressIndicatorIconGrey />
            </ListItemIcon>
            <ListItemIcon sx={{ minWidth: "50px" }}>
              <ProgressIndicatorIconGrey />
            </ListItemIcon>
          </ListItem>
          {/* {[1, 2, 3].map((index) => (
            <ListItem disablePadding key={index} sx={{}}>
              <ListItemIcon sx={{ minWidth: "50px" }}>
                <ProgressIndicatorIcon />
              </ListItemIcon>
            </ListItem>
          ))} */}
        </List>
      </Box>
      <Box display={"flex"} sx={{ position: "absolute" }}>
        <List
          disablePadding
          sx={{
            width: "949px",
            margin: "39px 284px 72px 275px",
          }}
        >
          <ListItem disablePadding sx={{ justifyContent: "space-between" }}>
            <ListItemIcon sx={{ minWidth: "7px" }}>
              <ProgressIndicatorNumber1 />
            </ListItemIcon>
            <ListItemIcon sx={{ minWidth: "7px" }}>
              <ProgressIndicatorNumber2 />
            </ListItemIcon>
            <ListItemIcon sx={{ minWidth: "7px" }}>
              <ProgressIndicatorNumber3 />
            </ListItemIcon>
          </ListItem>
        </List>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        width={"890px"}
        margin={"51px 315px 84px 303px"}
        sx={{ position: "absolute" }}
      >
        <Divider
          variant="fullWidth"
          width="420px"
          sx={{
            backgroundColor: "#C4C4C4",
            borderWidth: ".5px",
          }}
        />
        <Divider
          variant="fullWidth"
          width="420px"
          sx={{
            backgroundColor: "#C4C4C4",
            borderWidth: "1px",
          }}
        />
      </Box>
      <Box
        display={"flex"}
        width={1064}
        // height={23}
        position={"absolute"}
        margin={"87px 223px 27px 221px"}
        justifyContent={"space-between"}
        color={"#8A8A8A"}
      >
        {ProgressIndicatorDescription.map((value, index) => (
          <Typography
            variant="caption"
            fontSize={18}
            fontStyle={"normal"}
            lineHeight={"23px"}
            letterSpacing={0}
            fontFamily="inherit"
            key={index}
            sx={{
              letterSpacing: "0.02em",
              color: index === 0 ? "#10A44B" : "inherit",
              minWidth: index === 0 ? "112px" : index === 1 ? "125px" : "134px",
              fontWeight: index === 0 ? 700 : 500,
            }}
          >
            {value}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}

export default ProgressIndicator;
