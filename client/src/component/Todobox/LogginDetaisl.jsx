import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Dialog,
  Alert,
} from "@mui/material";

import signUpdata from "../../servies/signUpdata.js";
import signIn from "../../servies/signIn.js";
import { SetNames } from "../../ReduxStore/storeUserData.js";

const LogginDetaisl = ({ open, setopen }) => {
  const obj = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const obj2 = {
    email: "",
    password: "",
  };

  const [signData, setsignData] = useState(obj);
  const [signInData, setsignInData] = useState(obj2);
  const [togglelogin, settogglelogin] = useState(false);
  const [names, setnames] = useState("Name");
  const [alertMessage, setAlertMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const dispatch = useDispatch();

  const handelsignup = (e) => {
    const { value, name } = e.target;
    setsignData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handelsigin = (e) => {
    const { value, name } = e.target;
    setsignInData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signUpdata(signData);
    setsignData({ ...signData, name: e.target.value });
    // setsignData("")
  
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    const statsR = await signIn(signInData);
    setsignInData({ ...signInData, name: e.target.value });
    // setsignInData("")

    if (statsR) {
      // Successful login
      setnames(statsR.name);
      setAlertMessage(`Logged in as ${statsR.name}`);
      SetNames(statsR.name);
      setIsSuccess(true);

      dispatch(SetNames(statsR.name));
      // handelClose();
    } else {
      // Wrong credentials
      setAlertMessage("Wrong credentials");
      setIsSuccess(false);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        handelClose();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);
  const handelClose = () => {
    setopen(false);
  };

  const handellogginsign = () => {
    settogglelogin(true);
  };

  const handellogginsign1 = () => {
    settogglelogin(false);
  };

  return (
    <Dialog
      onClose={handelClose}
      open={open}
      PaperProps={{ maxwidth: "unset" }}
    >
      <Container maxwidth="sm">
        {togglelogin === true ? (
          <Box sx={{ mt: 4, p: 2 }}>
            <Typography variant="h5" gutterBottom>
              Signup Form
            </Typography>
            <form onSubmit={handleSubmit}>
              {/* Rest of the code */}
              <TextField
                label="Name"
                name="name"
                value={signData.name}
                onChange={handelsignup}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                value={signData.email}
                onChange={handelsignup}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                value={signData.password}
                onChange={handelsignup}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="ConfirmPassword"
                name="confirmPassword"
                type="password"
                value={signData.confirmPassword}
                onChange={handelsignup}
                fullWidth
                margin="normal"
                required
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{mt:'10px'}}
              >
                Signup
              </Button>
              <Box sx={{mt:"10px"}}>
                if You Have Account{" "}
                <Box component="span" onClick={handellogginsign1} sx={{color:'skyblue',cursor:'pointer','&:hover':{color:'blue',fontSize:"15px"}}}>
                  Click Here
                </Box>
              </Box>
            </form>
          </Box>
        ) : (
          <Box sx={{ mt: 4, p: 2 }}>
            <Typography variant="h5" gutterBottom>
              Login form
            </Typography>
            <form onSubmit={handleSubmit2}>
              {/* Rest of the code */}
              <TextField
                label="Email"
                name="email"
                type="email"
                value={signInData.email}
                onChange={handelsigin}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                value={signInData.password}
                onChange={handelsigin}
                fullWidth
                margin="normal"
                required
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{mt:'10px'}}
              >
                Login
              </Button>
              <Box sx={{mt:"10px"}}>
                if You don't Have Account{" "}
                <Box component="span" onClick={handellogginsign} sx={{color:'skyblue',cursor:'pointer','&:hover':{color:'blue',fontSize:"15px"}}}>
                  Click Here
                </Box>
              </Box>
            </form>
          </Box>
        )}
        {alertMessage && (
          <Alert severity={isSuccess ? "success" : "error"}>
            {alertMessage}
          </Alert>
        )}
      </Container>
    </Dialog>
  );
};

export default LogginDetaisl;
