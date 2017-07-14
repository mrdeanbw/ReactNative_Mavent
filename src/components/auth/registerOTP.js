import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class registerOTP extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" >
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Enter the one time password</Text>
        <View style={{ height: 10 }}></View>
        <Text
          style={{ fontSize: 16,
                   textAlign: 'center',
                   color: '#A9A9A9',
                   paddingLeft: 18,
                   paddingRight: 18 }}
        >
          Please enter the one time password from the SMS to verify your mobile.
        </Text>
        <View style={{ marginTop: 25 }}>
          <View style={styles.form}>
            <View style={styles.textbox}>
              <Text style={{ fontSize: 18 }}>OTP</Text>
            </View>
              <TextInput
                placeholderTextColor="rgba(0,0,0,0.3)"
                returnKeyLabel="Go"
                keyboardType="phone-pad"
                autoCapitalize="none"
                maxLength={4}
                autoCorrect={false}
                style={styles.input}
                underlineColorAndroid="transparent"
                onChangeText={(text) => {
                    this.setState({
                        mobile: text
                    });
                }}
              />
          </View>
        </View>
        <View style={{ height: 50 }}></View>
        <Button
          raised
          title="Request OTP"
          large
          backgroundColor='#0B486B'
          fontSize={16}
          fontWeight="400"
          buttonStyle={{ width: 0.80 * SCREEN_WIDTH, elevation: 10, height: 50, padding: 14 }}
          onPress={() => alert('end of sign up')}
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: (Platform.OS === 'android' ? 54 : 64),
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
      width: 0.4 * SCREEN_WIDTH,
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'center'
  },
  textbox: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 5,
    paddingLeft: 5,
    borderWidth: 1,
    borderColor: 'gray'
  },
  input: {
      paddingLeft: 10,
      borderWidth: 1,
      borderColor: 'gray',
      fontSize: 20,
      height: 40,
      width: 0.2 * SCREEN_WIDTH
  },
});

export default registerOTP;
