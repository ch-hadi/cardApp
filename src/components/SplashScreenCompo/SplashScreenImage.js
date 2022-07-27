import { StyleSheet, Text, View, ImageBackground} from 'react-native'
import React from 'react'

const SplashScreenImage = ({source}) => {
    return (
        <View style={styles.main}>
          <ImageBackground source={source} resizeMode="cover" style={styles.image}>
        </ImageBackground>
        </View>
      );
}

export default SplashScreenImage

const styles = StyleSheet.create({
    main:{
      flex:1,
    },
    rang:{
      color:'#000'
    },
    image:{
      flex: 1,
      justifyContent: "center"
    }
  
  });