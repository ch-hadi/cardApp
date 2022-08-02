import {StyleSheet,View} from 'react-native';
import React from 'react';
import PaginationDot from 'react-native-animated-pagination-dot';
// import Button from '../../components/Button/Button';
import AButton from '../../components/Button/Button';
import SplashScreenCard from '../../components/SplashScreenCompo/SplashScreenCard';
import SplashScreenImage from '../../components/SplashScreenCompo/SplashScreenImage';
import { useDimensions } from '@react-native-community/hooks'
const WelcomeScreen = ({navigation}) => {
  const [curPage, setCurPage] = React.useState(0);

  const dimensions = useDimensions()
// or
const { width, height } = useDimensions().window
// or
const screen = useDimensions().screen
  const handlePress = () => {
    setCurPage(curPage+1);
    if (curPage>=3) {
      navigation.navigate('StrtExploring')
    }
  };
  return (
    <View style={styles.main}>
      <View style={styles.welcomeImage1}>
        {curPage == 0 ? (
          <SplashScreenImage
            source={require('../../../assets/images/handeWithColor.jpg')}
            
          />
        ) : curPage == 1 ? (
          <SplashScreenImage
            source={require('../../../assets/images/groupCards.png')}
            backgroundColor={'#E3E1EC'}
          />
        ) : curPage == 2 ? (
          <SplashScreenImage
            source={require('../../../assets/images/groupCardTable.png')}
          />
        ) : curPage == 3 ? (
          <SplashScreenImage
            source={require('../../../assets/images/groupCardYellow.png')}
          />
        ) : (
          ''
        )}
      </View>
      <View style={styles.welcomeImage}>
        <View>
          {curPage == 0 ? (
            <SplashScreenCard
              title={'Welcome'}
              content={
                'This is your one stop shop for all of your collectible needs. With over 20 years in the business, we specialize in PSA Card Grading and Hobby Boxes.'
              }
            />
          ) : curPage == 1 ? (
            <SplashScreenCard
              title={'Card Seperation & VIP Service'}
              content={
                'We handle everything from card handeling to prepration and help you sort out the cards into categories.'
              }
            />
          ) : curPage == 2 ? (
            <SplashScreenCard
              title={'PSA Grading Form'}
              content={
                'Download the form and fill out the relevant information.'
              }
            />
          ) : curPage == 3 ? (
            <SplashScreenCard
              title={'Get a better style for your cards!'}
              content={
                'Card crave centeral, provides reluctant and easy to use experience to convey message'
              }
            />
          ) : (
            ''
          )}
        </View>
        <View style={styles.paginate}>
          <PaginationDot
            activeDotColor={'#2240FF'}
            curPage={curPage}
            maxPage={4}
          />
        </View>
        <View style={styles.btn}>
          <AButton title={'Next'} fontSize={15} borderColor='transparent' Padding={10} onPress={()=>{
            setCurPage(curPage+1);
            if (curPage>=3) {
              navigation.navigate('StrtExploring')
              // return
            }
            if(curPage == 3){
              setCurPage(0)
              // console.log(curPage)
            }
            
          }} />
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  main: {
    // width: '100%',
    // height: '100%',
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeImage1: {
    // flex: 0.6,
    height:'55%',
    backgroundColor: '#2240FF',
    width: '100%',
  },
  welcomeImage: {
    // flex: 0.4,\
    height:'45%',
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
  },
  Touch: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  Text: {
    color: 'white',
  },
  btn: {
    width: '90%',
    position: 'absolute',
    bottom: '10%',
    // paddingVertical:10,
    // paddingHorizontal:30
  },
  paginate: {
    // width:'90%',
    // position: 'absolute',
    // bottom: '40%',
    // marginTop:'0%'
  },
  textWelcome: {
    fontWeight: '700',
    color: '#000',
    fontSize: 27,
  },
});
