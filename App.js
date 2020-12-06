import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, Button, Platform } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

export default function App() {
  return (
    <SafeAreaView>
      <Button style={btn.container} title="CLICK ME" onPress={() => alert('HIT')}/> 
      
    </SafeAreaView>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    color:'white'
  },
  textcolor:{
    color:'white'
  }
  
});
const btn = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

});
