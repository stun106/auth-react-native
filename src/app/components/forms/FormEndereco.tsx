import { View, Text, Image, TextInput, Pressable, ImageBackground, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import React, { useContext, useEffect, useState } from 'react'
import { RegisterContext } from '../../../data/context/Register';
import { useRegister } from '../../../data/hook/Register';

interface FormEndereco {
  keyId?: number;
}

export default function FormEndereco({ keyId }: FormEndereco) {
  const { register, handleAddNewEndereco } = useContext(RegisterContext);
  const { createUser, getEnderecoByViaCep } = useRegister();
  const [controleDeComponente, setControleDeComponente] = useState({
    isSwiper: false,
    status: 0,
    isfetch: false,
    isLoading:undefined,
    endereco:
    {
      cep: '',
      rua: '',
      bairro: '',
      cidade: '',
      complemento: '',
    }
  });

  useEffect(() => {
    let formPreenchido = Object.keys(controleDeComponente.endereco).some(key => {
      const value = controleDeComponente.endereco[key];
      return value === '' || value === undefined || value === null;
    });

    setControleDeComponente(prevState => ({ ...prevState, isSwiper: formPreenchido }))
  }, [controleDeComponente.endereco]);

  useEffect(() => {
    const fetchEnderecoViaCep = async () => {
      try {
        if (controleDeComponente.endereco.cep.length < 8) setControleDeComponente(prevState => ({ ...prevState, isfetch: false }))
        if (controleDeComponente.endereco.cep.length === 8) {
          const getEndereco:ViaCep = await getEnderecoByViaCep(controleDeComponente.endereco.cep);
          setControleDeComponente(prevState => ({
            ...prevState,
            isfetch: true,
            endereco: {
              ...prevState.endereco,
              rua: getEndereco.logradouro,
              bairro: getEndereco.bairro,
              cidade: getEndereco.localidade,
              complemento: getEndereco.complemento,
            }
          }))
        }

      } catch (e) {
        console.error(`erro: ${controleDeComponente.status} - ao receber dados da api`, e)
      }
    }
      fetchEnderecoViaCep();
  }, [controleDeComponente.endereco.cep]);

  

  console.log(register)
  console.log(controleDeComponente.endereco)
  
  const handleCreateRegister = async () => {
    try {
      setControleDeComponente(prevState => ({...prevState, isLoading: false}));
      await createUser(register);
      setControleDeComponente(prevState => ({...prevState, isLoading: true}));
      console.log('requisicão realizada com sucesso.')

    } catch (er) {
      console.error('erro ao realizar requisicão!', er)
    }
  }

  const submitColor = () => {
    if (controleDeComponente.isfetch) return 'bg-green-400';
    return 'bg-slate-200'

  }
  console.log(controleDeComponente.isfetch)
  const constants = Constants.statusBarHeight;
  return (
    <View className="flex-1">
      {/* Use ImageBackground para a imagem de fundo */}
      <ImageBackground
        source={require('../../assets/endereco-witches.gif')}
        className="w-full h-full"
        resizeMode="cover"
      >
        <ScrollView contentContainerStyle={{ padding: 20, flexGrow: 1, marginTop: constants }}>

          {/* Inputs de Endereço */}
          <View className="gap-4">
            <TextInput
              value={controleDeComponente.endereco.cep}
              clearTextOnFocus={true}
              onChangeText={(value) => setControleDeComponente(prevState => ({
                ...prevState,
                endereco: {
                  ...prevState.endereco,
                  cep: value
                }
              }))}
              className="border border-slate-400 bg-slate-200 pl-5 text-lg py-5 w-full rounded-md"
              placeholder="CEP..."
            />
            <TextInput
              value={controleDeComponente.endereco.cep.length < 8 ? undefined : controleDeComponente.endereco.rua}
              onChangeText={(value) => setControleDeComponente(prevState => ({
                ...prevState,
                endereco: {
                  ...prevState.endereco,
                  rua: value
                }
              }))}
              className="border border-slate-400 bg-slate-200 pl-5 text-lg py-5 w-full rounded-md"
              placeholder="Rua..."
            />
            <TextInput
              value={controleDeComponente.endereco.cep.length < 8 ? undefined : controleDeComponente.endereco.bairro}
              onChangeText={(value) => setControleDeComponente(prevState => ({
                ...prevState,
                endereco: {
                  ...prevState.endereco,
                  bairro: value
                }
              }))}
              className="border border-slate-400 bg-slate-200 pl-5 text-lg py-5 w-full rounded-md"
              placeholder="Bairro..."
            />
            <TextInput
              value={controleDeComponente.endereco.cep.length < 8 ? undefined : controleDeComponente.endereco.cidade}
              onChangeText={(value) => setControleDeComponente(prevState => ({
                ...prevState,
                endereco: {
                  ...prevState.endereco,
                  cidade: value
                }
              }))}
              className="border border-slate-400 bg-slate-200 pl-5 text-lg py-5 w-full rounded-md"
              placeholder="Cidade..."
            />
            <TextInput
              value={controleDeComponente.endereco.complemento}
              onChangeText={(value) => setControleDeComponente(prevState => ({
                ...prevState,
                endereco: {
                  ...prevState.endereco,
                  complemento: value
                }
              }))}
              className="border border-slate-400 bg-slate-200 pl-5 text-lg py-5 w-full rounded-md"
              placeholder="Complemento..."
            />
          </View>

          {/* Botões */}
          <View className="flex-row justify-between items-center w-full mt-4">
            <Pressable
              onPress={() => { handleAddNewEndereco(controleDeComponente.endereco); setControleDeComponente((prevState: any) => ({ ...prevState, endereco: { cep: '', rua: '', cidade: '', complemento: '' } })) }}
              className={`flex justify-center items-center py-2 border border-slate-400 ${submitColor()} text-lg w-20 opacity-80 rounded-lg`}
            >
              <Text>Salvar</Text>
            </Pressable>

            <Pressable
              onPress={handleCreateRegister}
              className={`flex justify-center items-center py-2 border border-slate-400 bg-slate-200 text-lg w-20 opacity-80 rounded-lg ${register.endereco.length >= 1 && 'bg-green-500'}`}
            >
              <Text>Finalizar</Text>
            </Pressable>
          </View>

          {register.endereco.length !== 0 ? (
            register.endereco.map((item, index) => (
              <View
                key={index}
                className="flex justify-end my-5 py-3 pl-5 border border-slate-400 bg-slate-200 opacity-80 w-full rounded-lg"
              >
                <Pressable className="flex-row justify-between">
                  <Text className="text-xl font-bold text-slate-800">{item.cidade}</Text>
                  <Text className="mr-10 text-lg font-thin text-slate-500">press</Text>
                </Pressable>
              </View>
            ))
          ) : null
          }
        </ScrollView>
      </ImageBackground>
    </View>
  )
}