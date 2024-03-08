import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, KeyboardAvoidingView, Platform, ScrollView, Alert, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput, Button } from 'react-native-paper';
import { usePermissionsContext } from '../../context/PermissionsProvider';

const LoginScreen = () => {
  const navigation = useNavigation();
  const { getMsgPermissions } = usePermissionsContext();

  const [email, setEmail] = useState();
  const [otpInputVisible, setOtpInputVisibile] = useState(false);
  const [otpValue, setOtpValue] = useState();

  const authKey = 'Ease@App';

  const handleSendOTP = async () => {

    try {
      if (email !== null) {
        setOtpInputVisibile(true);
        const apiUrl = `https://easemyliving.com/easemylivingappauth.php?auth_key=${authKey}&email_id=${email}`;
        const res = await fetch(apiUrl);
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const responseData = await res.json();

        if (responseData.status === true) {
          console.log(responseData.otp);
        }
      }
    } catch (error) {
      console.error('Error while login: ', error);
      Alert.alert('Error', 'An unexpected error occurred. Please try again later.');
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const apiUrl = `https://easemyliving.com/easemylivingappauth.php?auth_key=${authKey}&auth_id=${email}&otp=${otpValue}`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();

      if (responseData.status !== false) {
        console.log(responseData)
        console.log('Login successful');
      } else {
        console.error('Login failed:', responseData.message);
        Alert.alert('Login Failed', responseData.message);
      }

    } catch (error) {
      console.error('Error while login: ', error);
      Alert.alert('Error', 'An unexpected error occurred. Please try again later.');
    }
  };

  useEffect(() => {
    const disableBackHandler = navigation.addListener('beforeRemove', (e) => {

      e.preventDefault();

      Alert.alert(
        'Alert',
        'Do you want to exit the app?',
        [
          {
            text: 'No',
            style: 'cancel',
            onPress: () => { },
          },
          {
            text: 'Yes',
            onPress: () => BackHandler.exitApp(),
          },
        ]
      );
    });

    const handleMsgPermission = async () => {
      try {
        await getMsgPermissions();
      } catch (error) {
        console.error('Error while getting msg permission: ', error);
        Alert.alert(
          'Alert',
          'Something went wrong while getting message permission',
          [
            {
              text: 'Close',
              onPress: () => { },
            },
          ]
        );
      }
    };

    handleMsgPermission();
    return () => {

      disableBackHandler();
    };
  }, [getMsgPermissions, navigation]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView>
        <View style={styles.centerContainer}>
          <TextInput
            label="Phone Number or Email"
            placeholder="Phone Number or Email"
            value={email}
            mode="outlined"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCompleteType="tel"
            textContentType="telephoneNumber"
            onChangeText={(e) => setEmail(e)}
            require
          />

          <Button
            mode="contained"
            // icon="login"
            onPress={handleSendOTP}
            style={styles.button}
          >
            Send OTP
          </Button>

          {
            otpInputVisible && (
              <View>
                <TextInput
                  label="OTP"
                  placeholder="Enter OTP"
                  value={otpValue}
                  mode="outlined"
                  style={styles.input}
                  keyboardType="numeric"
                  maxLength={5}
                  onChangeText={(text) => setOtpValue(text)}
                />

                {/* Button for OTP verification */}
                <Button
                  mode="contained"
                  onPress={handleVerifyOTP} // Add a function to verify OTP
                  style={styles.button}
                >
                  Verify OTP
                </Button>
              </View>
            )
          }

          <Image style={styles.img} source={require('../../utils/images/signup.jpg')} />


        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 45,
    backgroundColor: 'white',
  },
  img: {
    height: 450,
    width: 450,
    alignSelf: 'center',
  },
  centerContainer: {
    justifyContent: 'center',
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginBottom: 16,
    backgroundColor: 'black',
  },
});

export default LoginScreen;
