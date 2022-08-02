import { StyleSheet, Text, View, ImageBackground} from 'react-native'
import React from 'react'

const SplashScreenImage = ({source , backgroundColor}) => {

  const Skip = ()=>{
    // navigation.navigate('home')
  }
    return (
        <View style={styles.main}>
          <ImageBackground source={source} resizeMode="cover" style={styles.image}>
          <Text onPress={Skip} style={[styles.skip,{backgroundColor:backgroundColor? backgroundColor:'#fff'}]}>Skip</Text>
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
      justifyContent: "center",
    },
    skip:{
      fontFamily:'Poppins-Regular',
      fontSize:12,
      borderRadius:20,
      paddingHorizontal:18,
      paddingVertical:3,
      position:'absolute',
      right:10,
      top:15,
      alignItems:'center',
      justifyContent:'center',
      color:'#000000'

    }
  
  });