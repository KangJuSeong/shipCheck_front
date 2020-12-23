import React, { Component } from 'react';
import { View, Text, Button, Linking, TouchableHighlight, Image, StyleSheet} from 'react-native';
import * as base from 'native-base'
import axios from 'axios';


export default class PostData extends Component {
	constructor(props){
    	super(props);
	}
	render() {
		const img = 'https://ship-server-rczvh.run.goorm.io/' + this.props.post.boat_img
		return (
			<TouchableHighlight onPress={this.props.onPress}>
                <base.Card>
                    <base.CardItem cardBody>
                        <base.Left>
                            <Image
                                resizeMode='contain'
                                source={{uri: img,}}
                                style={styles.img} />
                        </base.Left>
                        <base.Body>
                            <Text style={styles.txt}>{this.props.post.title}</Text>
                            <Text style={styles.txt}>{this.props.post.price}원</Text>
                            <Text style={styles.txt}>{this.props.post.manufacturer}</Text>
                        </base.Body>
                    </base.CardItem>
                </base.Card>
			</TouchableHighlight>
		)
	}
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
    },
    container_2: {
        flexDirection: 'row'
    },
    container_3: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20
    },
    img: {
        width: 150,
        height: 130,
    },
    txt: {
        marginTop: '10%'
    }
})