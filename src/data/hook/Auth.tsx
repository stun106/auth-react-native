import { useCallback, useState } from "react";
import { Login } from "../types/Login";
import * as SecureStore from 'expo-secure-store';
import { useLogin } from "../service/LoginService";

export const useAuth = () => {
  const autenticacao = useCallback(async (credencial: Login) => {
      const { status, data } = await useLogin.authUser(credencial); 
      console.log(`autenticacao status code : ${status}`);
      if (status !== 200) {
        console.error("Erro ao realizar a autenticação.", status);
      }
      SecureStore.setItem('userToken', JSON.stringify(data.token));
  }, []);

  return {
    autenticacao,
  }
}