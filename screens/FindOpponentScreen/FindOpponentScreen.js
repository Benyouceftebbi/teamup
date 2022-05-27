import * as React from 'react';
import { Toolbar,ScrollView,Image,View, Button, StyleSheet, TouchableOpacity, Text,IconButton,Colors} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { FlatList } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';






const  FindOpponentScreen = () =>{
  const navigation = useNavigation();
   const onProfilePressed = () => navigation.navigate("Profile");
   const onFindOpponentfPressed = () => navigation.navigate("Football");
   const onFindOpponentbPressed = () => navigation.navigate("Basketball");
   const onFindOpponenttPressed = () => navigation.navigate("Tennis");
    return (
      <View style = {styles.container}>  
        <ScrollView style={{flex:1}}>
            <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center'}}>Choose a sport!</Text>
            <TouchableOpacity  onPress={() => navigation.navigate('Football')}>
              <Image style={{width:300,height:200,borderRadius:50,left:32}} source={require('../../assets/images/i1.jpg')} />
            </TouchableOpacity>
                  <Text style={{fontWeight:'bold',fontSize:30,color:'white',top:145,left:50,position:'absolute'}}>Football</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Basketball')}>
              <Image style={{width:300,height:200,borderRadius:50,left:32,top:5}} source={require('../../assets/images/i2.jpg')} />
            </TouchableOpacity >
                  <Text style={{fontWeight:'bold',fontSize:30,color:'white',top:350,left:50,position:'absolute'}}>Basketball</Text>
            <TouchableOpacity  onPress={() => navigation.navigate('Tennis')}>
            <Image style={{width:300,height:200,borderRadius:50,left:32,top:10}} source={require('../../assets/images/i3.jpg')} />
            </TouchableOpacity>
                  <Text style={{fontWeight:'bold',fontSize:30,color:'white',top:550,left:50,position:'absolute'}}>Tennis</Text>
          </ScrollView>
      </View>
      
    )
  }


  const styles = StyleSheet.create({
      container: {
        flex:1,
        backgroundColor:'white'
      },
    
  });
  export default FindOpponentScreen;