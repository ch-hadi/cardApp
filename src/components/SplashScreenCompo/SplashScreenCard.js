import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SplashScreenCard = ({title, content}) => {
  return (
    <View style={styles.main}>
      <Text style={styles.textWelcome}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  )
}

export default SplashScreenCard

const styles = StyleSheet.create({
  main:{
    width:'100%',
    alignItems:'center',
    paddingHorizontal:'7%',
    marginVertical:'5%',
  },
  textWelcome:{
    // fontWeight:'700',
    fontFamily: 'Poppins-Bold',
    color:'#000',
    fontSize:25
},
content:{
  color:'#000',
  fontSize:13,
  // marginVertical:13,
  // fontWeight:'400'
  fontFamily: 'Poppins-Regular',
  
}
})