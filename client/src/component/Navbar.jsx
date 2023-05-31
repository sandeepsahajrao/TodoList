import { Box, Stack, Typography, Button, Avatar,useMediaQuery } from "@mui/material";
import React from "react";
import "./navbar.css";
// import { useDispatch } from "react-redux";
// import toggleSlice from "../ReduxStore/toggleSlice";
// import { toggleButton } from "../ReduxStore/toggleSlice";
import { useState } from "react";
import { useSelector } from "react-redux";
import LogginDetaisl from "./Todobox/LogginDetaisl";
const Navbar = () => {
  const [open, setopen] = useState(false);
  const RealUser = useSelector((state) => state.UserDataName);

  const isWidthBelow900 = useMediaQuery("(max-width:900px)");
  // const dispatch=useDispatch()
  const handeltoggle = () => {
    // dispatch(toggleButton(true));
    setopen(true);
  };
  return (
    <Stack className="NavbarMain" sx={{ width: isWidthBelow900 ? "70%" : "50%" ,padding:"0px 30px"}}>
      <Box>
        <Typography>TodoList</Typography>
      </Box>
      <Box sx={{ display: "flex", gap: "50px" }}>
        {RealUser.name !== "Name" ? (
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar></Avatar>
            <Typography>{RealUser.name}</Typography>
          </Box>
        ) : (
          <Button variant="contained" onClick={handeltoggle}>
            Login
          </Button>
        )}
        <LogginDetaisl open={open} setopen={setopen}></LogginDetaisl>
        {/* create btn component and add loggging toggle inside there */}
      </Box>
    </Stack>
  );
};

export default Navbar;
