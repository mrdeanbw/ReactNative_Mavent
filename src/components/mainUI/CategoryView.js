/* eslint no-mixed-spaces-and-tabs: 0 */
/* eslint global-require: 0 */

import React, { Component } from 'react';
import Carousel from 'react-native-looped-carousel';
import Grid from 'react-native-grid-component';
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  View,
  Dimensions
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const { width, height } = Dimensions.get('window');
const HORIZONTAL_PADDING = 6;
const imageDetails = [
        {
          name: 'Comfortable Home',
          id: 'comfy',
          image: require('../../../assets/images/ListView/Category1.jpg')
        },
        {
          name: 'Enhancing knowledge',
          id: 'enKnowledge',
          image: require('../../../assets/images/ListView/Category2.jpg')
        },
        {
          name: 'Enhancing Events',
          id: 'enEvent',
          image: require('../../../assets/images/ListView/Category3.jpg')
        },
        {
          name: 'Extra Care',
          id: 'Care',
          image: require('../../../assets/images/ListView/Category4.jpg')
        },
        {
          name: 'Filling Tummies',
          id: 'fillTummy',
          image: require('../../../assets/images/ListView/Category5.jpg')
        },
        {
          name: 'Healthy Lifestyle',
          id: 'health',
          image: require('../../../assets/images/ListView/Category6.jpg')
        },
        {
          name: 'Helping Hands',
          id: 'helpHand',
          image: require('../../../assets/images/ListView/Category7.jpg')
        },
        {
          name: 'Look Better',
          id: 'lookBetter',
          image: require('../../../assets/images/ListView/Category8.jpg')
        },
  ];

class CategoryView extends Component {

	constructor(props) {
		super(props);
		this.state = { size: { width, height: height / 4.5 } };
		this.renderItem = this.renderItem.bind(this);
	}

  navigate = (id) => {
    switch (id) {
      case 'comfy':
        return Actions.comfy();
      case 'enKnowledge':
        return Actions.enKnowledge();
      case 'enEvent':
        return Actions.enEvent();
      case 'Care':
        return Actions.Care();
      case 'fillTummy':
        return Actions.fillTummy();
      case 'health':
        return Actions.health();
      case 'helpHand':
        return Actions.helpHand();
      case 'lookBetter':
        return Actions.lookBetter();
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
		const { carouselImageStlye, bulletViewStyle } = styles;
		return (
			<View>
				<Carousel
					delay={6000}
					style={this.state.size}
					autoplay
					pageinfo
					//bullets
					//bulletsContainerStyle={bulletViewStyle}
				>
					<View style={this.state.size}>
						<Image source={require('../../../assets/images/CarouselView/Image2-1.jpg')} style={carouselImageStlye} />
					</View>

					<View style={this.state.size}>
						<Image source={require('../../../assets/images/CarouselView/Image1.jpg')} style={carouselImageStlye} />
					</View>

					<View style={this.state.size}>
						<Image source={require('../../../assets/images/CarouselView/Image3-1.jpg')} style={carouselImageStlye} />
					</View>
				</Carousel>

				<Grid
					style={styles.list}
				  renderItem={this.renderItem}
					renderPlaceholder={this.renderBlank}
					data={imageDetails}
					itemsPerRow={2}
				/>

			</View>
		);
	}
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: 160,
  },
  carouselImageStlye: {
    // resizeMode: 'contain'
    height: 160,
    width,
  },
  bulletViewStyle: {
  	flex: 1,
  	flexDirection: 'row',
    alignItems: 'flex-end',
    paddingTop: 30
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
  list: {
    flex: 1,
    paddingTop: 100,
  },
});

export default CategoryView;
