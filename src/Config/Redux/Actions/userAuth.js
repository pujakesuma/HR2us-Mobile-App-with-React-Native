import axios from 'axios'

const URL_REGISTER = "http://192.168.6.191:5000/userAuth/register";
const URL_LOGIN = "http://192.168.6.191:5000/userAuth/login";

export const postRegister = (dataRegister) => {
    return {
        type: "REGISTER_ENGINEER",
        payload: axios.post(
            URL_REGISTER,
            dataRegister,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
    }
}

export const postLogin = (dataLogin) => {
    return {
        type: "LOGIN_ENGINEER",
        payload: axios.post(
            URL_LOGIN,
            dataLogin,
            {
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )
    }
}

