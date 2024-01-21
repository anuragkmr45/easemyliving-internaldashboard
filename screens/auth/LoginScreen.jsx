import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput, Button } from 'react-native-paper';
import { request, PERMISSIONS } from 'react-native-permissions';

const LoginScreen = () => {
  const navigation = useNavigation();

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
    setIdentifier(text);

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) {
      console.log('Entered text is an email address');
      setEmail(true);
    } else if (/^\d{10}$/.test(text)) {
      console.log('Entered text is a phone number');
      setPhone(true);
    } else {
      console.log('Entered text is neither an email address nor a valid phone number');
      Alert.alert('Wrong Credentials');
      setEmail(false);
      setPhone(false);
    }
  };

  const askMsgPermissions = async () => {
    try {
      await request(PERMISSIONS.ANDROID.READ_SMS && PERMISSIONS.ANDROID.RECEIVE_SMS).then((result) => {
        console.log('msg permissions : ', result);
      });
      // await request(PERMISSIONS.ANDROID.RECEIVE_SMS).then((result) => {
      //   console.log('msg permissions : ', result);
      // });
    } catch (error) {
      console.error('Erorr while fetching msg permission : ', error);
    }
  };

  useEffect(() => {
    askMsgPermissions();

  }, []);

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
            placeholder="Password"
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
