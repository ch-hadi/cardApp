import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AButton from '../Button/Button';
const persons = [
  {
    id: '1',
    name: '1-4 CARDS: Add $3.75 For Return Shipping  ',
    priceSubHeading: 'CSG GRADING SERVICE',
  },
  {
    id: '2',
    name: '5-19 CARDS: Add$7.99 For Return Shipping',
    priceSubHeading: 'ECONOMY PSA GRADING SERVICE',
  },
  {
    id: '3',
    name: '20-25 CARDS:Add $14.99 For Return Shipping',
    priceSubHeading: 'REGULAR PSA GRADING SERVICE',
  },
  {
    id: '4',
    name: '26+ CARDS: Add $19.99 For Return Shipping',
    priceSubHeading: 'EXPRESS PSA GRADING SERVICE',
  },
];

const PriceCard = ({
  price,
  additionWithPrice,
  list,
  priceSubHeading,
  priceSubHeading3,
  Color,
  Content,
  bgColor,
  iconColor,
}) => {
  const downloadFromGrding = () => {
    alert(bgColor);
  };
  
  return (
    <View style={{flex:1, width:330 , marginRight:10,}}>
          <View style={[styles.container1, {backgroundColor: bgColor}]}>
        {bgColor ? (
          <View
            style={{
              width: '95%',
              position: 'absolute',
              top: '5%',
              borderRadius: 5,
            }}>
            <AButton
              Padding={5}
              title={'POPULAR'}
              backgroundColor={'#F3B007'}
              borderColor="transparent"
              fontWeight={'700'}
              fontSize={13}
            />
          </View>
        ) : (
          ''
        )}
        <View>
          <View style={styles.titlesContainer}>
            <Text style={[styles.price, {color: bgColor ? '#fff' : '#000'}]}>
              ${price}
            </Text>
            <Text
              style={[
                styles.additionWithPrice,
                ,
                {color: bgColor ? '#fff' : '#000'},
              ]}>
              {' '}
              / {additionWithPrice}
            </Text>
          </View>
          <View>
            <Text
              style={[
                styles.priceSubHeading,
                {color: bgColor ? '#fff' : '#000'},
              ]}>
              {priceSubHeading}
            </Text>
            <Text
              style={[
                styles.priceSubHeading3,
                {color: bgColor ? '#fff' : '#000'},
              ]}>
              {priceSubHeading3}
            </Text>
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            width: '90%',
            borderBottomColor: bgColor ? 'white' : '#000',
            marginTop: 30,
            // marginVertical:10
          }}
        />
        <View
          style={{ marginVertical: 15,}}>
          {persons.map(item => (
            <View
              style={{flexDirection: 'row', marginVertical: 5, alignItems:'center'}}
              key={item.id}>
              <Icon
                name="done"
                color={bgColor ? '#46D68C' : iconColor ? iconColor : '#F3B007'}
                size={25}
              />
              <Text
                key={item.id}
                style={{
                  fontSize: 12,
                  paddingLeft: 10,
                  color: bgColor ? '#fff' : '#000',
                  fontFamily: 'Poppins-Light',
                  // width:'90%',
    
                }}>
                {item.name}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.content}>
        <Text
          style={{
            fontFamily: 'Poppins-Light',
            fontSize: 12,
            paddingHorizontal: '1%',
            color:'black'
          }}>
          *CARDS MUST BE $999 OR LESS IN VALUE FOR ECONOMY, BETWEEN $1,000 AND
          $1,499 FOR REGULAR, AND BETWEEN $1,500 AND $2,499 FOR EXPRESS. YOU
          MUST SEPARATE YOUR CARDS INTO CATEGORIES FOR THE VALUE GRADING
          SERVICE, LISTED IN STEP 2 BELOW. **PLEASE INSURE YOUR CARDS FOR THEIR
          ESTIMATED VALUE. WE ARE NOT RESPONSIBLE FOR ANY LOST OR DAMAGED ITEMS
          IN TRANSIT. ***IF YOU DO NOT HAVE THE PROPER TOP LOADER PSA REQUIRES,
          WE WILL PROVIDE THE PENNY SLEEVES AND GRADING CARD SAVER UNDER VIP
          PACKAGE! (.75 CENT CHARGE PER CARD)
        </Text>
        <Text
          style={{
            width: '100%',
            paddingHorizontal: '1%',
            fontFamily: 'Poppins-Light',
            fontSize: 12,
            marginVertical: '8%',
            color:'black'
          }}>
          <Text style={{fontFamily: 'Poppins-Bold'}}>Note:</Text> PAYMENT IS DUE
          ONCE THE ORDER IS GRADED AND GRADES ARE POPULATED BY PSA. WE WILL
          CONTACT YOU WITH AN INVOICE, WHICH WILL DETAIL THE PRICE. YOU THEN PAY
          VIA PAYPAL, CHECK OR MONEY ORDER.
        </Text>
        <View style={{width: '80%',marginBottom:'5%'}}>
          <AButton
            title={'Download Grading Form'}
            borderColor="#2240FF"
            backgroundColor={'transparent'}
            textColor="#2240FF"
            onPress={downloadFromGrding}
            Padding={10}
          />
        </View>
      </View>
    </View>
  );
};

export default PriceCard;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgba(100,100,100,0.5)',
    borderWidth: 1,
    paddingVertical: 60,
    paddingHorizontal:10,
   
  },
  titlesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontFamily: 'Poppins-Light',
    fontSize: 35,
    fontWeight: 'bold',
  },
  additionWithPrice: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
  },
  priceSubHeading: {
    fontSize: 20,
    fontWeight: '800',
    justifyContent: 'center',
    fontFamily: 'Poppins',
  },
  priceSubHeading3: {
    fontFamily: 'Poppins-Light',
    fontSize: 13,
  },
  content: {
    fontSize: 12,
    color: '#000',
    fontFamily: 'Poppins-Light',
    marginVertical: 25,
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
