import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  LayoutAnimation,
  Platform,
  UIManager,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, SocialIcon, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import * as ractions from '../../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class LoginForm extends Component {
  constructor() {
     super();
     this.state = {
       showView: true,
     };
   }

  componentWillMount() {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    if (props.token) {
      Actions.mainUI();
    }
  }

  onEmailChange(text) {
    this.props.emailLoginChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordLoginChanged(text);
  }

  removeView() {
    this.setState({ showView: false });
  }

  renderButton() {
    if (this.state.showView) {
      return (
        <View>
          <Button
            raised
            title="Login with Email"
            large
            icon={{ name: 'mail-outline' }}
            backgroundColor='#0B486B'
            fontSize={16}
            fontWeight="400"
            buttonStyle={{ width: 0.75 * SCREEN_WIDTH, elevation: 10, height: 50, padding: 14 }}
            onPress={() => this.removeView()}
          />

          <View style={{ height: 10 }}></View>

          <SocialIcon
            raised
            title='Continue with Facebook'
            button
            type='facebook'
            style={{ width: 0.75 * SCREEN_WIDTH, height: 50, borderRadius: 0, margin: 0, marginLeft: 15 }}

            onPress={() => {
              this.props.facebookLogin();
              this.onAuthComplete(this.props);
          }}
          />

          <View style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 12, fontWeight: '600' }}>OR</Text>
          </View>

          <Button
            raised
            title="Sign up"
            large
            backgroundColor='white'
            color='#0B486B'
            fontWeight="bold"
            fontSize={16}
            buttonStyle={styles.registerButton}
            onPress={() => Actions.registerMain()}
          />
        </View>
      )
    }
  }

  renderLoginCard() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    if (!this.state.showView) {
      return (
        <View style={styles.loginCard}>
          <View style={{ flex: 3, alignItems: 'center' }}>
            <View style={{ width: 0.88 * SCREEN_WIDTH, alignItems: 'flex-end', paddingTop: 3 }}>
              <Icon
                name='close'
                size={24}
                onPress={() => this.setState({ showView: true })}
              />
            </View>
            <View style={{ flex: 5 }}>
              <View style={styles.Form}>
                <TextInput
                    placeholder='Email'
                    placeholderTextColor='black'
                    returnKeyLabel='Next'
                    onSubmitEditing={() => this.password.focus()}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={styles.TextInput}
                    underlineColorAndroid='transparent'
                    onChangeText={this.onEmailChange.bind(this)}
                    value={this.props.email}
                />
              </View>
              <View style={styles.Form}>
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="black"
                    returnKeyLabel="Go"
                    onSubmitEditing={() => this.password.focus()}
                    secureTextEntry
                    style={styles.TextInput}
                    underlineColorAndroid="transparent"
                    ref={(input) => this.password = input}
                    onChangeText={this.onPasswordChange.bind(this)}
                    value={this.props.password}
                />
              </View>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TouchableOpacity>
              <View style={styles.cardbutton}>
                <Text style={styles.textStyle}>Forget Password</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Actions.mainUI()}>
              <View style={styles.cardbutton}>
                <Text style={styles.textStyle}>Login</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={65} >
        <View style={{ height: 0.55 * SCREEN_HEIGHT, width: SCREEN_WIDTH, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0B486B' }}>
            <Image source={require('../../../assets/images/mavent_logo.png')} style={styles.LogoImage} />
            <View style={{ alignItems: 'center', width: 0.78 * SCREEN_WIDTH, paddingTop: 40 }}>
              <Text style={{ textAlign: 'center', fontSize: 16, fontStyle: 'italic', color: 'white', fontWeight: '200' }}>"If you're good at something, never do it for free, offer it as a service, at a small fee."</Text>
            </View>
        </View>
        <View style={{ flex: 1, backgroundColor: 'white', width: SCREEN_WIDTH, justifyContent: 'flex-start', alignItems: 'center', marginTop: 35 }}>
          <View style={{ flex: 15 }}>
            {this.renderButton()}
            <View style={{ alignItems: 'center', flex: 1, justifyContent: 'flex-end', padding: 5 }}>
              <Text>Beta V 1.0.0</Text>
            </View>
          </View>
        </View>
        {this.renderLoginCard()}
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  registerButton: {
    width: 0.75 * SCREEN_WIDTH,
    elevation: 10,
    borderWidth: 1,
    borderColor: '#0B486B',
    height: 50,
    padding: 14
  },
  loginCard: {
    flex: 1,
    height: 0.38 * SCREEN_HEIGHT,
    width: 0.9 * SCREEN_WIDTH,
    backgroundColor: 'white',
    position: 'absolute',
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardbutton: {
    flex: 1,
    width: 0.45 * SCREEN_WIDTH,
    borderWidth: 1,
    borderColor: 'rgba(11, 72, 107, 0.2)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  LogoImage: {
    height: 180,
    width: 180
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0B486B'
  },
  Form: {
    width: 0.8 * SCREEN_WIDTH,
    marginTop: 10,
    paddingLeft: 8
  },
  TextInput: {
    backgroundColor: '#F0F0F0',
    color: 'black',
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    fontSize: 16
  },
});

function mapStateToProps({ auth }) {
  const { token, email, password } = auth;

  return { token, email, password };
}

export default connect(mapStateToProps, ractions)(LoginForm);
