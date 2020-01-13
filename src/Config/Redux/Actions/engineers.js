import axios from 'axios'

const URL_ENGINEER = "http://192.168.6.191:5000/api/engineers"

export const getAllEngineers = () => {
    return {
        type: "GET_ALL_ENGINEERS",
        payload: axios.get(
            `${URL_ENGINEER}/?page=1`,
        )
    }
}

export const getEngineer = (id) => {
    return {
        type: "GET_ENGINEER",
        payload: axios.get(
            `${URL_ENGINEER}/${id}`,
            {
                headers: {
                    "Content-Type" : "application/json"
                }
            }
        )
    }
}

//untuk update, dibuat config pada halaman yang membutuhtkan, config di dalamnya adalah headers dari request
export const updateEngineers = (dataEngineer, id, headers) => {
    return { 
        type: "UPDATE_ENGINEER",
        payload: axios.patch(
            `${URL_ENGINEER}/${id}`,
            dataEngineer,
            headers
        )
    }
}