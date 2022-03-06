import axios from "axios"; 

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3", 
  params:{
    api_key: "e7e2ec9128a2a90ac54c95eb84edf30d", 
    language: "ko-KR", 
  },
}); 
export default instance; 