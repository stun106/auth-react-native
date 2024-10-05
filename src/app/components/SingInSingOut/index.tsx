import { View, Text, Pressable, Image, Animated } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'expo-router';


interface SingInSingOutProps {
  key: number;
}
export default function SingInSingOut({ key }: SingInSingOutProps) {

  const router = useRouter();
  return (
    <View
      key={key}
      className='flex-1 w-full md:h-60 justify-center items-center bg-black'>
      <Image source={require("../../assets/silhueta.jpg")} />
      <View>
        <Text className='text-green-700'>
          A <Text className='text-red-500'>Silhueta </Text>é uma criatura paranormal de Conhecimento que se manifesta a partir de alguém que foi inexistido pelo Conhecimento mas que continuou na Realidade através do eco de suas memórias. Como consequência da exposição ao Conhecimento vazando da Silhueta, tudo que a toca pode ser inexistido e reescrito.
        </Text>
      </View>
      <View className='flex-row w-full p-5 justify-between'>
        <Pressable>
          <Text className='text-slate-400'>Login</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            router.push("/singup")
          }}>
          <Text className='text-slate-400'>Register</Text>
        </Pressable>
      </View>
    </View>
  )
}