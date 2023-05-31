import axios from "axios";

const signUpdata = async (data) => {
    console.log(data);
  const url = "http://localhost:5000/todos/signup";
  try {
    const response = await axios.post(url, data);
    console.log(response.data); // Handle the response data as needed
  } catch (error) {
    console.error(`Error creating signup data: ${error}`);
    // Handle the error or display an error message to the user
  }
};

export default signUpdata;
