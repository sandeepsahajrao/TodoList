import axios from "axios"

const searchApi=async(data)=>{
      // const url = "http://localhost:5000/todos";
    const url = "https://todolistapp-c04k.onrender.com/todos"
    try {
        const response= await axios.post(url,data);
        console.log("Todo created:", response.data.todo);
    } catch (error) {
        console.error("Error creating todo:", error);
    }
}

export default searchApi


