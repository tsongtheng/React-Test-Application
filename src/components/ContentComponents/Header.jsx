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
          variant="h5"
          width={"162px"}
          height={"36px"}
          fontFamily="inherit"
          fontStyle="normal"
          fontWeight={700}
          fontSize="28px"
          lineHeight="36px"
          letterSpacing="0.02em"
          color={"#000000"}
          sx={{ mt: "56px", mb: "48px", ml: "56px" }}
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
        <List disablePadding>
          <ListItem
            disablePadding
            sx={{
              width: "167px",
              height: "30px",
              mt: "59px",
              mr: "56px",
              mb: "51px",
            }}
          >
            <ListItemIcon sx={{ minWidth: "30px" }}>
              <ProfileIcon />
            </ListItemIcon>
            <ListItemText
              disableTypography
              sx={{
                fontFamily: ("DM Sans", "sans - serif"),
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "21px",
                letterSpacing: "0.015em",
                color: "#022539",
                margin: "5px 8px",
              }}
            >
              Ankit Brijwasi
            </ListItemText>
            <ListItemIcon
              sx={{
                minWidth: "20px",
                mt: "5px",
                // mr: "0px",
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
