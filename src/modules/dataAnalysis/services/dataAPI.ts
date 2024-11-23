import axios from "axios"

const dataAPI = axios.create({
    baseURL: "http://localhost:8000/",
})

export async function getData (){
    const response = await dataAPI.get('Olympics/',
    ).then((response)=>{
        return response.data
    })
    return response
}


