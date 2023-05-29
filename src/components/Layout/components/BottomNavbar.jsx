import React from "react";
import { Box, Stack } from "@mui/material";
import {
  BackButton,
  CancelMontageButton,
  NextButton,
} from "../../../assets/customStyles/buttons/BottomNavbarButtons";
import { useNavigate } from "react-router-dom";

function BottomNavbar() {
  const navigate = useNavigate();

  const handleChannel = () => {
    navigate("/channels");
  };

  return (
    <Box
      width="1620px"
      height="112px"
      margin={0}
      backgroundColor="#ffffff"
      position="fixed"
      bottom={0}
      zIndex={999}
    >
      <Stack
        // spacing={{}}
        direction={"row"}
        useFlexGap
        justifyContent={"space-between"}
      >
        <Stack direction="row">
          <BackButton
            variant="outlined"
            disableRipple
            sx={{ letterSpacing: 0 }}
          >
            Back
          </BackButton>
          <CancelMontageButton
            variant="text"
            disableRipple
            sx={{ letterSpacing: 0 }}
          >
            Cancel Montage
          </CancelMontageButton>
        </Stack>

        <NextButton
          onClick={handleChannel}
          variant="contained"
          disableRipple
          sx={{ letterSpacing: 0 }}
        >
          Next
        </NextButton>
      </Stack>
    </Box>
  );
}

export default BottomNavbar;
