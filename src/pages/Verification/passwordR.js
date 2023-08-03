import React from "react";
import { TextInput, View,Text, TouchableOpacity ,Modal,ScrollView } from 'react-native';
import Logo from "../../../assets/svg/logo";
import { useNavigation } from "@react-navigation/native";
import CheckBoxIcon from '../../../assets/svg/checkboxtrue'
import { useState } from "react";


export default PassAl = () =>{
    const navigation = useNavigation()
    const [isTrue, setIsTrue] = React.useState(false);
    const [visible,setVisible] = useState(false)
    
return(
    <View style={{backgroundColor:'#000',flex:1,width:'100%',justifyContent:'center',alignItems:'flex-start',paddingLeft:40}}>
        <View style={{alignSelf:'center',marginLeft:-30,marginBottom:21}}><Logo/></View>
        
        
        
        <Text style={{fontSize:24,color:'#FFF',fontWeight:'700',fontFamily:'Roboto'}}>
        Alterar senha
        </Text>
        <Text style={{fontSize:15,fontWeight:300,color:'#FFF',marginTop:2}}>
        Insira o código de verificação enviado para o seu e-mail
        </Text>
        <View style={{top:40,left:25,backgroundColor:'black',width:45,height:20,zIndex:1}}>
        <Text style={{color:'#FFF',textAlign:'center'}}>
        Código
        </Text>
        </View>
        
        <TextInput style={{borderWidth:0.5,borderColor:'#A6A7AB',width:345,height:59,borderRadius:5,marginTop:29}}/>
        <View style={{top:40,left:25,backgroundColor:'black',width:75,height:20,zIndex:1}}>
        <Text style={{color:'#FFF',textAlign:'center'}}>
        Nova senha
        </Text>
        </View>
        <TextInput style={{borderWidth:0.5,borderColor:'#A6A7AB',width:345,height:59,borderRadius:5,marginTop:29}}/>
        <View style={{top:40,left:25,backgroundColor:'black',width:95,height:20,zIndex:1}}>
        <Text style={{color:'#FFF',textAlign:'center'}}>
        Repita a senha
        </Text>
        </View>
        <TextInput style={{borderWidth:0.5,borderColor:'#A6A7AB',width:345,height:59,borderRadius:5,marginTop:29}}/>
        <View style={{top:30,left:25,backgroundColor:'black',width:104,height:20,zIndex:1}}>
        <Text style={{color:'#FFF',textAlign:'center'}}>
        Confirmar senha 
        </Text>
        </View>
<TextInput style={{borderWidth:0.5,borderColor:'#A6A7AB',width:345,height:59,borderRadius:5,marginTop:20,marginBottom:20}}/>

<TouchableOpacity style={{width:345,height:51,backgroundColor:'#2374E1',justifyContent:'center',borderRadius:5}}>
    <Text style={{color:'#FFF',fontSize:18,textAlign:'center',marginBottom:5}}>Redefinir</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=>navigation.navigate('SignIn')} style={{width:345,height:51,borderWidth:1,borderColor:'#2374E1',justifyContent:'center',borderRadius:5,marginTop:20}}>
    <Text style={{color:'#2374E1',fontSize:18,textAlign:'center',marginBottom:5}}>Cancelar</Text>
</TouchableOpacity>
  
    </View>
)
}