import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
  View,
  Picker
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class test extends Component {
  constructor(props) {
      super(props);

      this.state = {
          category: '-',
          subcategory: '-'
      };
  }

  renderCarePicker() {
    return (
      <Picker
        style={{ height: 40, flex: 1 }}
        selectedValue={this.state.subcategory}
        mode='dropdown'
        onValueChange={(subcategory) => this.setState({ subcategory })}
      >
              <Picker.Item label="Sub Category" value="-" />
              <Picker.Item label="Midwives" value="midwives" />
              <Picker.Item label="Elderly Care" value="elderly" />
              <Picker.Item label="Baby Care" value="baby" />
      </Picker>
    );
  }

  renderComfyPicker() {
    return (
      <Picker
        style={{ height: 40, flex: 1 }}
        selectedValue={this.state.subcategory}
        mode='dropdown'
        onValueChange={(subcategory) => this.setState({ subcategory })}
      >
              <Picker.Item label="Sub Category" value="-" />
              <Picker.Item label="Cleaning" value="clean" />
              <Picker.Item label="Plumber" value="plumber" />
      </Picker>
    );
  }

  renderEventPicker() {
    return (
      <Picker
        style={{ height: 40, flex: 1 }}
        selectedValue={this.state.subcategory}
        mode='dropdown'
        onValueChange={(subcategory) => this.setState({ subcategory })}
      >
              <Picker.Item label="Sub Category" value="-" />
              <Picker.Item label="Makeup Artist" value="makeup" />
              <Picker.Item label="Performer" value="performer" />
              <Picker.Item label="Photographer" value="photog" />
              <Picker.Item label="Others" value="others" />
      </Picker>
    );
  }

  renderKnowledgePicker() {
    return (
      <Picker
        style={{ height: 40, flex: 1 }}
        selectedValue={this.state.subcategory}
        mode='dropdown'
        onValueChange={(subcategory) => this.setState({ subcategory })}
      >
              <Picker.Item label="Sub Category" value="-" />
              <Picker.Item label="Music" value="music" />
              <Picker.Item label="Tuition" value="tuition" />
              <Picker.Item label="Others" value="others" />
      </Picker>
    );
  }

  renderTummyPicker() {
    return (
      <Picker
        style={{ height: 40, flex: 1 }}
        selectedValue={this.state.subcategory}
        mode='dropdown'
        onValueChange={(subcategory) => this.setState({ subcategory })}
      >
              <Picker.Item label="Sub Category" value="-" />
              <Picker.Item label="Home Cooked" value="homecook" />
              <Picker.Item label="Cooking Classes" value="cookingclass" />
      </Picker>
    );
  }

  renderHealthPicker() {
    return (
      <Picker
        style={{ height: 40, flex: 1 }}
        selectedValue={this.state.subcategory}
        mode='dropdown'
        onValueChange={(subcategory) => this.setState({ subcategory })}
      >
              <Picker.Item label="Sub Category" value="-" />
              <Picker.Item label="Gym" value="gym" />
              <Picker.Item label="Exercise Expert" value="exercise" />
              <Picker.Item label="Sports" value="sports" />
      </Picker>
    );
  }

  renderHelpHPicker() {
    return (
      <Picker
        style={{ height: 40, flex: 1 }}
        selectedValue={this.state.subcategory}
        mode='dropdown'
        onValueChange={(subcategory) => this.setState({ subcategory })}
      >
              <Picker.Item label="Sub Category" value="-" />
              <Picker.Item label="Grocery Shopper" value="grocery" />
              <Picker.Item label="Pet Walker" value="petwalker" />
      </Picker>
    );
  }

  renderLookPicker() {
    return (
      <Picker
        style={{ height: 40, flex: 1 }}
        selectedValue={this.state.subcategory}
        mode='dropdown'
        onValueChange={(subcategory) => this.setState({ subcategory })}
      >
              <Picker.Item label="Sub Category" value="-" />
              <Picker.Item label="Hair Dresser" value="hair" />
              <Picker.Item label="Nail Artist" value="nail" />
              <Picker.Item label="Others" value="others" />
      </Picker>
    );
  }

  renderPicker() {
    switch (this.state.category) {
      case 'comfy':
        return this.renderComfyPicker();
      case 'Care':
        return this.renderCarePicker();
      case 'enEvent':
        return this.renderEventPicker();
      case 'enKnowledge':
        return this.renderKnowledgePicker();
      case 'fillTummy':
        return this.renderTummyPicker();
      case 'health':
        return this.renderHealthPicker();
      case 'helpHand':
        return this.renderHelpHPicker();
      case 'lookBetter':
        return this.renderLookPicker();
      default:
        return <View style={{ flex: 0.5, alignItems: 'flex-start', paddingLeft: 8 }}><Text>Select a category</Text></View>;
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.viewContainer}>
          <View style={styles.CardContainer}>

            <View style={{ borderColor: 'black', width: 0.85 * SCREEN_WIDTH, marginTop: 5 }}>
              <Text>Service Category</Text>
              <View style={{ marginTop: 3, width: 0.85 * SCREEN_WIDTH, backgroundColor: 'white', height: 80, borderRadius: 3, }}>
                <Picker
                  style={{ height: 40, flex: 1 }}
                  selectedValue={this.state.category}
                  mode='dropdown'
                  onValueChange={(category) => this.setState({ category })}
                >
                        <Picker.Item label="Category" value="-" />
                        <Picker.Item label="Comfortable Home" value="comfy" />
                        <Picker.Item label="Enhancing Knowledge" value="enKnowledge" />
                        <Picker.Item label="Enhancing Events" value="enEvent" />
                        <Picker.Item label="Extra Care" value="Care" />
                        <Picker.Item label="Filling Tummies" value="fillTummy" />
                        <Picker.Item label="Healthy Lifestyle" value="health" />
                        <Picker.Item label="Helping Hands" value="helpHand" />
                        <Picker.Item label="Look Better" value="lookBetter" />
                </Picker>
                {this.renderPicker()}
              </View>
            </View>

            <View style={{ borderColor: 'black', width: 0.85 * SCREEN_WIDTH, marginTop: 5 }}>
              <Text>Service Description</Text>
              <View style={{ marginTop: 3, width: 0.85 * SCREEN_WIDTH, backgroundColor: 'white', height: 100, borderRadius: 3 }}>

              </View>
            </View>

          </View>
        </View>
      </ScrollView>
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
    backgroundColor: '#C6C6CA',
    marginTop: 5,
    borderRadius: 4,
    alignItems: 'center'
  },
});

export default test;
