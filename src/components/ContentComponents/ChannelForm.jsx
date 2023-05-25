import React from "react";
import {
  Stack,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Link,
} from "@mui/material";
// import { string, randomStrings } from "../../randomString/randomString";

function ChannelForm({ channelData }) {
  const string = [
    "abcd",
    "ghhgj",
    "gfghfh",
    "asdjg",
    "asjgja",
    "sduhgu",
    "sjdhgkjh",
    "dshgsd",
    "sjhgds",
    "sjdhghs",
    "sdjhgk",
    "sgheiu",
  ];
  const [selectChannel, setSelectChannel] = React.useState("");

  const handleChange = (event) => {
    setSelectChannel(event.target.value);
  };

  return (
    <Stack
      flexDirection={"row"}
      //   justifyContent={"space-between"}
      width={1508}
      height={102}
      borderRadius={"8px"}
      margin={"0 56px 24px"}
      sx={{ backgroundColor: "#ffffff" }}
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
        {/* Channel1 */}
        {channelData}
      </Typography>

      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        // margin="24px 96px 24px 194px"
        sx={{ minWidth: 120 }}
      >
        {[1, 2].map((index) => (
          <FormControl
            fullWidth
            key={index}
            sx={{
              width: "274px",
              height: "54px",
              backgroundColor: "#ffffff",
              border: "1px solid",
              borderColor: "#EAEAEA",
              borderRadius: "4px",
              marginTop: "24px",
              marginBottom: "24px",
              marginRight: index === 0 ? "104px" : "96px",
            }}
          >
            <InputLabel>Select Channel</InputLabel>
            <Select
              value={selectChannel}
              label="Select Channel"
              onChange={handleChange}
            >
              {string.map((value, index) => {
                return <MenuItem key={index}>{value}</MenuItem>;
              })}
            </Select>
          </FormControl>
        ))}
      </Stack>
      <Link
        href="#"
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
        +Add Backup Channel
      </Link>
    </Stack>
  );
}

export default ChannelForm;
