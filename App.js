import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainStack from './src/pages/MainStack';
import { NavigationContainer } from '@react-navigation/native';
import Complete from './src/pages/SignUp/complete';

export default function App() {
  return (
    <NavigationContainer >
      <Complete/>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
