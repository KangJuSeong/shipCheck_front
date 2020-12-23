import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { Container, Content, Spinner } from 'native-base';

export default class LostScreen extends Component {
  	render() {
		const {navigate} = this.props.navigation;
    	return (
      		<View style={styles.container}>
				<Text style ={{fontSize: 30}}>열심히 만드는 중</Text>
				<Spinner color='white' />
				<StatusBar hidden = {true} />  
      		</View>
    	);
  	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#D1DFE8',
    	flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});