import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import { TouchableOpacity, Image } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: 'Beranda',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Image
                  source={{ uri: 'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/8354/live/8795a900-0e20-11f0-8331-61229d24cb73.jpg.webp' }}
                  style={{ width: 32, height: 32, borderRadius: 16, marginRight: 8 }}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'Profil Saya' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
