import * as React from 'react';
import { Toolbar,ScrollView,Image,View, Button, StyleSheet, TouchableOpacity, Text,IconButton,Colors } from "react-native";
import {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

import { FlatList } from 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';

import {useNavigation} from '@react-navigation/native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';





const  Homepage = () =>{
  

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  
   const onFindOpponentPressed = () => navigation.navigate("FindOpponent");
   const onFindTeamPressed = () => navigation.navigate("FindTeam")
   const onCreateTeamPressed = () => navigation.navigate("CreateTeam")
    return (
      <View style = {styles.container}>  
         
          <View style = {styles.headerWrapper}>
               <TouchableOpacity onPress={() => navigation.navigate('Profile')} >  
                <Icon style={{paddingLeft:20}} name="user-circle" size={30} color="#009" />
               </TouchableOpacity>
              <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                 
              
              </View>
              <View style={{ height: '100%', alignItems: 'right', justifyContent: 'right' }}>
      <Menu
        visible={visible}
        anchor={<Icon  onPress={showMenu} style={{paddingLeft:20}} name="align-right" size={30} color="#009" />}
        onRequestClose={hideMenu}
      >
        <MenuItem onPress={hideMenu}><Icon   style={{paddingLeft:20}} name="history" size={30} color="#009" />  history</MenuItem>
        <MenuItem onPress={hideMenu}><Icon   style={{paddingLeft:20}} name="bell"  size={30} color="#009" /> Notification</MenuItem>
       
       
       
      </Menu>
    </View>
          </View>
        
        <ScrollView style={{flex:1}}>
            <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center'}}>WELCOME!</Text>
              <CustomButton text="Find an Opponent ⚔️" onPress={onFindOpponentPressed} />
              <CustomButton text="Find a team ⛹️" onPress={onFindTeamPressed} />
              <CustomButton text="Create a team ⛹️" onPress={onCreateTeamPressed} />
            

          </ScrollView>
      </View>
      
    )
  }


  const styles = StyleSheet.create({
      container: {
        flex:1,
        backgroundColor:'white'
      },
      headerWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical:50,
        alignItems:"center",
      },
      ibutton:{
        backgroundColor:'grey',
      },
       logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  });
  export default Homepage;