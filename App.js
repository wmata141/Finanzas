import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screens/Splash'
import LogIn from './src/screens/LogIn'
import Welcome from './src/screens/Welcome'
import Accounts from './src/screens/Accounts'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar translucent={true} backgroundColor="transparent" color={'black'}/>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>        
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Accounts" component={Accounts} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App