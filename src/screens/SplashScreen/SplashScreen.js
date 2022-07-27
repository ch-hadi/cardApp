
import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  View
} from 'react-native';

const SplachScreen=()=> {
  return (
    <View style={styles.main}>
      <ImageBackground source={require('../../../assets/images/mainImg.png')} resizeMode="cover" style={styles.image}>
    </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  main:{
    flex:1,
    // backgroundColor:'red',
  },
  rang:{
    color:'#000'
  },
  image:{
    flex: 1,
    justifyContent: "center"
  }

});

export default SplachScreen;
