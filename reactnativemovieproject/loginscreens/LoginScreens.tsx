import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginForm from '../components/LoginForm';

const LoginScreen: React.FC = () => {
  const handleLogin = (username: string, password: string) => {
    // Implement your login logic here
  };

  return (
    <View style={styles.container}>
      <LoginForm onLogin={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
