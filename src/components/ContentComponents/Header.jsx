import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import { ProfileIcon, ExpandIcon } from "../../assets/icons/ContentIcons";

function Header() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box>
        <Typography
          fontStyle="normal"
          fontWeight={700}
          fontSize="28px"
          lineHeight="36px"
          letterSpacing="0.02em"
          color={"#000000"}
          sx={{ mt: "56px", mb: "48px", ml: "32px" }}
        >
          Test_Study
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <List disablePadding sx={{ mt: "59px", mr: "56px", mb: "51px" }}>
          <ListItem disablePadding>
            <ListItemIcon sx={{ minWidth: "30px", mr: "8px" }}>
              <ProfileIcon />
            </ListItemIcon>
            <ListItemText
              sx={{
                // fontFamily: "DM Sans",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "21px",
                letterSpacing: "0.015em",
                color: "#022539",
                mt: "5px",
                mr: "8px",
                mb: "5px",
                ml: "0px",
              }}
            >
              Ankit Brijwasi
            </ListItemText>
            <ListItemIcon
              sx={{
                minWidth: "20px",
                mt: "5px",
                mr: "0px",
                mb: "5px",
              }}
            >
              <ExpandIcon />
            </ListItemIcon>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Header;
