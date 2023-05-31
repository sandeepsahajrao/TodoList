import axios from "axios";

const deleteTodo = async (id) => {

  const url = `http://localhost:5000/todos/${id}`;
  try {
    const response = await axios.delete(url);
    console.log("Todo updated:", response.data);
  } catch (error) {
    console.error("Error updating todo:", error);
  }
};

export default deleteTodo;

