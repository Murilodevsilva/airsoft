import React, { useState,useEffect } from 'react';
import { View, Image, Text, TouchableOpacity,TextInput,Platform ,Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Calendar from '../../../assets/svg/calendar';
import * as Location from 'expo-location';
import Patent from '../../../assets/svg/dropPatent';

const Complete = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);


  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${location.coords.latitude}&lon=${location.coords.longitude}`);
      const data = await response.json();
      if (data.address) {
        setAddress(`${data.address.city}, ${data.address.state}`);
      }
    })();
  }, []);

  const handleConfirm = (selectedDate) => {
    setDate(selectedDate);
    setShow(false);
  };

  const handlePress = () => {
    setShow(true);
  };
  const formattedDate = new Intl.DateTimeFormat('pt-BR',{
    day:'2-digit',
    month:'long',
    year:'numeric',
  }).format(date)

  const maximumDate = new Date();
  maximumDate.setFullYear(maximumDate.getFullYear() - 14)

  const handleSelectProfileImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfileImage(result.uri);
    }
  };

  const handleSelectCoverImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    if (!result.cancelled) {
      setCoverImage(result.uri);
    }
  };

  return (
    <View style={{backgroundColor:'#18191A',height:'100%'}}>
<View>
<Text style={{fontSize:21,color:'#FFF',fontWeight:700,marginTop:70,marginLeft:16}}>Dados do usuário</Text>
    <Text style={{fontSize:15,color:'#FFF',fontWeight:300,marginLeft:16,width:300,marginTop:2}}>Essas informações são visíveis para os 
organizadores de eventos que você participar e administradores da sua equipe.</Text>
</View>
    <View>
        <Text style={{fontSize:12,color:'#FFF',fontWeight:300,textAlign:'left',marginLeft:16,marginTop:22}}>Foto do Perfil</Text>
        </View>
      <View style={{alignItems:'center'}}>
        
        <TouchableOpacity  onPress={handleSelectProfileImage}>
        <Image
          source={profileImage ? { uri: profileImage } : require('./sem_avatar.png')}
          style={{ width: 141, height: 141 }}
        />
        </TouchableOpacity>
       
      </View>
      <View>
        <Text style={{fontSize:12,color:'#FFF',fontWeight:300,textAlign:'left',marginLeft:16,marginTop:22,marginBottom:13}}>Imagem de capa</Text>
        </View>
      <View style={{}}>
        <TouchableOpacity
         onPress={handleSelectCoverImage}
        >
        <Image
          source={coverImage ? { uri: coverImage } : require('./sem_imagem_capa.png')}
          style={{ width: '95%', height: 200,alignSelf:'center' ,borderRadius:9}}
        />
        </TouchableOpacity>
      </View>
      <TextInput 
        
        style={{alignSelf:'center', paddingLeft:15,borderWidth:0.5,borderColor:'#A6A7AB',width:345,height:51,borderRadius:8,marginTop:22,color:'#A6A7AB'}}/>
        <View style={{top:-62 ,left:62,backgroundColor:'#18191A',width:104,height:20,zIndex:1}}>
        <Text style={{color:'#FFF',textAlign:'center'}}>
        Nome completo
        </Text>
        </View>
        <View style={{ alignSelf: 'center', paddingLeft: 15, borderWidth: 0.5, borderColor: '#A6A7AB', width: 345, height: 51, borderRadius: 8 }}>
        {address ? (
          <Text style={{color:'#A6A7AB',fontSize:18,textAlign:'center',marginTop:12}}>
            {address}
          </Text>
        ) : (
          <Text style={{color:'#A6A7AB',fontSize:18,textAlign:'center',marginTop:12}}>Obtendo localização...</Text>
        )}
        <View style={{backgroundColor:'#18191A',width:80,top:-45}}><Text style={{ color: '#FFF', textAlign: 'center'}}>Localização</Text></View>
      </View>
        <View style={{ flexDirection:'row',paddingTop:12, alignSelf: 'center', paddingLeft: 15, borderWidth: 0.5, borderColor: '#A6A7AB', width: 345, height: 51, borderRadius: 8 }}>
        <TouchableOpacity
          onPress={handlePress}
        >
        <Calendar/>
        </TouchableOpacity>
       <Text style={{color:'#A6A7AB',marginLeft:60,fontSize:18}}>{formattedDate}</Text>
      </View>
      <View style={{ top: -62, left: 62, backgroundColor: '#18191A', width: 120, height: 20, zIndex: 1 }}>
        <Text style={{ color: '#FFF', textAlign: 'center' }}>
          Classe de combate
        </Text>
      </View>
     
      <DateTimePickerModal
        isVisible={show}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={() => setShow(false)}
        maximumDate={maximumDate}
      />
        <TextInput 
        style={{alignSelf:'center', paddingLeft:15,borderWidth:0.5,borderColor:'#A6A7AB',width:345,height:51,borderRadius:8,color:'#A6A7AB'}}/>
        <View style={{top:-62 ,left:62,backgroundColor:'#18191A',width:120,height:20,zIndex:1}}>
        
        <Text style={{color:'#FFF',textAlign:'center'}}>
        Classe de combate
        </Text>
        </View>
        <View style={{position:'absolute',bottom:111 ,right:60}}><Patent/></View>
        <TouchableOpacity onPress={()=>navigation.navigate('Complete')} style={{alignSelf:'center', width:345,height:51,backgroundColor:'#2374E1',justifyContent:'center',borderRadius:9}}>
    <Text style={{color:'#FFF',fontSize:18,textAlign:'center',marginBottom:5}}>Avançar</Text>
</TouchableOpacity>
    </View>
  );
};

export default Complete;
