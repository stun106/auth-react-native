import { View, Text, Image, Animated } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'expo-router';

export function Initial() {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const [animation, setAnimation] = useState<boolean>(true)
    const router = useRouter();
    useEffect(() => {
        if (animation) {
          Animated.sequence([
            Animated.timing(fadeAnim, {
              toValue: 1, // -> Opacidade vai para 1 (visível)
              duration: 2000, // -> Duração de 2 segundos para aparecer
              useNativeDriver: true,
            }),
            Animated.timing(fadeAnim, {
              toValue: 0, // -> Opacidade vai para 0 (invisível)
              duration: 3000, // -> Duração de 3 segundos para desaparecer
              useNativeDriver: true,
            }),
          ]).start(() => {
            setAnimation(false); // -> Desativa a animação
            router.replace('/about'); // -> Redireciona para a página "about"
          });
        }
      }, [animation,fadeAnim, router]);
    
    console.log(animation)
    return (
        <View className='w-full'>
            <Animated.Image 
                source={require("../../assets/virus-initial.webp")}
                style={{ opacity: fadeAnim }}

                />
        </View>
    )
}