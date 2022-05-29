import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView , Button} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useNavigation} from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Input } from 'react-native-elements';
import { useEffect, useRef } from 'react';



const FindOpponentt = () => {
  const navigation = useNavigation();
  
const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
 
  const onAddmatchfPressed = () => navigation.navigate("Addmatcht");
  const ref = useRef();

  useEffect(() => {
    ref.current?.setAddressText('search');
  }, []);
  const onFindMatchPressed = () => {
    console.warn('match found');
  };


 
  
  return (
<ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
  
      <View >
        <Button onPress={showDatepicker} title="Pick a date!" />
      </View>
      <View>
        <Button onPress={showTimepicker} title="Pick a time!" />
        <Text>date picked :{date.toLocaleString()}</Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
      </View>
      
      <View >
       <GooglePlacesAutocomplete
         placeholder='Pick a location'
      query={{
        key: 'AIzaSyA10LyUn3d-Dlumm5NNsHwwaxh8p535Huo',
        language: 'en', // language of the results
      }}
      onPress={(data, details) => console.log(data, details)}
      textInputProps={{
        InputComp: Input,
        errorStyle: { color: 'red' },
      }}
    />
     
    
 
       
      </View>
      
     <View>
     <CustomButton text="Find Opponent" onPress={onFindMatchPressed} />
    </View>
       
     

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
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});
export default FindOpponentt;