import { useContext, useEffect } from 'react';
import { View, Text, Image, TextInput } from 'react-native'
import { RegisterContext } from '../../../data/context/Register';

interface FormDocumentsProps {
  keyId?: number;
}
export default function FormDocuments({ keyId }: FormDocumentsProps) {
  const { register, handleOnChangeDoc } = useContext(RegisterContext);

  console.log(register)
  return (
    <View key={keyId} className='w-full h-full p-5 justify-end gap-5 items-center bg-black'>
      <Image
        source={require('../../assets/catchulos-registe.gif')}
      />
      <TextInput
        value={register.nome}
        className='border border-slate-400 bg-slate-200 pl-5 text-lg py-5 w-full rounded-md'
        onChangeText={(value) => handleOnChangeDoc('nome', value)}
        placeholder='Nome Completo...'
      />
      <TextInput
        value={register.email}
        keyboardType='email-address'
        onChangeText={(value) => handleOnChangeDoc('email', value)}
        className='border border-slate-400 bg-slate-200 pl-5 text-lg py-5 w-full rounded-md'
        placeholder='Email...'
      />
      <TextInput
        value={register.cpf}
        onChangeText={(value) => handleOnChangeDoc('cpf', value)}
        className='border border-slate-400 bg-slate-200 pl-5 text-lg py-5 w-full rounded-md'
        placeholder='CPF...'
      />
      <TextInput
        value={register.senha}
        secureTextEntry={true}
        onChangeText={(value) => handleOnChangeDoc('senha', value)}
        className='border border-slate-400 bg-slate-200 pl-5 text-lg py-5 w-full rounded-md'
        placeholder='Senha...'
      />
    </View>
  )
}