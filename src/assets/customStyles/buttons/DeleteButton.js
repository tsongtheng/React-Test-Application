import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const DeleteButton = styled(Button)({
  minWidth: "56px",
  height: "23px",
  color: "#E03A3A",
  boxShadow: "none",
  textTransform: "none",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "1.125rem",
  letterSpacing: 0,
  padding: 0,

  lineHeight: "23px",
  backgroundColor: "#F7F7F7",
  fontFamily: ["DM Sans", "sans-serif"].join(","),

  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#F7F7F7",
  },
});

export { DeleteButton };
