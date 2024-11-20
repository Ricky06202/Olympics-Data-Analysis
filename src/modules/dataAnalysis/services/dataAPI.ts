import axios from "axios"

const url = "http://127.0.0.1:8000/olympics_data"

export function login (){
    return(
        axios.get(url).then(response =>{
            const datos = response.data;
            console.log(datos);
        }).catch(error =>{
            console.error(error)
        })
    )
}


