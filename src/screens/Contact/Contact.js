import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AButton from '../../components/Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {sendEmail} from '../../components/Email/emailSlice/emailSlice';
import {useDimensions} from '@react-native-community/hooks';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
// import email from 'react-native-email'
const Contact = () => {
  const dispatch = useDispatch();
  const dimensions = useDimensions();
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [Company, setCompany] = useState('');
  const [Volunteer, setVolunteer] = useState('');
  const {width, height} = useDimensions().window;
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const screen = useDimensions().screen;
  const handleChangeName = e => {
    setName(e);
  };
  const handleChangeEmail = e => {
    setEmail(e);
  };
  const handleChangePhoneNumber = e => {
    setPhoneNumber(e);
  };
  const handleChangeCompany = e => {
    setCompany(e);
  };
  const handleChangeVolunteer = e => {
    setVolunteer(e);
  };
  const contact = () => {
    // const to = ['poetrylinez@gmail.com', 'mrhammad.009@gmail.com'] // string or array of email addresses
    //         email(to, {
    //         // Optional additional arguments
    //         cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
    //         bcc: 'mee@mee.com', // string or array of email addresses
    //         subject: 'Show how to use',
    //         body: 'Some body right here',
    //         checkCanOpen: false // Call Linking.canOpenURL prior to Linking.openURL
    //     }).catch(console.error)
    // const toSend ={Name,Email,PhoneNumber,Company,Volunteer}
    // console.log('da-->',toSend)
    if (Name == '') {
      Toast.show({
        type: 'error',
        text1: 'Please enter you name 👋',
      });
      setNameError(true);
      return;
    }
    if (Name !== '') {
      setNameError(false);
      // return
    }
    if (Email == '') {
      Toast.show({
        type: 'error',
        text1: 'Please enter valid Email 👋',
      });
      setEmailError(true);
      return;
    }
    if (Email !== '') {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (reg.test(Email) === false) {
        console.log('Email is Not Correct');
        // this.setState({ email: text })
        Toast.show({
          type: 'error',
          text1: 'Please enter valid Email 👋',
        });
        setEmailError(true);
        return;
      }
      setEmailError(false);
      // return
    }
    const data = {
      to: 'poetrylinez@gmail.com',
      body: 'This is test body',
      subject: 'Contact Email',
    };
    dispatch(sendEmail(data));
  };
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
          <Text
            style={[styles.textLabel, {color: !nameError ? 'black' : 'red'}]}>
            Name
          </Text>
          <TextInput
            placeholder="e.g John Doe"
            style={{
              borderRadius: 2,
              paddingHorizontal: 10,
              paddingVertical: 1,
              borderWidth: 1,
              borderColor: !nameError ? '#B7B7B7' : 'red',
            }}
            // value={toSend.from_name}
            onChangeText={handleChangeName}
            underlineColorAndroid="transparent"
          />
          <Text
            style={[styles.textLabel, {color: !emailError ? 'black' : 'red'}]}>
            Email
          </Text>
          <TextInput
            placeholder="example@example.com"
            style={{
              borderRadius: 2,
              paddingHorizontal: 10,
              paddingVertical: 1,
              borderWidth: 1,
              borderColor: !emailError ? '#B7B7B7' : 'red',
            }}
            onChangeText={handleChangeEmail}
          />
          <Text style={styles.textLabel}>
            Phone Number <Text style={styles.optional}>(Optional)</Text>
          </Text>
          <TextInput
            placeholder="+ 000 0000 000"
            style={{
              borderRadius: 2,
              paddingHorizontal: 10,
              paddingVertical: 1,
              borderWidth: 1,
              borderColor: '#B7B7B7',
            }}
            onChangeText={handleChangePhoneNumber}
          />
          <Text style={styles.textLabel}>
            Company <Text style={styles.optional}>(Optional)</Text>
          </Text>
          <TextInput
            placeholder="+ 000 0000 000"
            style={{
              borderRadius: 2,
              paddingHorizontal: 10,
              paddingVertical: 1,
              borderWidth: 1,
              borderColor: '#B7B7B7',
            }}
            onChangeText={handleChangeCompany}
          />
          <Text style={styles.textLabel}>
            Where whould you like to volunteer?{' '}
            <Text style={styles.optional}>(Optional)</Text>
          </Text>
          <TextInput
            multiline
            numberOfLines={5}
            // onFocus={()=>{alert('focused')}}
            placeholder="+ 000 0000 000"
            style={{
              borderRadius: 2,
              borderWidth: 1,
              borderColor: '#B7B7B7',
            }}
            onChangeText={handleChangeVolunteer}
          />
          <View>
            <Text style={styles.contentBottom}>
              We’re easy to contact and fun to work with! No question is too
              small. If we can’t do it, we will direct you to someone who can.
            </Text>
            <View style={{marginBottom: '5%'}}>
              <AButton
                title={'Submit'}
                Padding={10}
                fontWeight={'600'}
                borderColor="transparent"
                onPress={contact}
              />
            </View>
          </View>
        </View>
        <Toast />
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
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
    color: '#000',
    marginBottom: 10,
  },
  subTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
    fontWeight: '700',
    color: '#000',
    marginVertical: 6,
  },
  textLabel: {
    marginTop: '4%',
    marginBottom: '1%',
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
  },
  contentBottom: {
    color: '#000',
    fontFamily: 'Poppins-Light',
    fontSize: 13,
    marginVertical: 10,
  },
  contentTop: {
    color: '#000',
    fontFamily: 'Poppins-Light',
    fontSize: 13,
  },
  optional: {
    fontSize: 10,
  },
});
