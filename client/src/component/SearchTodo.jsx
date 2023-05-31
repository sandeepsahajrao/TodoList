import React, { useState } from "react";
import { TextField, Box, Button } from "@mui/material";
import './searchbox.css'
import searchApi from "../servies/apirequest";
import { useSelector } from "react-redux";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
const SearchTodo = () => {
  const [todo, setTodo] = useState("");
  const RealUser = useSelector((state) => state.UserDataName);

  const handleInputChange = (event) => {
    setTodo(event.target.value);
  };

  const addTodo = async () => {
    const todata = { name: todo, author: RealUser.name };

    if (todo.trim() !== "") {
      console.log("New todo:", todo);
      searchApi(todata);
      setTodo(""); // Clear the input field
    }
  };



  
  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        position: "relative",
        margin: "50px",
        width: "40%",
        height: "90px",
        // border: "1px solid black",
        padding: "0px 20px",
        borderRadius: "5px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
      className="searchBox"
    >
      <TextField
        label="Enter Todo"
        value={todo}
        onChange={handleInputChange}
        sx={{ width: "100%", height: "55px" }}
        fullWidth
      />
      <Button
        variant="contained"
        color="primary"
        onClick={addTodo}
        sx={{
          position: "absolute",
          right: "20px",
          padding: "17px 0px",
          height: "55px",
        }}
      >
        <KeyboardDoubleArrowRightIcon></KeyboardDoubleArrowRightIcon>
      </Button>
    </Box>
  );
};

export default SearchTodo;
