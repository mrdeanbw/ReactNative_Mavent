import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
  View,
  TextInput,
  TouchableHighlight,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';
import ModalPicker from 'react-native-modal-picker';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

const data = [
            { key: '0', section: true, label: 'Category' },
            { key: '1', label: 'Comfortable Home' },
            { key: '2', label: 'Enhancing Knowledge' },
            { key: '3', label: 'Enhancing Events' },
            { key: '4', label: 'Extra Care' },
            { key: '5', label: 'Filling Tummies' },
            { key: '6', label: 'Healthy Lifestyle' },
            { key: '7', label: 'Helping Hands' },
            { key: '8', label: 'Look Better' },
        ];

const comfy = [
            { key: '0', section: true, label: 'Comfortable Home' },
            { key: '1', label: 'Cleaning' },
            { key: '2', label: 'Plumber' },
            { key: '3', label: 'Others' },
        ];

const care = [
            { key: '0', section: true, label: 'Extra Care' },
            { key: '1', label: 'Midwives' },
            { key: '2', label: 'Elderly Care' },
            { key: '3', label: 'Baby Care' },
            { key: '4', label: 'Others' },
        ];

const events = [
            { key: '0', section: true, label: 'Enhancing Events' },
            { key: '1', label: 'Makeup Artist' },
            { key: '2', label: 'Performer' },
            { key: '3', label: 'Photographer' },
            { key: '4', label: 'Others' },
        ];

const knowledge = [
            { key: '0', section: true, label: 'Enhancing Knowledge' },
            { key: '1', label: 'Music' },
            { key: '2', label: 'Tuition' },
            { key: '3', label: 'Others' },
        ];

const tummy = [
            { key: '0', section: true, label: 'Filling Tummies' },
            { key: '1', label: 'Home Cooked' },
            { key: '2', label: 'Cooking Classes' },
            { key: '3', label: 'Others' },
        ];

const health = [
            { key: '0', section: true, label: 'Healthy Lifestyle' },
            { key: '1', label: 'Gym' },
            { key: '2', label: 'Exercise Expert' },
            { key: '3', label: 'Sports' },
            { key: '4', label: 'Others' },
        ];

const helpH = [
            { key: '0', section: true, label: 'Helping Hands' },
            { key: '1', label: 'Grocery Shopper' },
            { key: '2', label: 'Pet Walker' },
            { key: '3', label: 'Others' },
        ];

const lookB = [
            { key: '0', section: true, label: 'Look Better' },
            { key: '1', label: 'Hair Dresser' },
            { key: '2', label: 'Nail Artist' },
            { key: '3', label: 'Others' },
        ];

class ListSkill extends Component {

  state = {
          category: '',
          subcategory: '',
          textInputValue: '',
          Mon: false,
          Tue: false,
          Wed: false,
          Thu: false,
          Fri: false,
          Sat: false,
          Sun: false,
          morning: false,
          afternoon: false,
          evening: false,
          night: false
          };

  onPressMon = () => {
    this.setState({ Mon: !this.state.Mon });
  }

  onPressTue = () => {
    this.setState({ Tue: !this.state.Tue });
  }

  onPressWed = () => {
    this.setState({ Wed: !this.state.Wed });
  }

  onPressThu = () => {
    this.setState({ Thu: !this.state.Thu });
  }

  onPressFri = () => {
    this.setState({ Fri: !this.state.Fri });
  }

  onPressSat = () => {
    this.setState({ Sat: !this.state.Sat });
  }

  onPressSun = () => {
    this.setState({ Sun: !this.state.Sun });
  }

  onPressMorning = () => {
    this.setState({ morning: !this.state.morning });
  }

  onPressAfternoon = () => {
    this.setState({ afternoon: !this.state.afternoon });
  }

  onPressEvening = () => {
    this.setState({ evening: !this.state.evening });
  }

  onPressNight = () => {
    this.setState({ night: !this.state.night });
  }

  renderCarePicker = () => {
    return (
      <ModalPicker
          data={care}
          initValue="Select a Sub-Category"
          onChange={(option) => { this.setState({ subcategory: option.label }); }}
      >

          <TextInput
              style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, height: 40 }}
              editable={false}
              placeholder="Select a Sub-Category"
              value={this.state.subcategory}
          />
      </ModalPicker>
    );
  }

  renderComfyPicker = () => {
    return (
      <ModalPicker
          data={comfy}
          initValue="Select a Sub-Category"
          onChange={(option) => { this.setState({ subcategory: option.label }); }}
      >

          <TextInput
              style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, height: 40 }}
              editable={false}
              placeholder="Select a Sub-Category"
              value={this.state.subcategory}
          />
      </ModalPicker>
    );
  }

  renderEventPicker = () => {
    return (
      <ModalPicker
          data={events}
          initValue="Select a Sub-Category"
          onChange={(option) => { this.setState({ subcategory: option.label }); }}
      >

          <TextInput
              style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, height: 40 }}
              editable={false}
              placeholder="Select a Sub-Category"
              value={this.state.subcategory}
          />
      </ModalPicker>
    );
  }

  renderKnowledgePicker = () => {
    return (
      <ModalPicker
          data={knowledge}
          initValue="Select a Sub-Category"
          onChange={(option) => { this.setState({ subcategory: option.label }); }}
      >

          <TextInput
              style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, height: 40 }}
              editable={false}
              placeholder="Select a Sub-Category"
              value={this.state.subcategory}
          />
      </ModalPicker>
    );
  }

  renderTummyPicker = () => {
    return (
      <ModalPicker
          data={tummy}
          initValue="Select a Sub-Category"
          onChange={(option) => { this.setState({ subcategory: option.label }); }}
      >

          <TextInput
              style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, height: 40 }}
              editable={false}
              placeholder="Select a Sub-Category"
              value={this.state.subcategory}
          />
      </ModalPicker>
    );
  }

  renderHealthPicker = () => {
    return (
      <ModalPicker
          data={health}
          initValue="Select a Sub-Category"
          onChange={(option) => { this.setState({ subcategory: option.label }); }}
      >

          <TextInput
              style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, height: 40 }}
              editable={false}
              placeholder="Select a Sub-Category"
              value={this.state.subcategory}
          />
      </ModalPicker>
    );
  }

  renderHelpHPicker = () => {
    return (
      <ModalPicker
          data={helpH}
          initValue="Select a Sub-Category"
          onChange={(option) => { this.setState({ subcategory: option.label }); }}
      >

          <TextInput
              style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, height: 40 }}
              editable={false}
              placeholder="Select a Sub-Category"
              value={this.state.subcategory}
          />
      </ModalPicker>
    );
  }

  renderLookPicker = () => {
    return (
      <ModalPicker
          data={lookB}
          initValue="Select a Sub-Category"
          onChange={(option) => { this.setState({ subcategory: option.label }); }}
      >

          <TextInput
              style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, height: 40 }}
              editable={false}
              placeholder="Select a Sub-Category"
              value={this.state.subcategory}
          />
      </ModalPicker>
    );
  }

  renderPicker = () => {
    switch (this.state.category) {
      case 'Comfortable Home':
        return this.renderComfyPicker();
      case 'Extra Care':
        return this.renderCarePicker();
      case 'Enhancing Events':
        return this.renderEventPicker();
      case 'Enhancing Knowledge':
        return this.renderKnowledgePicker();
      case 'Filling Tummies':
        return this.renderTummyPicker();
      case 'Healthy Lifestyle':
        return this.renderHealthPicker();
      case 'Helping Hands':
        return this.renderHelpHPicker();
      case 'Look Better':
        return this.renderLookPicker();
      default:
        return <View style={{ flex: 0.5, borderWidth: 1, borderColor: '#ccc', alignItems: 'flex-start', paddingLeft: 8, padding: 8 }}><Text style={{ fontSize: 18 }}>Select a category first</Text></View>;
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.container}>
          <View style={styles.viewContainer}>
            <View style={styles.CardContainer}>

              <View style={{ width: 0.85 * SCREEN_WIDTH, marginTop: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: '600' }}>Service Category</Text>
                <View style={{ marginTop: 3, width: 0.85 * SCREEN_WIDTH, backgroundColor: 'white', height: 80, borderRadius: 3, }}>

                <ModalPicker
                    data={data}
                    initValue="Select a Category"
                    onChange={(option) => { this.setState({ subcategory: '' }); this.setState({ category: option.label }); }}
                >

                    <TextInput
                        style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, height: 40 }}
                        editable={false}
                        placeholder="Select a Category"
                        value={this.state.category}
                    />
                </ModalPicker>
                {this.renderPicker()}
                </View>
              </View>

              <View style={{ width: 0.85 * SCREEN_WIDTH, marginTop: 15 }}>
                <Text style={{ fontSize: 16, fontWeight: '600' }}>Service Tag</Text>
                <View style={{ marginTop: 3, width: 0.85 * SCREEN_WIDTH, backgroundColor: 'white', borderRadius: 3, alignItems: 'center', padding: 6 }}>
                  <TextInput
                    placeholderTextColor="rgba(0,0,0,0.3)"
                    placeholder="Tag"
                    keyboardType="default"
                    autoCorrect
                    autoCapitalize="sentences"
                    // multiline
                    returnKeyType='next'
                    onSubmitEditing={() => this.title.focus()}
                    maxLength={80}
                    autoCorrect={false}
                    style={{ height: 40, width: 0.80 * SCREEN_WIDTH, alignItems: 'center', padding: 8, justifyContent: 'center', fontSize: 16, }}
                    underlineColorAndroid="transparent"
                  />
                </View>
              </View>

              <View style={{ width: 0.85 * SCREEN_WIDTH, marginTop: 15 }}>
                <Text style={{ fontSize: 16, fontWeight: '600' }}>Service Title</Text>
                <View style={{ marginTop: 3, width: 0.85 * SCREEN_WIDTH, backgroundColor: 'white', borderRadius: 3, alignItems: 'center', padding: 6 }}>
                  <TextInput
                    placeholderTextColor="rgba(0,0,0,0.3)"
                    placeholder="Title"
                    keyboardType="default"
                    autoCorrect
                    autoCapitalize="sentences"
                    // multiline
                    returnKeyType='next'
                    onSubmitEditing={() => this.desc.focus()}
                    ref={(input) => this.title = input}
                    maxLength={80}
                    autoCorrect={false}
                    style={{ height: 40, width: 0.80 * SCREEN_WIDTH, alignItems: 'center', padding: 8, justifyContent: 'center', fontSize: 16, }}
                    underlineColorAndroid="transparent"
                  />
                </View>
              </View>

              <View style={{ width: 0.85 * SCREEN_WIDTH, marginTop: 15 }}>
                <Text style={{ fontSize: 16, fontWeight: '600' }}>Service Description</Text>
                <View style={{ marginTop: 3, width: 0.85 * SCREEN_WIDTH, backgroundColor: 'white', borderRadius: 3, alignItems: 'center', padding: 8 }}>
                  <TextInput
                    placeholderTextColor="rgba(0,0,0,0.3)"
                    placeholder="Please keep it within 140 characters"
                    keyboardType="default"
                    autoCorrect
                    autoCapitalize="sentences"
                    multiline
                    returnKeyType='next'
                    ref={(input) => this.desc = input}
                    maxLength={140}
                    autoCorrect={false}
                    style={{ width: 0.80 * SCREEN_WIDTH, alignItems: 'center', padding: 8, justifyContent: 'center', fontSize: 16, }}
                    underlineColorAndroid="transparent"
                  />
                </View>
              </View>

              <View style={{ width: 0.85 * SCREEN_WIDTH, marginTop: 15 }}>
                <Text style={{ fontSize: 16, fontWeight: '600' }}>Address: Postal Code</Text>
                <View style={{ marginTop: 3, width: 0.85 * SCREEN_WIDTH, backgroundColor: 'white', borderRadius: 3, alignItems: 'center', padding: 8 }}>
                  <TextInput
                    placeholderTextColor="rgba(0,0,0,0.3)"
                    placeholder="6-Digits postal code"
                    returnKeyType='go'
                    keyboardType="numeric"
                    maxLength={6}
                    // ref={(input) => this.postal = input}
                    underlineColorAndroid='transparent'
                    style={{ height: 40, width: 0.8 * SCREEN_WIDTH, padding: 8, fontSize: 16 }}
                  />
                </View>
              </View>

              <View style={{ width: 0.85 * SCREEN_WIDTH, marginTop: 15 }}>
                <Text style={{ fontSize: 16, fontWeight: '600' }}>Day Availability</Text>
                <View style={{ marginTop: 3, width: 0.85 * SCREEN_WIDTH, backgroundColor: 'white', borderRadius: 3, alignItems: 'center', padding: 8, flexDirection: 'row', justifyContent: 'space-around' }}>
                  <TouchableHighlight underlayColor='#158BCF' style={this.state.Mon ? styles.buttonPressed : styles.button} onPress={this.onPressMon}>
                    <View style={{ borderWidth: 1, borderColor: '#ccc', height: 40, width: 40, borderRadius: 3, alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{ fontSize: 28, fontWeight: 'bold' }}>M</Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight underlayColor='#158BCF' style={this.state.Tue ? styles.buttonPressed : styles.button} onPress={this.onPressTue}>
                    <View style={{ borderWidth: 1, borderColor: '#ccc', height: 40, width: 40, borderRadius: 3, alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{ fontSize: 28, fontWeight: 'bold' }}>T</Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight underlayColor='#158BCF' style={this.state.Wed ? styles.buttonPressed : styles.button} onPress={this.onPressWed}>
                    <View style={{ borderWidth: 1, borderColor: '#ccc', height: 40, width: 40, borderRadius: 3, alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{ fontSize: 28, fontWeight: 'bold' }}>W</Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight underlayColor='#158BCF' style={this.state.Thu ? styles.buttonPressed : styles.button} onPress={this.onPressThu}>
                    <View style={{ borderWidth: 1, borderColor: '#ccc', height: 40, width: 40, borderRadius: 3, alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{ fontSize: 28, fontWeight: 'bold' }}>T</Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight underlayColor='#158BCF' style={this.state.Fri ? styles.buttonPressed : styles.button} onPress={this.onPressFri}>
                    <View style={{ borderWidth: 1, borderColor: '#ccc', height: 40, width: 40, borderRadius: 3, alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{ fontSize: 28, fontWeight: 'bold' }}>F</Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight underlayColor='#158BCF' style={this.state.Sat ? styles.buttonPressed : styles.button} onPress={this.onPressSat}>
                    <View style={{ borderWidth: 1, borderColor: '#ccc', height: 40, width: 40, borderRadius: 3, alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{ fontSize: 28, fontWeight: 'bold' }}>S</Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight underlayColor='#158BCF' style={this.state.Sun ? styles.buttonPressed : styles.button} onPress={this.onPressSun}>
                    <View style={{ borderWidth: 1, borderColor: '#ccc', height: 40, width: 40, borderRadius: 3, alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{ fontSize: 28, fontWeight: 'bold' }}>S</Text>
                    </View>
                  </TouchableHighlight>
                </View>
              </View>

              <View style={{ width: 0.85 * SCREEN_WIDTH, marginTop: 15, height: 140 }}>
                <Text style={{ fontSize: 16, fontWeight: '600' }}>Time Availability</Text>
                <View style={{ marginTop: 3, width: 0.85 * SCREEN_WIDTH, backgroundColor: 'white', borderRadius: 3, padding: 8, justifyContent: 'space-around' }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableHighlight underlayColor='#158BCF' style={this.state.morning ? styles.buttonPressed : styles.button} onPress={this.onPressMorning}>
                      <View style={{ borderWidth: 1, borderColor: '#ccc', height: 42, width: 95, borderRadius: 3, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 16, fontWeight: '600' }}>Morning</Text>
                      </View>
                    </TouchableHighlight>

                    <TouchableHighlight underlayColor='#158BCF' style={this.state.afternoon ? styles.buttonPressed : styles.button} onPress={this.onPressAfternoon}>
                      <View style={{ borderWidth: 1, borderColor: '#ccc', height: 42, width: 95, borderRadius: 3, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 16, fontWeight: '600' }}>Afternoon</Text>
                      </View>
                    </TouchableHighlight>
                  </View>

                  <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableHighlight underlayColor='#158BCF' style={this.state.evening ? styles.buttonPressed : styles.button} onPress={this.onPressEvening}>
                      <View style={{ borderWidth: 1, borderColor: '#ccc', height: 42, width: 95, borderRadius: 3, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 16, fontWeight: '600' }}>Evening</Text>
                      </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='#158BCF' style={this.state.night ? styles.buttonPressed : styles.button} onPress={this.onPressNight}>
                      <View style={{ borderWidth: 1, borderColor: '#ccc', height: 42, width: 95, borderRadius: 3, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 16, fontWeight: '600' }}>Night</Text>
                      </View>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>

              <View style={{ width: 0.85 * SCREEN_WIDTH, marginTop: 1, paddingBottom: 12, flexDirection: 'row', justifyContent: 'space-around' }}>
                  <Button
                    // raised
                    title="Cancel"
                    backgroundColor='#ccc'
                    color="black"
                    buttonStyle={{ width: 0.35 * SCREEN_WIDTH, elevation: 10, height: 50 }}
                  />
                  <Button
                    raised
                    title="List it!"
                    backgroundColor='#0B486B'
                    buttonStyle={{ width: 0.35 * SCREEN_WIDTH, elevation: 10, height: 50 }}
                  />
              </View>

            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: (Platform.OS === 'android' ? 54 : 64),
    // backgroundColor: 'blue',
  },
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  CardContainer: {
    flex: 1,
    width: 0.95 * SCREEN_WIDTH,
    backgroundColor: '#D7D7D9',
    marginTop: 8,
    borderRadius: 4,
    alignItems: 'center'
  },
  buttonPressed: {
    backgroundColor: '#158BCF',
  },
  button: {
    backgroundColor: 'white'
  }
});

export default ListSkill;
