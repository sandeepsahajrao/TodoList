import axios from "axios";

const getApidata=async ()=>{
    const url = "http://localhost:5000/todos"
    try {
        const response=await axios.get(url);
        return response.data;
    } catch (error) {
        console.error("Error getting")
    }

};
export default getApidata;