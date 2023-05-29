import { React, useState } from "react";
import {
  Stack,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";

const ChannelSelect = () => {
  const stringPrimaryChannel = [
    "P_Channel1",
    "P_Channel2",
    "P_Channel3",
    "P_Channel4",
    "P_Channel5",
    "P_Channel6",
    "P_Channel7",
    "P_Channel8",
    "P_Channel9",
    "P_Channel10",
    "P_Channel11",
  ];

  const stringReferenceChannel = [
    "R_Channel1",
    "R_Channel2",
    "R_Channel3",
    "R_Channel4",
    "R_Channel5",
    "R_Channel6",
    "R_Channel7",
    "R_Channel8",
    "R_Channel9",
    "R_Channel10",
    "R_Channel11",
  ];

  const [primaryChannel, setPrimaryChannel] = useState("");
  const [referenceChannel, setReferenceChannel] = useState("");

  const handleChangePrimary = (e) => {
    setPrimaryChannel(e.target.value);
  };

  const handleChangeReference = (e) => {
    setReferenceChannel(e.target.value);
  };

  return (
    <Stack
      flexDirection={"row"}
      justifyContent={"space-between"}
      height={54}
      width={652}
      // margin={"24px 64px 24px 0"}
    >
      <FormControl
        fullWidth
        sx={{
          width: "274px",
          height: "54px",
          backgroundColor: "#ffffff",
          border: "1px solid",
          borderColor: "#EAEAEA",
          borderRadius: "4px",
          marginRight: "104px",
        }}
      >
        <InputLabel
          sx={{
            color: "#959595",
            width: "144px",
            fontFamily: "inherit",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "1rem",
            lineHeight: "21px",
            letterSpacing: 0,
          }}
        >
          Select Channel
        </InputLabel>
        <Select
          value={primaryChannel}
          label="Select Channel"
          onChange={handleChangePrimary}
        >
          {stringPrimaryChannel.map((value, index) => {
            return (
              <MenuItem value={value} key={index}>
                {value}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <FormControl
        fullWidth
        sx={{
          width: "274px",
          height: "54px",
          backgroundColor: "#ffffff",
          border: "1px solid",
          borderColor: "#EAEAEA",
          borderRadius: "4px",
        }}
      >
        <InputLabel
          sx={{
            color: "#959595",
            width: "144px",
            fontFamily: "inherit",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "1rem",
            lineHeight: "21px",
            letterSpacing: 0,
          }}
        >
          Select Channel
        </InputLabel>
        <Select
          value={referenceChannel}
          label="Select Channel"
          onChange={handleChangeReference}
        >
          {stringReferenceChannel.map((value, index) => {
            return (
              <MenuItem value={value} key={index}>
                {value}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Stack>
  );
};

export default ChannelSelect;
