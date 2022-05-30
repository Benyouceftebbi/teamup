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
import { db } from '../../Firebase';
import {collection, getDocs } from 'firebase/firestore';


const CreateFTeam = () => {
  
  const navigation = useNavigation();
   const [team, setTeam] = useState('');
   const [users1,setUsers1] = useState('');
   const [users2,setUsers2] = useState('');
   const [users3,setUsers3] = useState('');
   const [users4,setUsers4] = useState('');
   const [users5,setUsers5] = useState('');
   const [users6,setUsers6] = useState('');
   const [users7,setUsers7] = useState('');
   const [users8,setUsers8] = useState('');
   const [users9,setUsers9] = useState('');
   const [users10,setUsers10] = useState('');



  
  

  const setData = async () =>{
    const tteam = team;
    const uusers1 = users1;
    const uusers2 = users2;
    const uusers3 = users3;
    const uusers4 = users4;
    const uusers5 = users5;
    const uusers6 = users6;
    const uusers7 = users7;
    const uusers8 = users8;
    const uusers9 = users9;
    const uusers10= users10;
  
    
    db.collection("Fteams").doc(tteam).set({
      users1 : uusers1,
      users2 : uusers2,
      users3 : uusers3,
      users4 : uusers4,
      users5 : uusers5,
      users6 : uusers6,
      users7 : uusers7,
      users8 : uusers8,
      users9 : uusers9,
      users10 : uusers10,

     
     
    
  })
  .then(() => {
      console.log("Team successfully added!");
  })
  .catch((error) => {
      console.error("Error adding team: ", error);
  });

  }

  
 
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
       <CustomInput
       placeholder="player 1"
       value={users1}
       setValue={setUsers1}
       />
       <CustomInput
       placeholder="player 2"
       value={users2}
       setValue={setUsers2}
       />
       <CustomInput
       placeholder="player 3"
       value={users3}
       setValue={setUsers3}
       />
       <CustomInput
       placeholder="player 4"
       value={users4}
       setValue={setUsers4}
       />
         <CustomInput
       placeholder="player 5"
       value={users5}
       setValue={setUsers5}
       />
        <CustomInput
       placeholder="player 6"
       value={users6}
       setValue={setUsers6}
       />
       <CustomInput
       placeholder="player 7"
       value={users7}
       setValue={setUsers7}
       />
       <CustomInput
       placeholder="player 8"
       value={users8}
       setValue={setUsers8}
       />
       <CustomInput
       placeholder="player 9"
       value={users9}
       setValue={setUsers9}
       />
         <CustomInput
       placeholder="player 10"
       value={users5}
       setValue={setUsers5}
       />

   
     
  
      
     
     <CustomButton text="Save" onPress={setData}/>
                
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