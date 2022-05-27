import React from 'react';
import { Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Navigation from './navigation';




export default function App() {
  return (
   <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
    
  );
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'red',
  },
});

