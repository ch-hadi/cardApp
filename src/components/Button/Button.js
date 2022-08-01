import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

export default function AButton({
  title,
  onPress,
  borderColor,
  fontWeight,
  backgroundColor,
  textColor,
  icon,
  marginVertical,
  Padding,
  fontSize
}) {
  return (
    <TouchableOpacity
      style={[
        styles.Touch,
        {
          borderColor: borderColor,
          backgroundColor: backgroundColor ? backgroundColor : '#2240FF',
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: marginVertical ? marginVertical : 0,
          padding:Padding ? Padding : 15
        },
      ]}
      onPress={onPress}>
      {icon ? <Image style={{marginRight:10}} source={icon} /> : ''}
      <Text
        style={[
          styles.Text,
          {
            fontWeight: fontWeight ? fontWeight : '600',
            color: textColor ? textColor : 'white',
            fontSize: fontSize? fontSize : 15
          },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Touch: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 14,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 5,
    width:'100%'
  },
  Text: {
    color: 'white',
    fontFamily:'Poppins-Regular'
  },
});
