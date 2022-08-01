import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  FlatList,
} from 'react-native';
import React from 'react';
import PriceCard from '../../components/PriceCard/PriceCard';
const persons = [
  {
    id: '1',
    name: '1-4 CARDS: Add $3.75 For Return Shipping',
    price: '12.00',
    additionWithPrice: 'Per Card + Shipping',
    priceSubHeading: 'CSG GRADING SERVICE',
    priceSubHeading3: '($2 Per Auto /$15 Gaming Trading Cards)',
    Color: '#F3B007',
    Content:
      '*CARDS MUST BE $999 OR LESS IN VALUE FOR ECONOMY, BETWEEN $1,000 AND $1,499 FOR REGULAR, AND BETWEEN $1,500 AND $2,499 FOR EXPRESS. YOU MUST SEPARATE YOUR CARDS INTO CATEGORIES FOR THE VALUE GRADING SERVICE, LISTED IN STEP 2 BELOW. THE PENNY SLEEVES AND GRADING CARD SAVER UNDER VIP PACKAGE! (.75 CENT CHARGE PER CARD)',
   
    },

  {
    id: '2',
    price: '48.00',
    name: '20-25 CARDS:Add $14.99 For Return Shipping',
    additionWithPrice: 'Per Card + Shipping',
    priceSubHeading: 'CSG GRADING SERVICE',
    priceSubHeading3: '($2 Per Auto /$15 Gaming Trading Cards)',
    Color: 'red',
    Content:
      '*CARDS MUST BE $999 OR LESS IN VALUE FOR ECONOMY, BETWEEN $1,000 AND $1,499 FOR REGULAR, AND BETWEEN $1,500 AND $2,499 FOR EXPRESS. YOU MUST SEPARATE YOUR CARDS INTO CATEGORIES FOR THE VALUE GRADING SERVICE, LISTED IN STEP 2 BELOW.YOU DO NOT HAVE THE PROPER TOP LOADER PSA REQUIRES, WE WILL PROVIDE THE PENNY SLEEVES AND GRADING CARD SAVER UNDER VIP PACKAGE! (.75 CENT CHARGE PER CARD)',
    //   bgColor:'#2240FF'
    },
    {
        id: '3',
        price: '95.00',
        name: '20-25 CARDS:Add $14.99 For Return Shipping',
        additionWithPrice: 'Per Card + Shipping',
        priceSubHeading: 'CSG GRADING SERVICE',
        priceSubHeading3: '($2 Per Auto /$15 Gaming Trading Cards)',
        Color: 'red',
        Content:
          '*CARDS MUST BE $999 OR LESS IN VALUE FOR ECONOMY, BETWEEN $1,000 AND $1,499 FOR REGULAR, AND BETWEEN $1,500 AND $2,499 FOR EXPRESS. YOU MUST SEPARATE YOUR CARDS INTO CATEGORIES FOR THE VALUE GRADING SERVICE, LISTED IN STEP 2 BELOW.YOU DO NOT HAVE THE PROPER TOP LOADER PSA REQUIRES, WE WILL PROVIDE THE PENNY SLEEVES AND GRADING CARD SAVER UNDER VIP PACKAGE! (.75 CENT CHARGE PER CARD)',
          bgColor:'#2240FF'
        },
        {
            id: '4',
            price: '165.00',
            name: '20-25 CARDS:Add $14.99 For Return Shipping',
            additionWithPrice: 'Per Card + Shipping',
            priceSubHeading: 'CSG GRADING SERVICE',
            priceSubHeading3: '($2 Per Auto /$15 Gaming Trading Cards)',
            Color: 'red',
            Content:
              '*CARDS MUST BE $999 OR LESS IN VALUE FOR ECONOMY, BETWEEN $1,000 AND $1,499 FOR REGULAR, AND BETWEEN $1,500 AND $2,499 FOR EXPRESS. YOU MUST SEPARATE YOUR CARDS INTO CATEGORIES FOR THE VALUE GRADING SERVICE, LISTED IN STEP 2 BELOW.YOU DO NOT HAVE THE PROPER TOP LOADER PSA REQUIRES, WE WILL PROVIDE THE PENNY SLEEVES AND GRADING CARD SAVER UNDER VIP PACKAGE! (.75 CENT CHARGE PER CARD)',
              bgColor:'#2240FF'
            },
];

const Grading = () => {
  
  return (
    <SafeAreaView>
      <ScrollView
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(10,10,10,0.01)',
        }}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Grading</Text>
        </View>
        <View
          style={{
            paddingTop: 10,
            paddingHorizontal: 10,
            width: '100%',
          }}>
          <ImageBackground
            style={{paddingVertical:'26%'}}
            borderRadius={5}
            resizeMode="cover"
            source={require('../../../assets/images/psabanner.png')}
          />
          <View style={{paddingHorizontal: 5, marginVertical: 25,width:'100%'}}>
            <FlatList
              horizontal
              style={{margin:0,}}
              data={persons}
              renderItem={({item}) => (
                <PriceCard
                  Color={item.Color}
                  priceSubHeading={item.priceSubHeading}
                  priceSubHeading3={item.priceSubHeading3}
                  additionWithPrice={item.additionWithPrice}
                  list={item.name}
                  price={item.price}
                  color={'#F3B007'}
                  Content={item.Content}
                  bgColor={item.bgColor}
                  iconColor={'#1DABF2'}
                />
              )}
              keyExtractor={item => item.id}
              //   ItemSeparatorComponent={Separator}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Grading;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
    paddingTop: '5%',
    marginBottom: '2%',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
    color: '#000',
    marginBottom: 10,
  },
});
