import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
  Linking
} from 'react-native';
import React, {useState} from 'react';
import AButton from '../../components/Button/Button';
import { BottomSheet } from 'react-native-elements/dist/bottomSheet/BottomSheet';
import { ListItem } from 'react-native-elements';

const About = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);
//   const list = [
//     {title: 'List Item 1'},
//     {title: 'List Item 2'},
//     {
//       title: 'Cancel',
//       containerStyle: {backgroundColor: 'red'},
//       titleStyle: {color: 'white'},
//       onPress: () => ,
//     },
//   ];
  const goBack = () => {
    navigation.navigate('home')
  };
  const contactUser = () => {
    setIsVisible(!isVisible);
  };
  const handleCallCancel=()=>{
    setIsVisible(false)
  }
 const dialCall = (number) => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:${'551-221-4506'}`; }
    else {phoneNumber = `telprompt:${number}`; }
    Linking.openURL(phoneNumber);
 };
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <View
          style={{width: '40%', flexDirection: 'row', alignItems: 'center'}}>
          <Image source={require('../../../assets/icons/chevronLeft.png')} />
          <Text style={{fontSize: 15,fontFamily:'Poppins-Light', marginLeft: '5%', color: '#2240FF'}} onPress={goBack}>
            Back
          </Text>
        </View>
        <View
          style={{
            width: '60%',
          }}>
          <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 15, color: '#000'}}>
            About
          </Text>
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            paddingHorizontal: 10,
            width: '100%',
            marginVertical: 5,
            paddingBottom: '2%',
            backgroundColor: '#fff',
          }}>
          <ImageBackground
            style={{height: 200}}
            borderRadius={5}
            resizeMode="cover"
            source={require('../../../assets/images/story1.png')}
          />
          <Text style={styles.CardsTopTitle}>Meet Manny</Text>
          <Text style={styles.storyContent}>
            When I was eight years old, my parents gave me a dollar to get
            myself an ice cream at our local corner store here in New Jersey.
            {'\n'}
            {'\n'}
            When I opened the doors to that store, my eyes quickly went to a box
            of 1992 NBA Hoops. Being a huge Chicago Bulls fan, my mind raced!
            Michael Jordan? Scottie Pippen? I had to know what was in those
            dusty packs of cards. I opted out of that delicious ice cream treat
            for an opportunity of pulling a junk-era Michael Jordan card.{'\n'}
            {'\n'}I made the purchase and raced home to rip through that pack.
            Slow rolling each card, my heart raced. I was hooked! That decision
            changed my life forever! {'\n'}
            {'\n'}As the years went on, I became more involved in the hobby,
            sharing my collection on many social media platforms and hitting
            local card shows and shops, This was fun, but my experience with
            local card show vendors was disappointing. Most of the show's
            vendors only cared about the cash—no small talk. No interaction.
            Just a business transaction. Those experiences led me to create Card
            Cave Central, where all sports fans can come to feel like family.
            {'\n'}
            {'\n'}
            Fast, friendly and reliable, Card Cave Central treats you with equal
            respect, whether you spend $0 or $1,000. I want you to feel like
            you've found a home here at the Cave. We will strive to provide no
            matter with the question or service needs you may have. It gives me
            tremendous gratitude to welcome each of you to the Cave. I look
            forward to meeting you in our Private Card Cave Central Group or
            person.
          </Text>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              marginVertical: '10%',
            }}>
            <View style={{width: '60%'}}>
              <AButton
                title={'Contact Manny'}
                backgroundColor="transparent"
                borderColor={'#2240FF'}
                textColor="#2240FF"
                icon={require('../../../assets/icons/colorCall.png')}
                onPress={contactUser}
              />
            </View>
          </View>
        </View>
        <BottomSheet isVisible={isVisible}>
          <View style={{width:'100%',height:100,borderColor:'#1C1C1E',alignItems:'center',marginBottom:'10%'}}>
          <View style={{width:'90%'}}>
          <AButton title={'Call: 551-221-4506'} onPress={dialCall} marginVertical={10} backgroundColor={'#1C1C1E'} textColor={'#2240FF'}/>
          <AButton title={'Cancel'} backgroundColor={'#1C1C1E'} textColor={'#2240FF'} onPress={handleCallCancel}/>
          </View>
          </View>
        </BottomSheet>
      </ScrollView>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // width:'100%',
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 15,
  },
  CardsTopTitle: {
    fontSize: 15,
    // fontWeight: 'bold',
    color: '#000',
    marginVertical: 6,
    paddingHorizontal: 3,
    fontFamily:'Poppins-Bold'
  },
  storyContent:{
    fontFamily:'Poppins-Light',
    color:'#000000',
    fontSize:13
  }
});
