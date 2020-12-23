import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, StatusBar, ScrollView, Alert, TouchableHighlight, Linking } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

import Constants from 'expo-constants';

import SendIntentAndroid from 'react-native-send-intent';

export default class test extends Component {
	constructor(props){
        super(props)
		this.state= {
			latitude: '0',
			longitude: '0',
			device_id: '',
		}
		this.getLocation = this.getLocation(this);
	}
	componentWillMount() {
		this.setState({device_id: Constants.deviceId})
		console.log(Constants.deviceId);
	}
	getLocation = async () => {
		try {
			const response = await Location.requestPermissionsAsync();
			const location = await Location.getCurrentPositionAsync();
			console.log(location.coords['latitude'])
			console.log(location.coords['longitude'])
			this.setState({latitude: location.coords['latitude'], longitude: location.coords['longitude']})
		} catch (error) {
		  Alert.alert("Can't find you.", "Please Try Again!")
		}
	}
  	render() {
    	return (
			<ScrollView>
				<View style={{height: 500, width: 410, borderWidth: 1, borderColor: 'black'}}>
					<MapView
						style={{flex: 1}}
						initialRegion={{
								latitude: 34.740181,
								longitude: 128.491244,
								latitudeDelta: 0.0922,
								longitudeDelta: 0.0421,
							}}
						>
						<Marker
							coordinate={{latitude: 34.711782, longitude: 128.475795}} title="A" description="선박" pinColor='green'
							onPress={()=>this.props.navigation.navigate('Main')}
							/>
						<Marker coordinate={{latitude: 34.716435, longitude: 128.499263}} title="B" description="선박" pinColor='green'/>
						<Marker coordinate={{latitude: 34.739400, longitude: 128.461054}} title="C" description="유기+폐선박" pinColor='blue'/>
						<Marker coordinate={{latitude: 34.741702, longitude: 128.495200}} title="D" description="유기+폐선박" pinColor='blue'/>
						<Marker coordinate={{latitude: 34.721888, longitude: 128.445555}} title="E" description="유기+폐선박" pinColor='blue'/>
						<Marker coordinate={{latitude: 34.731681, longitude: 128.495755}} title="F" description="유기+폐선박" pinColor='blue'/>
			
					</MapView>
				</View>
				<View style={{height: 150, width: 410, borderWidth: 1, borderColor: 'black'}}>
					<Text style={{fontSize: 30}}>{this.state.device_id}</Text>
				</View>
				<View style={{height: 150, width: 410, borderWidth: 1, borderColor: 'black'}}>
					<TouchableHighlight>
                        <Text style={{ fontSize: 50, }}>앱 실행</Text>
                	</TouchableHighlight>
				</View>
				<View style={{height: 150, width: 410, borderWidth: 1, borderColor: 'black'}}>
					<Text>hello</Text>
				</View>
				<View style={{height: 150, width: 410, borderWidth: 1, borderColor: 'black'}}>
					<Text>hello</Text>
				</View>
				<View style={{height: 150, width: 410, borderWidth: 1, borderColor: 'black'}}>
					<Text>hello</Text>
				</View>
				<View style={{height: 150, width: 410, borderWidth: 1, borderColor: 'black'}}>
					<Text>hello</Text>
				</View>
				<View style={{height: 150, width: 410, borderWidth: 1, borderColor: 'black'}}>
					<Text>hello</Text>
				</View>
				<View style={{height: 150, width: 410, borderWidth: 1, borderColor: 'black'}}>
					<Text>hello</Text>
				</View>
				<View style={{height: 150, width: 410, borderWidth: 1, borderColor: 'black'}}>
					<Text>hello</Text>
				</View>
			</ScrollView>
    	);
  	}
}