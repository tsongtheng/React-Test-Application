import * as React from "react";
import { Checkbox } from "@mui/material";
import { CheckboxIcon } from "../../icons/ContentIcons";
import CheckedIcon from "./CheckedIcon";

const CustomizedCheckbox = ({ checked }) => {
  return (
    <Checkbox
      sx={{ minWidth: "18.5px", margin: "2.75px 10.75px 2.75px 0" }}
      disableRipple
      defaultChecked={checked}
      checkedIcon={<CheckedIcon />}
      icon={<CheckboxIcon />}
    />
  );
};

export default CustomizedCheckbox;
