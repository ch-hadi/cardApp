import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import AButton from '../../components/Button/Button';
import {SafeAreaView} from 'react-native-safe-area-context';
import SimpleCard from '../../components/Card/SimpleCard';
import { useSelector } from 'react-redux';
// const checkStoreFlatListData = [];
const Home = ({navigation}) => {

  const mostPopularData = useSelector((state)=>state.onlineStoreData.onlineStoreData);
  const checkStoreFlatListData = useSelector((state)=>state.onlineStoreData.checkStoreImages);

  const ItemRender = ({image}) => (
    <View>
      <Image style={{borderRadius: 5, marginBottom: 10}} source={image} />
    </View>
  );
  const Separator = () => {
    return (
      <View
        style={{
          height: 50,
          width: 8,
          backgroundColor: 'white',
        }}
      />
    );
  };
  const seeGrading = () => {
    alert('See Grading..');
  };
  const joinNow = () => {
    alert('Join Now!');
  };
  const handleAbout = ()=>{
    navigation.navigate('About')
  }
  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor: 'black'}}>
        <View style={styles.mainContainor}>
          {/* <Text style={styles.title}>Card Cave Centeral</Text> */}
          <View style={styles.welcomeImage1}>
            <ImageBackground
              resizeMode="cover"
              style={{flex: 1, width: '100%', height: '100%'}}
              source={require('../../../assets/images/groupCardYellow.png')}>
              <Text style={styles.imageTitle}>PSA AND CSG GRADING SERVICE</Text>
              <View style={styles.seeGradingBtn}>
                <AButton title={'See Grading'} onPress={seeGrading} Padding={10} borderColor='transparent' />
              </View>
              {/* <Text style={{position:'absolute',right:0}}>Skip</Text> */}
            </ImageBackground>
          </View>
          <View style={styles.welcomeImage2}>
            <Text style={styles.CardsTopTitle}>Check Store</Text>
            <FlatList
              horizontal
              data={checkStoreFlatListData}
              renderItem={({item}) => <ItemRender image={item.image} />}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={Separator}
            />
          </View>
          <View style={styles.mostPopularCard}>
            <FlatList
              horizontal
              data={mostPopularData}
              renderItem={({item}) => (
                <SimpleCard
                  title={item.title}
                  buttonTitle={item.buttonTitle}
                  source={require('../../../assets/images/EbayBanner.png')}
                />
              )}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={Separator}
            />
          </View>
          <View
            style={{
              paddingHorizontal: 10,
              width: '100%',
              marginVertical: 10,
              paddingBottom: '2%',
              backgroundColor: '#fff',
            }}>
            <Text style={styles.CardsTopTitle}>Join our Facebook Group</Text>
            <ImageBackground
              style={{height: 200}}
              borderRadius={5}
              resizeMode="cover"
              source={require('../../../assets/images/joinFacebook.png')}
            />
          </View>
          <View style={styles.btnContainer}>
            <AButton
              textColor="#2240FF"
              backgroundColor="transparent"
              title={'Join now!'}
              borderColor="#2240FF"
              fontWeight="800"
              onPress={joinNow}
              Padding={10}
            />
          </View>
          <View
            style={{
              paddingHorizontal: 10,
              width: '100%',
              marginVertical: 5,
              paddingBottom: '2%',
              backgroundColor: '#fff',
            }}>
            <Text style={styles.CardsTopTitle}>Author Story</Text>
            <ImageBackground
              style={{height: 200}}
              borderRadius={5}
              resizeMode="cover"
              source={require('../../../assets/images/story1.png')}
            />
            <Text style={styles.storyContent}>
              When I was eight years old, my parents gave me a dollar to get
              myself an ice cream at our local corner store here in New Jersey.
            </Text>
            <Text style={styles.learnMore} onPress={handleAbout}>
              Learn more{' '}
              <Image
                source={require('../../../assets/icons/arrow-right.png')}
              />
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainor: {
    backgroundColor: 'white',
    // flex: 1,
    alignItems: 'center',
    // overflow: 'scroll',
  },
  title: {
    marginTop: '5%',
    marginBottom: '2%',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
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
  },
  seeGradingBtn: {
    position: 'absolute',
    width: '100%',
    paddingHorizontal: 25,
    bottom: '5%',
  },
  CardsTopTitle: {
    fontSize: 15,
    color: '#000000',
    marginVertical: 6,
    paddingHorizontal: 3,
    fontFamily:'Poppins-Regular',
    fontWeight:'800'
  },
  mostPopularCard: {
    width: '100%',
    height: 180,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  btnContainer: {
    width: '75%',
    borderRadius: 10,
    marginBottom: '5%',
  },
  storyContent: {
    fontSize: 15,
    color: '#000',
    marginVertical: '2%',
  },
  learnMore: {
    color: '#2240FF',
    fontSize: 14,
    // fontWeight: '700',
    fontFamily:'Poppins-Bold',
  },
});
