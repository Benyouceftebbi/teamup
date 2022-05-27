import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView,SafeAreaView} from 'react-native';
import Slider from '@react-native-community/slider';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';





const SurveyScreen = () => {
  const navigation = useNavigation();
  const [rating, setRating]= useState('1');
  const [rating1, setRating1]= useState('1');
  const [rating2, setRating2]= useState('1');
  const [sliding, setSliding] = useState('Inactive');
  const getRatingEmoji =()=>{
    if(rating  === 0){
      return '😢';
    }
    else  if(rating  === 1){
      return '😀';
    }
    else  if(rating  === 2){
      return '🤩';
    }

  }
   const getRatingEmoji1 =()=>{
    if(rating1  === 0){
      return '😢';
    }
    else  if(rating1  === 1){
      return '😀';
    }
    else  if(rating1  === 2){
      return '🤩';
    }

  }
   const getRatingEmoji2 =()=>{
    if(rating2  === 0){
      return '😢';
    }
    else  if(rating2  === 1){
      return '😀';
    }
    else  if(rating2  === 2){
      return '🤩';
    }

  }
  const onFinishPressed = () => navigation.navigate("Home")

  return (
        <View style={styles.container}>
        <Text style={styles.title}>fill up this survey!</Text>
        <Text style={styles.text}></Text>
         <Text style={styles.text}>how good are you at sports?</Text>
         <Slider style={styles.slider} minimumValue ={0} maximumValue={2} step={1}minimumTrackTintColor='tomato' maximumTrackTintColor='grey'thumbTintColor = 'tomato'   onValueChange ={setRating} />
          <Text style={styles.emojiText}>{getRatingEmoji()}</Text>
            <Text style={styles.text}>how many sports have you played?</Text>
         <Slider style={styles.slider} minimumValue ={0} maximumValue={2} step={1}minimumTrackTintColor='tomato' maximumTrackTintColor='grey'thumbTintColor = 'tomato'   onValueChange ={setRating1} />
          <Text style={styles.emojiText}>{getRatingEmoji1()}</Text>
            <Text style={styles.text}>how many years have you been doing sports?</Text>
         <Slider style={styles.slider} minimumValue ={0} maximumValue={2} step={1}minimumTrackTintColor='tomato' maximumTrackTintColor='grey'thumbTintColor = 'tomato'   onValueChange ={setRating2} />
          <Text style={styles.emojiText}>{getRatingEmoji2()}</Text>
          <CustomButton text="Finish" onPress={onFinishPressed} />
         
     </View>
     
  );
};

const styles = StyleSheet.create({
  container: {
  flex:1,
  alignItems:'center',
  justifyContent:'center',
  
  },
  slider :{
    width:250,
    height: 40,
  },
  text: {
    fontSize:20,
    fontWeight: 'bold',
  },
  emojiText:
  {
    fontSize : 60,

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  
 
  
});

export default SurveyScreen;