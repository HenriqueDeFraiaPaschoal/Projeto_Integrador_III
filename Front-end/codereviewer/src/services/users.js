import axios from "axios";
import { URL_BASE } from "constants"


export const Signin = async (data) => {
    const response = await axios.post(`${URL_BASE}/users`, data)
    return response
} 