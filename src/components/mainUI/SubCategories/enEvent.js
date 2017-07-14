import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';
import Grid from 'react-native-grid-component';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

const SCREEN_WIDTH = Dimensions.get('window').width;
const { width } = Dimensions.get('window');
const HORIZONTAL_PADDING = 6;
const imageDetails = [
      {
        name: 'Makeup Artist',
        id: 'makeup',
        image: require('../../../../assets/images/subCategories/enEvent/makeup.jpg')
      },
      {
        name: 'Performer',
        id: 'performer',
        image: require('../../../../assets/images/subCategories/enEvent/performer.jpg')
      },
      {
        name: 'Photographer',
        id: 'photog',
        image: require('../../../../assets/images/subCategories/enEvent/photog.jpg')
      },
      {
        name: 'Others',
        id: 'others',
        image: require('../../../../assets/images/subCategories/enEvent/others.jpg')
      },
    ];

class enEvent extends Component {
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
  }

  navigate = (id) => {
    switch (id) {
      case 'makeup':
        Actions.GenericView({ title: 'Makeup Artist', cat: 'Makeup Artist' });
        break;
      case 'performer':
        Actions.GenericView({ title: 'Performer', cat: 'Performer' });
        break;
      case 'photog':
        Actions.GenericView({ title: 'Photographer', cat: 'Photographer' });
        break;
      case 'others':
        Actions.GenericView({ title: 'Others', cat: 'Others' });
        break;
      default:
        break;
    }
  }

  renderItem(data, index) {
    const { renderItemContainer, itemImageStyle, placeholderItemNameStyle } = styles;
    return (
      <View style={renderItemContainer} key={index}>
        <TouchableOpacity onPress={() => this.navigate(data.id)}>
          <Image source={data.image} style={itemImageStyle} >
            <Text style={placeholderItemNameStyle}> {data.name} </Text>
          </Image>
        </TouchableOpacity>
      </View>
    );
  }

  renderBlank = () => <View style={[{ backgroundColor: 'white' }, styles.item]} key='empty' />

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topHalf}>
          <View style={styles.imageContainer}>
            <Image source={require('../../../../assets/images/chatImage.jpg')} style={styles.chatImageStyle} />
          </View>
          <View style={styles.contentContainer}>
            <View style={{ backgroundColor: 'white', borderRadius: 5, flex: 2, justifyContent: 'center' }}>
              <View style={{ padding: 5, alignItems: 'center' }}>
                <Text style={{ fontSize: (Platform.OS === 'ios' ? 15 : 13), fontWeight: 'bold' }}>#ComfyHomeChatRoom</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text>652</Text>
                  <Text> people in chatroom</Text>
                </View>
                <Text>5 minutes ago</Text>
              </View>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Button title='Join Chat' raised backgroundColor='#1F57A0' iconRight icon={{ name: 'keyboard-arrow-right' }} buttonStyle={styles.buttonStyle} />
            </View>
          </View>
        </View>

        <View style={{ flex: 2.4 }}>
          <Grid
            style={styles.list}
            renderItem={this.renderItem}
            renderPlaceholder={this.renderBlank}
            data={imageDetails}
            itemsPerRow={2}
          />

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: (Platform.OS === 'android' ? 54 : 64),
    flex: 1
  },
  topHalf: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 0,
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'flex-start',
    backgroundColor: 'rgba(196, 219, 231, 0.9)'
  },
  imageContainer: {
    padding: 20,
    borderRadius: 10,
    height: 180,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2
  },
  contentContainer: {
    height: 180,
    width: (Platform.OS === 'ios' ? SCREEN_WIDTH / 2.3 : SCREEN_WIDTH / 2.4),
  },
  chatImageStyle: {
    height: 170,
    width: 190,
    borderRadius: 10,
    position: 'absolute'
  },
  buttonStyle: {
    width: (Platform.OS === 'ios' ? SCREEN_WIDTH / 2.3 : SCREEN_WIDTH / 2.4),
    paddingLeft: 15
  },
  item: {
    flex: 1,
    height: 160,
  },
  renderItemContainer: {
  	flex: 1,
  	justifyContent: 'center',
  	alignItems: 'center',
  	paddingTop: 5
  },
  itemImageStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: (width / 2) - HORIZONTAL_PADDING,
    height: 160,
  },
  placeholderItemNameStyle: {
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#0000007F',
    borderRadius: 5,
    paddingLeft: 1,
    paddingRight: 3,
    overflow: 'hidden'
  },

});

export default enEvent;
