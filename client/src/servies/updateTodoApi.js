import axios from "axios";

const updateTodoApi = async (id, data) => {

  // const url = `http://localhost:5000/todos/${id}`;
  const url = `https://todolistapp-c04k.onrender.com/todos/${id}`;
  try {
    const response = await axios.put(url, data);
    console.log("Todo updated:", response.data);
  } catch (error) {
    console.error("Error updating todo:", error);
  }
};

export default updateTodoApi;


