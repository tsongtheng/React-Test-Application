import * as React from "react";
import {
  Box,
  Drawer,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import {
  DashboardIcon,
  MontagesIcon,
  CreditsIcon,
} from "../assets/icons/SidebarIcons";

const sidebarItems = [
  { id: 1, icon: <DashboardIcon />, item: "Dashboard" },
  { id: 2, icon: <MontagesIcon />, item: "Montages" },
  { id: 3, icon: <CreditsIcon />, item: "Credits" },
];

const Sidebar = () => {
  return (
    <Box>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          height: "100vh",
          // height: "1080px",
          width: "300px",
          border: 0,
          "& .MuiDrawer-paper": {
            border: 0,
            width: 300,
            // height: "1080px",
            height: "100vh",

            backgroundColor: "#04273A",
            boxSizing: "border-box",
            justifyContent: "space-between",
          },
        }}
      >
        <Box>
          <Typography
            variant="h5"
            width={142}
            fontFamily={"inherit"}
            fontStyle="normal"
            fontSize={28}
            fontWeight={700}
            lineHeight="36px"
            color="#ffffff"
            sx={{ margin: "40px 79px 32px" }}
          >
            React Test
          </Typography>

          <Divider
            variant="middle"
            width="250px"
            sx={{
              // "&.MuiDrawer-paper": {
              //   width: "250px",
              //   boxSizing: "border-box",
              // },
              backgroundColor: "#4F4F4F",
              margin: "0 25px 48px",
              borderWidth: "1px",
              borderRadius: "1px",
            }}
          />

          <List disablePadding sx={{ color: "#ffffff" }}>
            {sidebarItems.map(({ id, icon, item }) => (
              <ListItem
                // disableGutters
                disablePadding
                key={id}
                sx={{
                  width: "133px",
                  margin: "0 135px 48px 32px",
                }}
              >
                <ListItemButton
                  disableGutters
                  sx={{
                    pt: 0,
                    pb: 0,
                  }}
                >
                  <ListItemIcon sx={{ minWidth: "24px", mr: "16px" }}>
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                    disableTypography
                    primary={item}
                    sx={{
                      mt: 0,
                      mb: 0,
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "18px",
                      lineHeight: "23px",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box
          display="flex"
          flexDirection={"column"}
          alignItems={"center"}
          width={248}
          height={145}
          padding={"40px"}
          gap={"8px"}
          backgroundColor="#02354F"
          color="#EAEAEA"
          borderRadius={"4px"}
          margin={"0 26px 59px"}
        >
          {["1,650", "Total Credits Available"].map((value, index) => (
            <Typography
              variant="body2"
              key={index}
              width={index === 0 ? "69px" : "168px"}
              fontFamily={"inherit"}
              fontStyle={"normal"}
              fontSize={index === 0 ? "28px" : "16px"}
              lineHeight={index === 0 ? "36px" : "21px"}
              letterSpacing={0}
              fontWeight={500}
            >
              {value}
            </Typography>
          ))}
          {/* <Typography fontSize={28} fontWeight={500}>
            1,650
          </Typography>
          <Typography fontSize={16} fontWeight={500}>
            Total Credits Available
          </Typography> */}
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
