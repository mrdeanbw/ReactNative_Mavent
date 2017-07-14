import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    Picker,
    KeyboardAvoidingView,
    Dimensions,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import { connect } from 'react-redux';
import * as ractions from '../../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Register extends Component {
  constructor(props) {
      super(props);

      this.state = {
          maxDate: new Date()
      };
    }

    onEmailChange(text) {
      this.props.emailRegChanged(text);
    }

    onPasswordChange(text) {
      this.props.passwordRegChanged(text);
    }

    onRetryPasswordChange(text) {
      this.props.retrypasswordRegChanged(text);
    }

    onFirstNameChange(text) {
      this.props.firstnameRegChanged(text);
    }

    onLastNameChange(text) {
      this.props.lastnameRegChanged(text);
    }

    onGenderChange(text) {
      this.props.genderRegChanged(text);
    }

    onDobChange(text) {
      this.props.dobRegChanged(text);
    }

    onButtonPress() {
      const { email, password } = this.props;

      if (this.props.email !== '' && this.props.password !== '') {
        this.props.registerUser({ email, password });
      } else {
        alert('empty email or password');
      }
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={-800} >

                <View style={styles.form}>
                    <View style={styles.profilepic}>
                        <TouchableOpacity style={styles.profileBtn} onPress={() => {
                            alert('add picture');
                        }}>
                        <Image source={require('../../../assets/images/circle-with-plus.png')} style={styles.circlewithplus} />
                        </TouchableOpacity>
                        <Image source={require('../../../assets/images/placeholderuser.png')} style={styles.profilepicimage} />

                    </View>
                    <View>
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor="rgba(0,0,0,0.3)"
                            returnKeyLabel="Next"
                            onSubmitEditing={() => this.firstname.focus()}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10, fontSize: 14 }}
                            underlineColorAndroid="transparent"
                            onChangeText={this.onEmailChange.bind(this)}
                            value={this.props.email}
                        />
                    </View>

                      <View>
                          <TextInput
                              placeholder="First Name"
                              placeholderTextColor="rgba(0,0,0,0.3)"
                              returnKeyLabel="Next"
                              onSubmitEditing={() => this.lastname.focus()}
                              autoCapitalize="none"
                              autoCorrect={false}
                              style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10, fontSize: 14 }}
                              underlineColorAndroid="transparent"
                              ref={(input) => this.firstname = input}
                              onChangeText={this.onFirstNameChange.bind(this)}
                              value={this.props.firstname}
                          />
                      </View>

                      <View>
                          <TextInput
                              placeholder="Last Name"
                              placeholderTextColor="rgba(0,0,0,0.3)"
                              returnKeyLabel="Next"
                              onSubmitEditing={() => this.password.focus()}
                              autoCapitalize="none"
                              autoCorrect={false}
                              style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10, fontSize: 14 }}
                              underlineColorAndroid="transparent"
                              ref={(input) => this.lastname = input}
                              onChangeText={this.onLastNameChange.bind(this)}
                              value={this.props.lastname}
                          />
                      </View>

                    <View>
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor="rgba(0,0,0,0.3)"
                            returnKeyLabel="Next"
                            onSubmitEditing={() => this.retypepassword.focus()}
                            secureTextEntry
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10, fontSize: 14 }}
                            underlineColorAndroid="transparent"
                            ref={(input) => this.password = input}
                            onChangeText={this.onPasswordChange.bind(this)}
                            value={this.props.password}
                        />
                    </View>
                    <View>
                        <TextInput
                            placeholder="Retype Password"
                            placeholderTextColor="rgba(0,0,0,0.3)"
                            returnKeyLabel="Go"
                            secureTextEntry
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10, fontSize: 14 }}
                            underlineColorAndroid="transparent"
                            ref={(input) => this.retypepassword = input}
                            onChangeText={this.onRetryPasswordChange.bind(this)}
                            value={this.props.retypepassword}
                        />
                    </View>

                    <View style={styles.genderDateContainer}>
                      <View style={{ borderWidth: 1, borderColor: 'gray', paddingLeft: 3, justifyContent: 'center' }}>
                          <Picker
                              style={{ width: 0.3 * SCREEN_WIDTH, height: 20 }}
                              selectedValue={this.props.gender}
                              mode='dropdown'
                              onValueChange={(gender) => this.onGenderChange(gender)}
                          >
                                  <Picker.Item label="Gender" value="-" />
                                  <Picker.Item label="Male" value="male" />
                                  <Picker.Item label="Female" value="female" />
                          </Picker>
                      </View>
                        <View>
                            <DatePicker
                                style={styles.datepicker}
                                date={this.props.dob}
                                mode="date"
                                placeholder="DOB"
                                format="DD-MM-YYYY"
                                minDate="02-01-1900"
                                maxDate={this.state.maxDate}
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                onDateChange={(date) => { this.onDobChange(date); }}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.submit}>
                    <Button
                      raised
                      title='SIGN UP'
                      backgroundColor='#0B486B'
                      onPress={this.onButtonPress.bind(this)}
                    />
                </View>
                <View style={styles.disclaimer}>
                    <Text style={styles.disclaimerText}>By signing up you agree to the{'\n'}<Text style={{color:"blue", textDecorationLine:"underline"}} onPress={() => {
                        alert("t&c");
                    }}>Terms & Conditions</Text> and <Text style={{color:"blue", textDecorationLine:"underline"}} onPress={() => {
                        alert("pp");
                    }}>Privacy Policy</Text></Text>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 120,
        height: 120
    },
    profilepicimage: {
        width: 125,
        height: 125,
        borderRadius: 60
    },
    profilepic: {
        alignItems: 'center',
        paddingBottom: 50,
    },
    profileBtn: {
        position: 'absolute',
        paddingLeft: 115,
        paddingTop: 100
    },
    circlewithplus: {
        width: 25,
        height: 25
    },
    form: {
        width: 0.7 * SCREEN_WIDTH
    },
    gender: {
        width: 0.3 * SCREEN_WIDTH,
        height: 20
    },
    input: {
        paddingLeft: 10
    },
    genderDateContainer: {
        flexDirection: 'row'
    },
    datepickerContainer: {
        flex: 1
    },
    datepicker: {
        width: 0.4 * SCREEN_WIDTH,

    },
    submit: {
        marginTop: 50,
        width: 0.7 * SCREEN_WIDTH
    },
    disclaimerText: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    }
});

function mapStateToProps({ reg }) {
  const { email,
          password,
          retrypassword,
          firstname,
          lastname,
          gender,
          dob,
          userID,
          token
        } = reg;

  return { email,
           password,
           retrypassword,
           firstname,
           lastname,
           gender,
           dob,
           userID,
           token };
}

export default connect(mapStateToProps, ractions)(Register);
