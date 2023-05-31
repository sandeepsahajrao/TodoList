import axios from "axios";

const signIn = async (data) => {
    // const url = "http://localhost:5000/todos/signin";
  const url = "https://todolistapp-c04k.onrender.com/todos/signin";
  try {
    const response = await axios.post(url, data);
    return response.data.user; 
  } catch (error) {
    if (error.response && error.response.status === 401 && error.response.data.error === "Invalid credentials") {
      // Handle the case of wrong password here
      console.error("Wrong password entered");

    } else {
      console.error(`Error signIn data: ${error}`);
      // Handle other errors or display a general error message
    }
    return null;
  }
};

export default signIn;
