import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const UploadFileButton = styled(Button)({
  width: "174px",
  height: "45px",
  color: "#6D6D6D",
  borderRadius: "5px",
  boxShadow: "none",
  textTransform: "none",
  fontStyle: "Medium",
  fontWeight: 500,

  fontSize: ".98rem",
  padding: "12px 40px",
  border: " 1px solid ",
  lineHeight: "21px",
  backgroundColor: "#EAEAEA",
  borderColor: "##6D6D6D",
  fontFamily: ["DM Sans", "sans-serif"].join(","),

  "&:hover": {
    backgroundColor: "#EAEAEA",
    borderColor: "#6D6D6D",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#EAEAEA",
    borderColor: "#6D6D6D",
  },
});

export default UploadFileButton;
