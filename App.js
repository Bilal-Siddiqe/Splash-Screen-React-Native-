import { View, Image, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function SplashScreen({ navigation }) {
  setTimeout(() => { navigation.navigate('NextScreen') }, 500);
  return (
    <>
      <View style={{ flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
        < Image  source={require('./img1.jpg')} style={{ height: 100, width: 100, borderRadius: 100 }} />
      </View>
    </> 
  )
}

function NextScreen({ navigation }) {
  return (
    <>
     <View style={{ flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
        <Text>Heloo World</Text>
      </View>
    
    </>
  )
}

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="NextScreen" component={NextScreen} options={{
          headerShown: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;