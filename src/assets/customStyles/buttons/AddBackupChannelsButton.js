import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const AddBackupChannelsButton = styled(Button)({
  width: "196px",
  height: "21px",
  color: "#2F7EC7",
  boxShadow: "none",
  textTransform: "none",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "1rem",
  letterSpacing: 0,
  padding: 0,

  lineHeight: "21px",
  backgroundColor: "#ffffff",
  fontFamily: ["DM Sans", "sans-serif"].join(","),

  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#ffffff",
  },
});

export { AddBackupChannelsButton };
