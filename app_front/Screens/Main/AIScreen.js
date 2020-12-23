import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';

import { LinearGradient } from "expo-linear-gradient";

import { Container, Header, Content, Icon } from 'native-base';

export default class AIScreen extends Component {
  	render() {
		const {navigate} = this.props.navigation;
    	return (
			<Container>
				<Content>
					<Icon name='direction'/>
				</Content>
			</Container>
    	);
  	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
    	flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});