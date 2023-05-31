import React, { useEffect, useState } from "react";
import { Box, Typography, Button , useMediaQuery} from "@mui/material";
import {
  DeleteForever,
  FileDownloadDone,
  BorderColor,
} from "@mui/icons-material";
import getApidata from "../../servies/getDataApi";
import updateTodoApi from "../../servies/updateTodoApi";
import deleteTodo from "../../servies/deleteTodo";

const ListOf = () => {
  const [fetchData, setfetchdata] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [editedName, setEditedName] = useState("");

  const isWidthBelow900 = useMediaQuery("(min-width:900px)");

  console.log(fetchData._id);

  const handleEdit = (index) => {
    console.log(`Editing todo at index ${index}`);
    const editedTodo = fetchData[index];
    setEditIndex(index);
    setEditedName(editedTodo.name);
    // setEditedAuthor(editedTodo.author);
  };
  const handleDelete = (id) => {
    deleteTodo(id);
  };

  const handleSave = (index,UpdateId) => {
    console.log("Saving changes");
    console.log(index);
    if (editIndex !== -1) {
      const updatedTodo = { ...fetchData[editIndex], name: editedName };
      updateTodoApi(UpdateId, updatedTodo);
      const updatedData = [...fetchData];
      updatedData[editIndex].name = editedName;
      setfetchdata(updatedData);
      setEditIndex(-1);
      setEditedName("");
    }
  };

  useEffect(() => {
    const fetchdata = async () => {
      const response = await getApidata();

      if (response) {
        setfetchdata(response);
      }
    };
    fetchdata();
  }, []);

  // Rest of the code...

  return (
    <Box  sx={{ width: isWidthBelow900 ? "43%" : "80%" }} >
      {/* Rest of the code... */}

      {fetchData.map((todo, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            border: "1px solid",
            margin: "20px 0px",
            borderRadius: "5px",
          }}
        >
          <Box sx={{ padding: "10px", borderRadius: "5px" }}>
            {editIndex === index ? (
              <input
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />
            ) : (
              <Typography variant="h6">{todo.name}</Typography>
            )}
            <Typography variant="subtitle1">{todo.author}</Typography>
            {/* {editIndex === index ? (
              <input
                type="text"
                value={editedAuthor}
                onChange={(e) => setEditedAuthor(e.target.value)}
              />
            ) : (
              <Typography variant="subtitle1">{todo.author}</Typography>
            )} */}
            <Typography variant="subtitle2">{todo.time}</Typography>
          </Box>

          <Box sx={{ padding: "10px" }}>
            {editIndex === index ? (
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleSave(index,todo._id)}
              >
                Save
              </Button>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  gap: "25px",
                  border: "1px solid",
                  padding: "5px",
                }}
              >
                <Box
                  sx={{ borderRight: "1px solid", height: "100%",cursor: "pointer" }}
                  onClick={() => handleEdit(index)}
                >
                  <BorderColor />
                </Box>
                {/* Rest of the code... */}
                <Box
                  sx={{
                    borderRight: "1px solid",
                    height: "100%",
                    cursor: "pointer",
                  }}
                  onClick={() => handleDelete(todo._id)}
                >
                  <DeleteForever />
                </Box>
                <Box sx={{ cursor: "pointer" }}>
                  <FileDownloadDone />
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ListOf;
