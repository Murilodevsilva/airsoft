import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../SignIn/index';
import { SignUp } from '../SignUp/index';
import { Verification } from '../Verification/Verification';
import { PassNew } from '../Verification/PassNew';
import { PassAl } from '../Verification/PassAl';
import { Complete } from '../SignUp/config';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="PassNew" component={PassNew} />
      <Stack.Screen name="PassAl" component={PassAl} />
      <Stack.Screen name="Complete" component={Complete} />
    </Stack.Navigator>
  );
};
export default MainStack;
