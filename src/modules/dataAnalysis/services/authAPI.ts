import axios from "axios"
// import type {profile} from "@dataAnalysis/constants/apiTypes"


const AuthAPI = axios.create({
    baseURL: "http://127.0.0.1:8000/",
})

export async function postLogin(user: string, passwd: string){
    const response = await AuthAPI.post(`login/`,{
        username: user,
        password: passwd
    }).then((response)=>{
       return response.data
    }).then((response)=>(
        {
        id: response.user.id,
        username: response.user.username,
        email: response.user.email,
      }
    ))
}


export async function postRegister(user: string, passwd: string, mail: string){
    const response = await AuthAPI.post(`register/`,{
        username: user,
        password: passwd,
        email: mail
    }).then((response)=>{
       return response.data
    })
}

// export async function postProfile(user: string, passwd: string, eml: string): Promise<profile[]>{
//     return axios.post(`${url}/profile`,{
//         userName: user,
//         password: passwd,
//         email: eml
//     })
// }

