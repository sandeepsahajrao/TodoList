
import "./App.css";
import Navbar from "./component/Navbar";
import { Stack } from "@mui/material";
import LogginDetaisl from "./component/Todobox/LogginDetaisl";
import store from "./ReduxStore/store";
import { Provider } from "react-redux";
import SearchTodo from "./component/SearchTodo";
import ListOf from "./component/Todolistbox/ListOf";
import { Box } from "@mui/material";

function App() {
  return (
    <>
    <Provider store={store} >

      <Stack sx={{ alignItems: "center"}}>
        <Navbar></Navbar>
        <SearchTodo></SearchTodo>
        <ListOf></ListOf>
 
      </Stack>
    </Provider>
    </>
  );
}

export default App;
