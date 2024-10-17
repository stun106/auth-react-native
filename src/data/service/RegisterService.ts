import  Api  from "../providers";

const createUsuario = (userRegister: Register) => Api.post('/usuario', userRegister)
const viaCepService = (cep: string) => Api.get(`http://viacep.com.br/ws/${cep}/json/ `)
export const RegisterService  = {
    createUsuario,
    viaCepService,
}