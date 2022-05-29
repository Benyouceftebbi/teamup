import React, {useState} from 'react';
import {View,Text, StyleSheet, ScrollView, Button , Platform,VirtualizedList} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useNavigation} from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Input } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';






const FindOpponentf = () => {
  const navigation = useNavigation();
   const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    newFunction();

    function newFunction() {
      setShow(Platform.OS == 'ios');
    }
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
 
  const onFindMatchPressed = () => {
    console.warn('match found');
  };

   
 
  
  
  return (

    


      <View style={styles.root}>
        
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
        }}/>
      
        <View >
          <Button onPress={showDatepicker} title="Pick a date!" />
        </View>
        <View>
          <Button onPress={showTimepicker} title="Pick a time!" />
        </View>
        <Text>{date.toLocaleString()}</Text>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        )}

       
      
   
         
 
        
       <View>
       <CustomButton text="Find Opponent" onPress={onFindMatchPressed} />
      </View>
         
       
  
     
      </View>
  
  
    );
  };
  const styles = StyleSheet.create({
    root: {
      alignItems: 'center',
      padding: 20,
    },
    
  });
export default FindOpponentf;