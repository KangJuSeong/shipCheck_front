import React, { Component } from 'react';
import { View, Text, Button, Linking} from 'react-native';


export default class CommonButton extends Component {
	constructor(props){
    	super(props);
	}
	render() {
		return (
			<View style={{margin: 10, height: 100}}>
				<Button
					title={this.props.title}
					color= '#BECDFF'
        			onPress={() => Linking.openURL('https://www.naver.com')}
				/>
			</View>
		)
	}
}