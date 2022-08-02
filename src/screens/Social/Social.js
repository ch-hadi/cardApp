import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Linking,
} from 'react-native';
import React from 'react';
import AButton from '../../components/Button/Button';
import {SafeAreaView} from 'react-native-safe-area-context';
import SimpleCard from '../../components/Card/SimpleCard';
const checkStoreFlatListData = [
  {
    id: 1,
    image: require('../../../assets/images/sc1.png'),
  },
  {
    id: 2,
    name: 'Dog',
  },
  {
    id: 3,
    image: require('../../../assets/images/sc1.png'),
  },
  {
    id: 4,
    image: require('../../../assets/images/sc1.png'),
  },
  {
    id: 5,
    image: require('../../../assets/images/sc1.png'),
  },
  {
    id: 6,
    image: require('../../../assets/images/sc1.png'),
  },
  {
    id: 7,
    image: require('../../../assets/images/sc1.png'),
  },
];
const mostPopularData = [
  {
    id: 1,
    buttonTitle: 'Check Ebay Store',
    title: 'Most Popular Cards',
    source: require('../../../assets/images/sc1.png'),
  },
  {
    id: 2,
    buttonTitle: 'Google Store',
    title: 'Common Card',
    source: require('../../../assets/images/sc1.png'),
  },
  {
    id: 3,
    buttonTitle: 'Card Express',
    title: 'Most Popular Cards',
    source: require('../../../assets/images/sc1.png'),
  },
  {
    id: 4,
    buttonTitle: 'Check Ebay Store',
    title: 'Common Card',
    source: require('../../../assets/images/sc1.png'),
  },
];
const Social = () => {
  const joinFacebook = () => {
    Linking.openURL('https://www.facebook.com/groups/Zaidaliofficial').catch(
      error => console.error('error', error),
    );
  };

  const joinLinkedIn = () => {
    alert('LinkedIn');
  };

  const joinTwitter = () => {
    alert('Twitter');
  };
  return (
    <SafeAreaView>
      <ScrollView style={{width: '100%'}}>
        <View style={styles.mainContainor}>
          <Text style={styles.title}>Groups</Text>
          <View
            style={{
              paddingHorizontal: 10,
              width: '100%',
              marginVertical: 10,
              paddingBottom: '2%',
              backgroundColor: '#fff',
            }}>
            <Text style={styles.CardsTopTitle}>Contact the Cave</Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 13,
                color: '#000000',
              }}>
              Come join our Private Card Cave Central Facebook Group to receive
              special promotions, discounts and live events! {'\n'}
              {'\n'}With an interactive community of hundreds of sports fans,
              get in on discussions, exclusive deals and live events, including
              card-breaks, PSA Grading showcases and much more!
              {'\n'}
            </Text>
            <ImageBackground
              style={{height: 200}}
              borderRadius={5}
              resizeMode="cover"
              source={require('../../../assets/images/joinFacebook.png')}
            />
          </View>
        </View>
        <View style={styles.btnContainer}>
          <AButton
            textColor="#000"
            backgroundColor="transparent"
            title={'Join the facebook Group'}
            borderColor="#B8B8B8"
            fontWeight="800"
            onPress={joinFacebook}
            icon={require('../../../assets/icons/facebook.png')}
          />
          <Text style={styles.joinPlateForm}>Or Join other Platforms</Text>
          <AButton
            textColor="#000"
            backgroundColor="transparent"
            title={'Join Twitter'}
            borderColor="#B8B8B8"
            fontWeight="800"
            onPress={joinTwitter}
            icon={require('../../../assets/icons/twitter.png')}
          />
          <Text></Text>
          <AButton
            textColor="#000"
            backgroundColor="transparent"
            title={'Join Linkedin'}
            borderColor="#B8B8B8"
            fontWeight="800"
            onPress={joinLinkedIn}
            icon={require('../../../assets/icons/linkedIn.png')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Social;

const styles = StyleSheet.create({
  mainContainor: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    marginTop: '5%',
    // marginBottom: '2%',
    fontFamily: 'Poppins-Bold',
    color: '#000000',
  },
  welcomeImage1: {
    width: '100%',
    height: 400,
  },
  welcomeImage2: {
    flex: 1.2,
    paddingHorizontal: '2%',
  },
  imageTitle: {
    textAlign: 'center',
    marginVertical: '5%',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    paddingHorizontal: 20,
    fontFamily: 'Poppins-Light',
  },
  seeGradingBtn: {
    position: 'absolute',
    width: '100%',
    paddingHorizontal: 25,
    bottom: '5%',
  },
  CardsTopTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000',
    marginVertical: 6,
    paddingHorizontal: 3,
    fontFamily: 'Poppins-Light',
  },
  mostPopularCard: {
    width: '100%',
    height: 180,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  btnContainer: {
    borderRadius: 10,
    marginBottom: '5%',
    width: '100%',
    paddingHorizontal: 12,
    // backgroundColor:'pink',
    alignItems: 'center',
  },
  storyContent: {
    fontSize: 15,
    color: '#000',
    marginVertical: '2%',
    fontFamily: 'Poppins-Light',
  },
  learnMore: {
    color: '#2240FF',
    fontSize: 15,
    fontWeight: '500',
    fontFamily: 'Poppins-Light',
  },
  joinPlateForm: {
    fontSize: 12,
    color: '#000',
    marginVertical: 30,
    fontFamily: 'Poppins-Light',
  },
});
