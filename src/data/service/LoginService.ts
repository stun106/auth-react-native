import Api from "../providers";
import { Login } from "../types/Login";

const authUser = (credenciais: Login) => Api.post('/auth',credenciais);

export const useLogin = {
    authUser,
}