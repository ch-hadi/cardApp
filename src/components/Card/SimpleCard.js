import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AButton from '../Button/Button'

const SimpleCard = ({title, buttonTitle,source}) => {

  const goEbayStore = () =>{
    alert('Ebay Button Clicked')
  }
  // console.log(title)

  return (
    <View style={styles.main}>
    
      <View style={styles.titleContentView}>
      <Text style={styles.ebyTitle}>{title}</Text>
      <View style={styles.btn}>
      <AButton title={buttonTitle} onPress={goEbayStore} borderColor='white' fontWeight='400' borderWidth='1' />
      </View>
     </View>
     <View style={styles.imgView}>
      <ImageBackground resizeMode='contain' style={{height:'100%'}} source={source}/>
     </View>
    </View>
  )
}

export default SimpleCard

const styles = StyleSheet.create({
  main:{
    // flex:1,
    backgroundColor:'#2240FF',
    borderRadius:5,
    width:370,
    height:180,
    flexDirection:'row',
    marginBottom:15
  },
  titleContentView:{
   width:'50%',
  // flex:0.5
  },
  imgView:{
    // flex:0.5,
    width:'50%',
    paddingVertical:10
  },
  btn:{
    position:'absolute',
    bottom:'10%',
    left:'6%',   
  },
  ebyTitle:{
    marginVertical:20,
    marginHorizontal:'6%',
    color:'#fff',
    fontSize:20,
    fontWeight:'bold'
  },


})