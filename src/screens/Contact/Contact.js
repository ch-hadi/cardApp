import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import AButton from '../../components/Button/Button';

const Contact = () => {
  return (
    <SafeAreaView>
      <ScrollView
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(10,10,10,0.01)',
        }}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Contact</Text>
        </View>
        <View style={{marginHorizontal: 20}}>
          <Text style={styles.subTitle}>Contact the Cave</Text>
          <Text style={styles.contentTop}>
            This is your one stop shop for all of your collectible needs. With
            over 20 years in the business, we specialize in PSA Card Grading and
            Hobby Boxes.
          </Text>
        </View>
        <View style={{marginHorizontal: 20}}>
          <Text style={styles.textLabel}>Name</Text>
          <TextInput
            placeholder="e.g John Doe"
            style={{
              borderRadius: 2,
              paddingHorizontal: 10,
              paddingVertical: 1,
              borderWidth: 1,
              borderColor: '#B7B7B7',
            }}
          />
          <Text style={styles.textLabel}>Email</Text>
          <TextInput
            placeholder="example@example.com"
            style={{
              borderRadius: 2,
              paddingHorizontal: 10,
              paddingVertical: 1,
              borderWidth: 1,
              borderColor: '#B7B7B7',
            }}
          />
          <Text style={styles.textLabel}>Phone Number</Text>
          <TextInput
            placeholder="+ 000 0000 000"
            style={{
              borderRadius: 2,
              paddingHorizontal: 10,
              paddingVertical: 1,
              borderWidth: 1,
              borderColor: '#B7B7B7',
            }}
          />
          <Text style={styles.textLabel}>Company</Text>
          <TextInput
            placeholder="+ 000 0000 000"
            style={{
              borderRadius: 2,
              paddingHorizontal: 10,
              paddingVertical: 1,
              borderWidth: 1,
              borderColor: '#B7B7B7',
            }}
          />
          <Text style={styles.textLabel}>
            Where whould you like to volunteer?
          </Text>
          <TextInput
            multiline
            numberOfLines={5}
            placeholder="+ 000 0000 000"
            style={{
              borderRadius: 2,
              borderWidth: 1,
              borderColor: '#B7B7B7',
            }}
          />
          <View>
            <Text style={styles.contentBottom}>
              We’re easy to contact and fun to work with! No question is too
              small. If we can’t do it, we will direct you to someone who can.
            </Text>
            <View style={{marginBottom:'5%'}}>
              <AButton
                title={'Submit'}
                Padding={12}
                fontWeight={'600'}
                borderColor="transparent"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
    paddingTop: '5%',
    marginBottom: '2%',
  },
  title: {
    fontFamily: 'Poppins-Light',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  subTitle: {
    fontFamily: 'Poppins-Light',
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 6,
  },
  textLabel: {
    marginTop: '4%',
    marginBottom: '1%',
  },
  contentBottom: {
    color: '#000',
    fontFamily: 'Poppins-Light',
    fontSize: 12,
    marginVertical: 10,
  },
  contentTop:{
    color: '#000',
    fontFamily: 'Poppins-Light',
    fontSize: 12,
  }
});
