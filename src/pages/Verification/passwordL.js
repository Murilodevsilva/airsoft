import React,{useState} from "react";
import { TextInput, View,Text, TouchableOpacity } from 'react-native';
import Logo from "../../../assets/svg/logo";
import { useNavigation } from "@react-navigation/native";
import {sendPasswordResetEmail } from 'firebase/auth';
import { auth } from "../../Config/firebase";

export default PassNew = () =>{
    const navigation = useNavigation()
    const [email,setEmail] = useState();

    function handleResetPassword() {
        sendPasswordResetEmail(auth, email)
        .then(() => {
          alert('Verifique sua caixa de email')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }

return(
    <View style={{backgroundColor:'#000',flex:1,width:'100%',paddingTop:100,alignItems:'flex-start',paddingLeft:40}}>
        <View style={{alignSelf:'center',marginLeft:-30,marginBottom:21}}><Logo/></View>
        
        
        
        <Text style={{fontSize:24,color:'#FFF',fontWeight:'700',fontFamily:'Roboto'}}>
        Esqueceu a senha?
        </Text>
        <Text style={{fontSize:15,fontWeight:300,color:'#FFF',marginTop:2}}>
        Digite o seu e-mail no campo abaixo.
        </Text>
        <View style={{top:30,left:25,backgroundColor:'black',width:42,height:20,zIndex:1}}>
        <Text style={{color:'#FFF',textAlign:'center'}}>
        E-mail
        </Text>
        </View>
        
<TextInput
 onChangeText={(t)=>setEmail(t)} 
 value={email} 
 placeholder="Digite seu e-mail"
 placeholderTextColor={'#7777'}
 keyboardType="email-address"
 autoCapitalize="none"
style={{paddingLeft:15,borderWidth:0.5,borderColor:'#A6A7AB',width:345,height:59,borderRadius:5,marginTop:20,marginBottom:20,color:'#A6A7AB'}}/>

<TouchableOpacity onPress={handleResetPassword} style={{width:345,height:51,backgroundColor:'#2374E1',justifyContent:'center',borderRadius:5}}>
    <Text style={{color:'#FFF',fontSize:18,textAlign:'center',marginBottom:5}}>Enviar</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=>navigation.navigate ('SignUp')} style={{width:345,height:51,borderWidth:1,borderColor:'#2374E1',justifyContent:'center',borderRadius:5,marginTop:20}}>
    <Text style={{color:'#2374E1',fontSize:18,textAlign:'center',marginBottom:5}}>Voltar</Text>
</TouchableOpacity>

       
    </View>
)
}