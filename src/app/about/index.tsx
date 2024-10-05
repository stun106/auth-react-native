import { View, Text, Image, Animated, Pressable } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Constants from 'expo-constants';
import LottieView from 'lottie-react-native';
import PagerView from 'react-native-pager-view'
import SingInSingOut from '../components/SingInSingOut'

export default function About() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const constants = Constants.statusBarHeight;
  const [isSwipe, setSwipe] = useState<boolean>(false);

  // Animação de fade-in
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  useEffect(() => {
    const time = setTimeout(() => {
      setSwipe(true);
    }, 3000);
    return () => clearTimeout(time);
  }, [])

  
  return (

    <PagerView style={{flex:1}} initialPage={0}>

        <Animated.View key={0} style={{ opacity: fadeAnim }} className="flex-1 bg-black">
        <View style={{ marginTop: constants + 30 }} className='flex justify-center items-center'>
          <Image
            source={{ uri: 'https://media.giphy.com/media/xFlwjIACH3WUU0ZhVm/giphy.gif' }}
            style={{ width: 300, height: 300 }}
            resizeMode="contain"
          />
        </View>

        <View className='border-2 border-slate-700 mx-10 mb-10 p-10 rounded-xl'>
          <Text className='text-xl font-thin text-slate-400'>
            App desenvolvido com objetivo de aplicar os conceitos de autenticação e gerenciamento de sessão de usuários em um ambiente mobile.
          </Text>

        </View>

        {
          //renderiza o swipe-right
          isSwipe && (
            <View className="justify-between items-center">
              <LottieView
                source={require('../assets/swiping.json')}
                autoPlay
                loop
                style={{ width: 300, height: 300, opacity: 0.2 }}
              />
            </View>
          )
        }

    </Animated.View>

        <SingInSingOut key={1} />

    </PagerView >
  );
}
