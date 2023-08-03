import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import Verification from '../Verification';
import PassNew from '../Verification/passwordL'
import PassAl from '../Verification/passwordR'
import Complete from '../SignUp/complete';
const Stack = createStackNavigator();

export default MainStack=()=>{
  return (
    
      <Stack.Navigator initialRouteName='SignIn' screenOptions={{headerShown:false}}>
        <Stack.Screen name='SignIn' component={SignIn}/>
        <Stack.Screen name='SignUp' component={SignUp}/>
        <Stack.Screen name='Verification' component={Verification}/>
        <Stack.Screen name='PassNew' component={PassNew}/>
        <Stack.Screen name='PassAl' component={PassAl}/>
        <Stack.Screen name='Complete' component={Complete}/>
      </Stack.Navigator>
  );
}