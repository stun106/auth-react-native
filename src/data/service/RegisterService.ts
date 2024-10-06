import axios, { Axios } from "axios";
import  Api  from "../providers";


const createUsuario = (userRegister: Register) => Api.post('/usuario', userRegister)

export const RegisterService  = {
    createUsuario,
}