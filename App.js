import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './HomeScreen';
import Login from './Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Post from './Post';
import Profile from './Profile';
import Bottom from './Bottom';
import Search from './Search';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
      options={{
        headerShown: false
      }}
      name='Login' component={Login} />
      <Stack.Screen
      options={{
        headerShown: false
      }}
      name='HomeScreen' component={HomeScreen} />

  

      <Stack.Screen
       options={{
        headerShown: false
      }}
      name='Profile' component={Profile} />

      <Stack.Screen
        name='Bottom' component={Bottom} />

<Stack.Screen
 options={{
  headerShown: false
}}
        name='Search' component={Search} />

    </Stack.Navigator>
  </NavigationContainer>
  // <Login />
  );
}

const styles = StyleSheet.create({

});
