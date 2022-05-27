import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView , Button} from 'react-native';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
import {DateTimePicker} from '@react-native-community/datetimepicker';
import {useNavigation} from '@react-navigation/native';


const Addmatchf = () => {
  const navigation = useNavigation();
  const [date,setDate]= useState(new Date());
  const [mode,setMode] = useState('date');
  const [show, setShow]= useState(false);
  const [text, setText]= useState('Empty');
  const onAddmatchfPressed = () => navigation.navigate("Home");

   const onChange = (event, selectedDate) =>{
    const currentDate = selectedDate || date;
    
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate()+ '/' +(tempDate.getMonth() +1) + '/'+      tempDate.getFullYear(); 
     setText(fDate)
    console.log (fDate) 
    }
    
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Add a Match</Text>
        <View style ={{margin:20}}>
            <Button title='Choose date' onPress={() => showMode('date')} />
            </View>
            {show && (
              <DateTimePicker
              testID='dateTimePicker'
              value={date}
              mode={mode}
              is24Hour={true}
              display='default'
              onChange={onChange}
            />)} 
        
        
        

        <CustomButton text="Add a Match"  />

        

        
      </View>
       
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  
});
export default Addmatchf;