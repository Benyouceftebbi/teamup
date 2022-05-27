import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image, ImageBackground } from 'react-native';
import {useNavigation} from '@react-navigation/native';



const ProfileScreen = () => {
  const navigation = useNavigation();
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'white',display:'flex' }}>
        <Image style={{width:450,height:600,borderRadius:0,left:32,bottom:150,position:'relative',display:'flex'}} source={require('../../assets/images/bimage.png')} />
            <View style={{backgroundColor:'white',bottom:250,borderRadius:100,width:320,height:250,justifyContent:'center',borderTopLeftRadius:25,alignItems:'center',borderBottomLeftRadius:25,borderTopRightRadius:25,borderBottomRightRadius:25}}>
              <Text style={{bottom:10,fontSize:30,fontWeight:'bold',justifyContent:'center'}}>Sarah</Text>
            </View>
              <Text style={{color:'black',fontSize:25,right:100,bottom:335,flexDirection:'row'}}>Stats</Text>
              <Text style={{color:'black',bottom:370,fontSize:25,left:80,flexDirection:'row'}}>Last Matches</Text>
          <View style={{backgroundColor:'red',shadowColor: "#000",shadowOffset: {width: 0,height: 12,},shadowOpacity:0.58,shadowRadius:16,elevation:24}}>
          <Image style={{width:150,height:150,borderRadius:120,justifyContent:'center',bottom:650,position:'relative',display:'flex'}} source={require('../../assets/images/5.jpg')} />
          </View>
      </View>
    );
  }
  export default ProfileScreen;