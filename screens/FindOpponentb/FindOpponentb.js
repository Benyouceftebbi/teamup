import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView , Button} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useNavigation} from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Input } from 'react-native-elements';
import { useEffect, useRef } from 'react';
import DatePicker from 'react-native-datepicker';
const FindOpponentb = () => {
  const [date, setDate] = useState('09-10-2021');

  return (
  
  <View style={styles.container}>
    <Text style={styles.text}>choose a date :</Text>
    <DatePicker
      style={styles.datePickerStyle}
      date={date}
      mode="date"
      placeholder="select date"
      format="DD/MM/YYYY"
      minDate="01-01-1900"
      maxDate="01-01-2000"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      customStyles={{
        dateIcon: {
          position: 'absolute',
          right: -5,
          top: 4,
          marginLeft: 0,
        },
        dateInput: {
          borderColor : "gray",
          alignItems: "flex-start",
          borderWidth: 0,
          borderBottomWidth: 1,
        },
        placeholderText: {
          fontSize: 17,
          color: "gray"
        },
        dateText: {
          fontSize: 17,
        }
      }}
      onDateChange={(date) => {
        setDate(date);
      }}
    />
  </View>

      
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : 'white'
  },
  title: {
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
  },
  datePickerStyle: {
    width: 230,
  },
  text: {
    textAlign: 'left',
    width: 230,
    fontSize: 16,
    color : "#000"
  }
});
export default FindOpponentb;