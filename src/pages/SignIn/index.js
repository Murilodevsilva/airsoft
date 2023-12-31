import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Config/firebase';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../assets/svg/logo';

const SignIn = function () {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert('Login efetuado com sucesso...Você esta sendo direcionado a tela inicial');
      })
      .catch(() => {
        alert('Dados incorretos!');
      });
  };
  return (
    <View
      style={{
        backgroundColor: '#18191A',
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 20,
      }}
    >
      <View style={{ alignSelf: 'center', marginLeft: -30, marginBottom: 21 }}>
        <Logo />
      </View>

      <Text
        style={{
          fontSize: 24,
          color: '#FFFFFF',
          fontWeight: '700',
          fontFamily: 'Roboto',
        }}
      >
        Entrar
      </Text>

      <Text
        style={{
          fontSize: 15,
          fontWeight: 300,
          color: '#FFF',
        }}
      >
        Preencha os campos para entrar.
      </Text>

      <View
        style={{
          top: 10,
          left: 22,
          backgroundColor: '#18191A',
          width: 42,
          height: 20,
          zIndex: 1,
          marginTop: 15,
        }}
      >
        <Text
          style={{
            color: '#FFF',
            textAlign: 'center',
          }}
        >
          Email
        </Text>
      </View>

      <TextInput
        onChangeText={(t) => setEmail(t)}
        value={email}
        placeholder="Digite seu e-mail de acesso"
        placeholderTextColor="#7777"
        keyboardType="email-address"
        autoCapitalize="none"
        style={{
          paddingLeft: 15,
          color: '#A6A7AB',
          borderWidth: 0.5,
          borderColor: '#A6A7AB',
          width: 395,
          height: 51,
          borderRadius: 9,
          fontSize: 16,
        }}
      />

      <View
        style={{ top: 10, left: 22, backgroundColor: '#18191A', width: 42, height: 20, zIndex: 1 }}
      >
        <Text style={{ color: '#FFF', textAlign: 'center' }}>Senha</Text>
      </View>
      <TextInput
        onChangeText={(t) => setPassword(t)}
        value={password}
        placeholder="Digite sua senha de acesso"
        placeholderTextColor="#7777"
        keyboardType="number-pad"
        secureTextEntry
        style={{
          paddingLeft: 15,
          color: '#A6A7AB',
          borderWidth: 0.5,
          borderColor: '#A6A7AB',
          width: 395,
          height: 51,
          borderRadius: 9,
          marginBottom: 21,
          fontSize: 16,
        }}
      />

      <TouchableOpacity
        onPress={handleLogin}
        style={{
          width: 395,
          height: 51,
          backgroundColor: '#2374E1',
          justifyContent: 'center',
          borderRadius: 9,
        }}
      >
        <Text style={{ color: '#FFF', fontSize: 18, textAlign: 'center', marginBottom: 5 }}>
          Entrar
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SignUp')}
        style={{
          width: 395,
          height: 51,
          borderWidth: 1,
          borderColor: '#2374E1',
          justifyContent: 'center',
          borderRadius: 9,
          marginTop: 20,
        }}
      >
        <Text style={{ color: '#2374E1', fontSize: 18, textAlign: 'center', marginBottom: 5 }}>
          Registrar
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('PassNew')}
        style={{ alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: 33 }}
      >
        <Text style={{ color: '#A6A7AB', fontSize: 15, textAlign: 'center', marginBottom: 5 }}>
          Esqueceu sua senha?
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
