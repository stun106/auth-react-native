import { useCallback, useState } from "react";
import { RegisterService } from "../service/RegisterService";

export const useRegister = () => {
    const [getEndereco, setEndereco] = useState<ViaCep>({
        cep: '',
        logradouro: '',
        complemento: '',
        unidade: '',
        bairro: '',
        localidade: '',
        uf: '',
        estado: '',
        regiao: '',
        ibge: '',
        gia: '',
        ddd: '',
        siafi: '',
    });

    const createUser = useCallback(async (registro: Register) => {
   
            const { status, data } = await RegisterService.createUsuario(registro);
            if (status !== 201) throw new Error("Erro ao Enviar dados para API!")
            return status
       
    }, []);

    const getEnderecoByViaCep = useCallback(async(cep:string) => {
        const { status , data } = await RegisterService.viaCepService(cep);
        return data;
    },[])

    return {
        getEndereco,
        createUser,
        getEnderecoByViaCep,
    };
};
