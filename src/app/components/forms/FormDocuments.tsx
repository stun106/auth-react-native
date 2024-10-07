import { useContext, useEffect, useRef, useState } from 'react';
import { View, Text, Image, TextInput, Animated } from 'react-native'
import { RegisterContext } from '../../../data/context/Register';
import LottieView from 'lottie-react-native';

interface FormDocumentsProps {
  keyId?: number;
}
export default function FormDocuments({ keyId }: FormDocumentsProps) {
  const { register, handleOnChangeDoc } = useContext(RegisterContext);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [controleComponente, setControleComponente] = useState({
    isSwiper: false,
  });



  useEffect(() => {
    let formPreenchido = Object.keys(register).some(key => {
      const value = register[key];
      return value === '' || value === undefined || value === null;
    });

    setControleComponente(prevState => ({ ...prevState, isSwiper: formPreenchido }))
  }, [register]);

  return (
    <View key={keyId} className='w-full h-full p-5 justify-end gap-5 items-center bg-black'>
      <Image
        source={require('../../assets/catchulos-registe.gif')}
      />

      {
        !controleComponente.isSwiper && (
          <>
          
                <View className="absolute z-30 shadow-inner  justify-between items-center">
                  <LottieView
                    source={require('../../assets/swiping.json')}
                    autoPlay
                    loop
                    style={{ width: 300, height: 300, opacity: 0.2 }}
                  />
                </View>
           
          </>
        )
      }
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