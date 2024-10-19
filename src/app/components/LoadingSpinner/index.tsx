import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';

export const LoadingSpinner = () => {
  return (
    <View className="flex items-center justify-center">
      <ActivityIndicator
        size="large"
        color="#2563EB" 
        className="w-8 h-8 text-gray-200 dark:text-gray-600 animate-spin"
      />
      <Text className="sr-only">Loading...</Text>
    </View>
  );
};

