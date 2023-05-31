import axios from "axios";

const getApidata=async ()=>{
    //   const url = "http://localhost:5000/todos";
    const url = "https://todolistapp-c04k.onrender.com/todos"
    try {
        const response=await axios.get(url);
        return response.data;
    } catch (error) {
        console.error("Error getting")
    }

};
export default getApidata;