import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, KeyboardAvoidingView, Platform, ScrollView, Alert, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput, Button } from 'react-native-paper';
import { usePermissionsContext } from '../../context/PermissionsProvider';

const LoginScreen = () => {
  const navigation = useNavigation();
  const { getMsgPermissions } = usePermissionsContext();

  const [identifier, setIdentifier] = useState('');
  const [phone, setPhone] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log('phone : ', phone);
    console.log('email : ', email);
    navigation.navigate('Home');
  };

  const handleCheckForPhoneOrEmail = (text) => {
    setIdentifier(text.trim());
  };
  useEffect(() => {
    // Validate phone or email after the user makes an input
    const timer = setTimeout(() => {
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier)) {
        console.log('Entered text is an email address');
        setEmail(true);
        setPhone(false);
      } else if (/^\d{10}$/.test(identifier)) {
        console.log('Entered text is a phone number');
        setPhone(true);
        setEmail(false);
      } else {
        console.log('Entered text is neither an email address nor a valid phone number');
        setEmail(false);
        setPhone(false);
      }
    }, 2000);

    // Clear the timer if the user makes another input within the delay
    return () => clearTimeout(timer);
  }, [identifier]);

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

    try {
      getMsgPermissions();
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

    return () => {
      // Remove the event listener when the component is unmounted
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
            value={identifier}
            mode="outlined"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCompleteType="tel"
            textContentType="telephoneNumber"
            onChangeText={(e) => handleCheckForPhoneOrEmail(e)}
          />

          <TextInput
            label="Password"
            placeholder="*******"
            value={password}
            onChangeText={(text) => setPassword(text)}
            mode="outlined"
            style={styles.input}
            keyboardType="default"
            secureTextEntry
            right={
              <TextInput.Icon
                name={showPassword ? 'eye-off' : 'eye'}
                onPress={() => setShowPassword(!showPassword)}
              />}
          />

          <Image style={styles.img} source={require('../../utils/images/signup.jpg')} />

          <Button
            mode="contained"
            icon="login"
            onPress={handleLogin}
            style={styles.button}
          >
            Login
          </Button>
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
