import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import WelcomeScreen from './auth/WelcomeScreen';
import Login from './auth/LoginForm';

import registerMain from './auth/registerMain';
import registerName from './auth/registerName';
import registerEmail from './auth/registerEmail';
import registerGender from './auth/registerGender';
import registerDOB from './auth/registerDOB';
import registerPassword from './auth/registerPassword';
import registerTnC from './auth/registerTnC';
import registerMobile from './auth/registerMobile';
import registerOTP from './auth/registerOTP';

import MainCategories from './mainUI/MainCategories';
import ListSkill from './mainUI/ListSkill';
import ActivityPage from './mainUI/ActivityPage';

import comfy from './mainUI/SubCategories/comfy';
import Care from './mainUI/SubCategories/Care';
import enEvent from './mainUI/SubCategories/enEvent';
import fillTummy from './mainUI/SubCategories/fillTummy';
import health from './mainUI/SubCategories/health';
import helpHand from './mainUI/SubCategories/helpHand';
import lookBetter from './mainUI/SubCategories/lookBetter';
import enKnowledge from './mainUI/SubCategories/enKnowledge';

import GenericView from './mainUI/SubCategories/GenericView';
import GenericBookingPage from './mainUI/SubCategories/GenericBookingPage';

const RouterComponent = () => {
  return (
    <Router>
      <Scene
        key='auth'
        navigationBarStyle={{ backgroundColor: '#0B486B', borderBottomWidth: 0 }}
        titleStyle={{ color: 'white', fontSize: 20, fontWeight: '600' }}
        rightButtonImage={require('../../assets//icons/mailoutline.png')}
        onRight={() => { Actions.ActivityPage(); }}
      >

        <Scene key="welcomescreen" component={WelcomeScreen} hideNavBar rightButtonImage={null} />
        <Scene key="login" component={Login} title="Please Login" hideNavBar renderBackButton={() => (null)} panHandlers={null} rightButtonImage={null} />

        <Scene key="registerMain" component={registerMain} title="Create account" hideNavBar={false} rightButtonImage={null} />
        <Scene key="registerName" component={registerName} title="Name" hideNavBar={false} rightButtonImage={null} />
        <Scene key="registerEmail" component={registerEmail} title="Email Address" hideNavBar={false} rightButtonImage={null} />
        <Scene key="registerDOB" component={registerDOB} title="Date of Birth" hideNavBar={false} rightButtonImage={null} />
        <Scene key="registerGender" component={registerGender} title="Gender" hideNavBar={false} rightButtonImage={null} />
        <Scene key="registerPassword" component={registerPassword} title="Password" hideNavBar={false} rightButtonImage={null} />
        <Scene key="registerTnC" component={registerTnC} title="Terms & Privacy" hideNavBar={false} rightButtonImage={null} />
        <Scene key="registerMobile" component={registerMobile} title="Mobile" hideNavBar={false} rightButtonImage={null} />
        <Scene key="registerOTP" component={registerOTP} title="Verify OTP" hideNavBar={false} rightButtonImage={null} />

      </Scene>

      <Scene
        key='mainUI'
        navigationBarStyle={{ backgroundColor: '#0B486B', borderBottomWidth: 0 }}
        titleStyle={{ color: 'white', fontSize: 20, fontWeight: '600' }}
        rightButtonImage={require('../../assets//icons/mailoutline.png')}
        onRight={() => { Actions.ActivityPage(); }}
      >
        <Scene key="MainCategories" component={MainCategories} title="M A V E N T" renderBackButton={() => (null)} panHandlers={null} />
        <Scene key="ListSkill" component={ListSkill} title="Monetizing" />
        <Scene key="ActivityPage" component={ActivityPage} title="Activity" rightButtonImage={null} />

        <Scene key="comfy" component={comfy} title="Comfortable Home" />
        <Scene key="Care" component={Care} title="Extra Care" />
        <Scene key="enEvent" component={enEvent} title="Enhancing Events" />
        <Scene key="fillTummy" component={fillTummy} title="Filling Tummies" />
        <Scene key="health" component={health} title="Healthy Lifestyle" />
        <Scene key="helpHand" component={helpHand} title="Helping Hands" />
        <Scene key="lookBetter" component={lookBetter} title="Looking Better" />
        <Scene key="enKnowledge" component={enKnowledge} title="Enhancing knowledge" />
        <Scene key="GenericView" component={GenericView} />
        <Scene key="GenericBookingPage" component={GenericBookingPage} rightButtonImage={null} />
      </Scene>

    </Router>
  );
};

export default RouterComponent;
