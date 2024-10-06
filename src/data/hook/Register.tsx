import { useCallback } from "react"
import { RegisterService } from "../service/RegisterService"

export const useRegister = () => {
    const createUser = useCallback(async(registro: Register) => {
        try {
            const { status, data } = await RegisterService.createUsuario(registro);
                if (status !== 200) throw new console.error('Erro ao enviar dados para api.');
                
        }
    },[]) 
}