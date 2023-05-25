import React from "react";
import { Stack, Typography } from "@mui/material";
import CustomizedCheckbox from "../../assets/customStyles/checkbox/AdditionalSettingsCheckbox";

function Optionals() {
  return (
    <Stack
      flexDirection={"row"}
      width={1508}
      height={108}
      borderRadius={"8px"}
      margin={"0 56px 40px"}
      sx={{ backgroundColor: "#ffffff" }}
    >
      <Typography
        variant="body1"
        fontSize={18}
        fontStyle={"normal"}
        fontWeight={500}
        lineHeight={"23px"}
        letterSpacing={0}
        fontFamily="inherit"
        color={"#000000"}
        margin={"43px 120px 42px 56px"}
        sx={{ minWidth: "162px" }}
      >
        Additional Settings
      </Typography>
      {["optional1", "optional2"].map((value, index) => {
        return (
          <Stack
            flexDirection="row"
            key={index}
            margin="42.58px 48px 41.42px 0"
            // marginTop="42.58"
            // marginBottom="41.42px"
            sx={{ mr: index === 0 ? "48px" : 0 }}
          >
            <CustomizedCheckbox
            //  checked={value}
            />
            <Typography
              variant="body1"
              fontSize={18}
              fontStyle={"normal"}
              fontWeight={500}
              lineHeight={"23px"}
              letterSpacing={0}
              fontFamily="inherit"
              color={"#0F0F0F"}
              sx={{ minWidth: "80px" }}
            >
              {value}
              {/* Optional {index + 1} */}
            </Typography>
          </Stack>
        );
      })}
    </Stack>
  );
}

export default Optionals;
