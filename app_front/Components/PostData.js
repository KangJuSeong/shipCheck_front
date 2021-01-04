import React, { Component } from 'react';
import { View, Text, Button, Linking, TouchableHighlight, Image, StyleSheet} from 'react-native';
import * as base from 'native-base'
import axios from 'axios';


export default class PostData extends Component {
	constructor(props){
    	super(props);
	}
	render() {
		const img = 'https://shipcheck-server-vrxqx.run.goorm.io/' + this.props.post.main_img
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
                            <Text style={styles.txt}>선박명 : {this.props.post.name}</Text>
                            <Text style={styles.txt}>IMO : {this.props.post.imo}</Text>
                            <Text style={styles.txt}>소속 국가 : {this.props.post.current_flag}</Text>
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