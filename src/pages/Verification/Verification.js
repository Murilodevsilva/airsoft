import React, { useState } from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import Logo from '../../assets/svg/logo';
import { useNavigation } from '@react-navigation/native';

export const Verification = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState('');
  const handleChangeText = (text) => {
    // Remove os '-' existentes do texto
    const textWithoutDashes = text.replace(/-/g, '');
    // Adiciona um '-' após cada letra
    const formattedText = textWithoutDashes.split('').join('-');
    setValue(formattedText);
  };
  return (
    <View
      style={{
        backgroundColor: '#18191A',
        flex: 1,
        width: '100%',
        paddingTop: 100,
        alignItems: 'flex-start',
        paddingLeft: 20,
      }}
    >
      <View style={{ alignSelf: 'center', marginLeft: -30, marginBottom: 21 }}>
        <Logo />
      </View>

      <Text style={{ fontSize: 24, color: '#FFF', fontWeight: '700', fontFamily: 'Roboto' }}>
        Verificação
      </Text>
      <Text style={{ fontSize: 15, fontWeight: 300, color: '#FFF', marginTop: 2 }}>
        Insira o código de verificação enviado para o seu e-mail
      </Text>
      <View
        style={{ top: 30, left: 25, backgroundColor: 'black', width: 140, height: 20, zIndex: 1 }}
      >
        <Text style={{ color: '#FFF', textAlign: 'center' }}>Código de verificação</Text>
      </View>

      <TextInput
        autoCapitalize="characters"
        keyboardType="number-pad"
        onChangeText={handleChangeText}
        value={value}
        style={{
          fontSize: 30,
          color: '#A6A7AB',
          paddingLeft: 15,
          borderWidth: 0.5,
          borderColor: '#A6A7AB',
          width: 395,
          height: 59,
          borderRadius: 10,
          marginTop: 20,
          marginBottom: 20,
        }}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('Complete')}
        style={{
          width: 345,
          height: 51,
          backgroundColor: '#2374E1',
          justifyContent: 'center',
          borderRadius: 9,
        }}
      >
        <Text style={{ color: '#FFF', fontSize: 18, textAlign: 'center', marginBottom: 5 }}>
          Confirmar
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SignUp')}
        style={{
          width: 345,
          height: 51,
          borderWidth: 1,
          borderColor: '#2374E1',
          justifyContent: 'center',
          borderRadius: 9,
          marginTop: 20,
        }}
      >
        <Text style={{ color: '#2374E1', fontSize: 18, textAlign: 'center', marginBottom: 5 }}>
          Reenviar código
        </Text>
      </TouchableOpacity>
    </View>
  );
};
