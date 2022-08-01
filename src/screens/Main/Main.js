import {StyleSheet,KeyboardAvoidingView} from 'react-native'
import React from 'react'
import BottomTab from '../../components/Tabs/BottomTab/BottomTab'
// import BottomTab from '../../components/Tabs/BottomTab/BottomTab'

const Main = () => {
  return (
    // <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex:1,height:'100%'}}>
      <BottomTab/>
    // </KeyboardAvoidingView>
  )
}

export default Main

const styles = StyleSheet.create({})