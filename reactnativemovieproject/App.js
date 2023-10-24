import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './loginscreens/LoginScreens';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* Add more screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
