import axios from "axios";


const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const Axiossecure = () => {
    return axiosSecure
};

export default Axiossecure;