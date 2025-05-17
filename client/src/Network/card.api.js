import { axiosInstance } from "./index";


const getCardApi = async(data) => {
    return await axiosInstance.get("/api/card", data)
}

const getAllEvents = async(data) => {
    return await axiosInstance.get("api/card?type=product", data)
}

const applyApi = async(id) => {
    return await axiosInstance.post(`api/card/apply/${id}`)
}


export { getCardApi, getAllEvents, applyApi }