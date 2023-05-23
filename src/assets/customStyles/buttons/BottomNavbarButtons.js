import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const BackButton = styled(Button)({
  width: "181px",
  height: "66px",
  color: "#959595",
  borderRadius: "8px",
  boxShadow: "none",
  textTransform: "none",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "1.25rem",
  padding: "20px 67.5px",

  margin: "23px 32px 23px 56px",

  border: " 1px solid ",
  lineHeight: "26px",
  backgroundColor: "#ffffff",
  borderColor: "#959595",
  fontFamily: ["DM Sans", "sans-serif"].join(","),

  "&:hover": {
    backgroundColor: "#ffffff",
    borderColor: "#959595",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#ffffff",
    borderColor: "#959595",
  },
});

const CancelMontageButton = styled(Button)({
  width: "154px",
  height: "26px",
  color: "#959595",
  boxShadow: "none",
  textTransform: "none",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "1.25rem",
  padding: 0,

  margin: "43px 0",

  lineHeight: "26px",
  backgroundColor: "#ffffff",
  fontFamily: ["DM Sans", "sans-serif"].join(","),

  "&:hover": {
    backgroundColor: "#ffffff",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#ffffff",
  },
});

const NextButton = styled(Button)({
  width: "181px",
  height: "66px",
  color: "#ffffff",
  borderRadius: "8px",
  boxShadow: "none",
  textTransform: "none",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "1.25rem",
  padding: "20px 68.5px",

  margin: "23px 56px 23px 0",

  lineHeight: "26px",
  backgroundColor: "#9BC4EA",
  fontFamily: ["DM Sans", "sans-serif"].join(","),

  "&:hover": {
    backgroundColor: "#7BC4Ea",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#9BC4EA",
  },
});

export { BackButton, CancelMontageButton, NextButton };
