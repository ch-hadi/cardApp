import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AButton from '../../components/Button/Button'

const StrtExploring = ({navigation}) => {
  const getStarted=()=>{
    // alert('started')
    navigation.navigate('home')
  }
  return (
    <View style={styles.main}>
      <Text textBreakStrategy='balanced' style={styles.heading}>Start Exploring Card Cave Centeral</Text>
      <Text textBreakStrategy='balanced' style={styles.content}>This is your one stop shop for all of your collectible needs. With over 20 years in the business, we specialize in PSA Card Grading and Hobby Boxes.</Text>
      <View style={styles.btn}>
      <AButton title={'Get Started'} Padding={10} onPress={getStarted} borderColor='transparent'/>
      </View>
    </View>
  )
}

export default StrtExploring

const styles = StyleSheet.create({
  main:{
    flex:1,
    // width:'100%',
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal:10,
    // height:'100%'
  },
  heading:{
    fontSize:25,
    // fontWeight:'bold',
    color:'#000',
    // textAlign:'justify' 
    fontFamily: 'Poppins-Bold',   
  },
  content:{
    marginVertical:10,
    fontSize:15,
    color:'black',
    // textShadowOffset:'#6060'
    fontFamily: 'Poppins-Regular',
  },
  btn:{
    width:'90%',
    position:'absolute',
    bottom:'10%'
  }
})