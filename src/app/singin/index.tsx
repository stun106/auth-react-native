import { View, Text, ImageBackground, TextInput, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as SecureStore from 'expo-secure-store';
import { useAuth } from '../../data/hook/Auth'
import { LoadingSpinner } from '../components/LoadingSpinner';

export default function SingIn() {
  const { autenticacao } = useAuth();

  const [controleComponente, setControleComponente] = useState({
    isSubmit: false,
    dadosForm: {
      email: '',
      senha: ''
    },
  });
  const [ isLoading, setLoading ] = useState(false);

  const handleOnChangeDadosForm = (name: string, value: string) => {
    setControleComponente(prevState => ({
      ...prevState,
      dadosForm: {
        ...prevState.dadosForm,
        [name]: value,
      }
    }))
  }

  useEffect(() => {
    const handleAutenticacao = async () => {
      const isCredencial = Object.values(controleComponente.dadosForm).length !== 0
      if (isCredencial) {
        try {
          await autenticacao(controleComponente.dadosForm);
          setLoading(true)
        }
        catch(e) {
          console.error("Network Error, verifique sua API")
        }
        setLoading(false);
        console.log(isLoading)
      };
    };
    if (controleComponente.isSubmit) {
      handleAutenticacao();
      setControleComponente(prevState => ({ ...prevState, isSubmit: false }))
    };
  },[controleComponente]);


  return (
    <View className='relative flex-1'>
      <ImageBackground
        source={require("../assets/cthulu_login.jpg")}
        className="w-full h-full"
        resizeMode="cover"
      />
      {
        isLoading && (
          <View className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <LoadingSpinner />
          </View>
        )
      }
      <View className='absolute z-10 bottom-0 w-96 left-10 h-96 rounded-lg' >
        <Text className='text-center text-slate-200 text-4xl font-bold'>Login</Text>

        <View className='gap-10 mt-16'>
          <TextInput
            onChangeText={(e) => handleOnChangeDadosForm('email', e)}
            className='border border-slate-400 bg-slate-200 pl-5 text-lg py-5 w-full rounded-md'
            placeholder='email'
          />
          <TextInput
            onChangeText={(e) => handleOnChangeDadosForm('senha', e)}
            secureTextEntry={true}
            className='border border-slate-400 bg-slate-200 pl-5 text-lg py-5 w-full rounded-md'
            placeholder='Senha...'
          />
        </View>
        <View className='flex-row justify-between items-center w-full'>
          <Pressable>
            <Text className='text-thin text-slate-200 active:text-red-500'>esqueceu sua senha ?</Text>
          </Pressable>
          <Pressable
            onPress={() => setControleComponente(prevState => ({ ...prevState, isSubmit: true }))}
            className='mt-4 border active:bg-green-900 border-slate-200 rounded-lg'
          >
            <Text className='p-2 text-slate-200 '>Submit</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}