import { View, Image, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WebView } from 'react-native-webview';


function SplashScreen({ navigation }) {
  setTimeout(() => { navigation.navigate('NextScreen') }, 1000);
  return (
    <>
      <View style={{ flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
        < Image source={require('./src/assets/img1.jpg')} style={{ height: 100, width: 100, borderRadius: 100 }} />
      </View>
    </>
  )
}

function NextScreen({ navigation }) {
  return (
    <WebView source={{ uri: 'https://smartpearlsolutions.com/' }} />
  )
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="NextScreen" component={NextScreen} options={{
            headerShown: false
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
export default App;