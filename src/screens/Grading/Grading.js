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
import { useSelector } from 'react-redux';

const Grading = () => {

  const persons = useSelector((state)=>state.Grading.persons)
  // console.group('p->',persons)

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
            style={{ paddingVertical: '26%' }}
            borderRadius={5}
            resizeMode="cover"
            source={require('../../../assets/images/psabanner.png')}
          />
          <View style={{ paddingHorizontal: 5, marginVertical: 25, width: '100%' }}>
            <FlatList
              horizontal
              style={{ margin: 0, }}
              data={persons}
              renderItem={({ item }) => (
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
