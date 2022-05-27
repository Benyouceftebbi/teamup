import React ,{useState}  from 'react';
import { Toolbar,ScrollView,Image,View, Button, StyleSheet, TouchableOpacity, Text,IconButton,Colors } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomMultiPicker from "react-native-multiple-select-list";

import { FlatList } from 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import {useNavigation} from '@react-navigation/native';
const userList = {
  "123":"Tom",
  "124":"Michael",
  "125":"Christin"
}




const  CreateFTeam = () =>{
  const navigation = useNavigation();
   const [team, setTeam] = useState('');
   const onSavePressed = () =>{
    console.warn('Team created');
    
  };
           return (
   <View style = {styles.container}>  
     <ScrollView style={{flex:1}}>
           <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center'}}>Create a CreateTeam!</Text>
            <CustomInput
       placeholder="Give a name to your team"
       value={team}
       setValue={setTeam}
       
     />
     <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center'}}>Members</Text>
     <CustomMultiPicker
  options={userList}
  search={true} // should show search bar?
  multiple={true} //
  placeholder={"Search"}
  placeholderTextColor={'#757575'}
  returnValue={"label"} // label or value
  callback={(res)=>{ console.log(res) }} // callback, array of selected items
  rowBackgroundColor={"#eee"}
  rowHeight={40}
  rowRadius={5}
  searchIconName="ios-checkmark"
  searchIconColor="red"
  searchIconSize={30}
  iconColor={"#00a2dd"}
  iconSize={30}
  selectedIconName={"ios-checkmark-circle-outline"}
  unselectedIconName={"ios-radio-button-off-outline"}
  scrollViewHeight={130}
  selected={["Tom", "Christin"]} // list of options which are selected by default
  

/>
      
     
     <CustomButton text="Save" onPress={onSavePressed}/>
                
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
  export default CreateFTeam;