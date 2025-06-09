import { Stack } from 'expo-router';
import React from 'react';

const RootLayout = () => {
  return (
 <Stack>
    <Stack.Screen name='index'/>
        <Stack.Screen name='about'/>
       <Stack.Screen name='userDetails'/>
        <Stack.Screen name='goals'/>
        <Stack.Screen name='diet-preference'/>


 </Stack>
  )
}

export default RootLayout;