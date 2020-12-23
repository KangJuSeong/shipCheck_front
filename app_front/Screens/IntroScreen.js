import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, StatusBar, TouchableHighlight } from 'react-native';
import { Font } from 'expo';

import { LinearGradient } from "expo-linear-gradient";

export default class IntroScreen extends Component {
  	render() {
		const {navigate} = this.props.navigation;
    	return (
      		<View style={styles.container}>
				<LinearGradient 
					style={{
						height: '100%',
						width: '100%',
						alignItems: 'center',
						justifyContent: 'center',
					}}
						colors={["#d0e8f2", "#79a3b1"]}>
					<Text style={{ fontSize: 55, margin: 30, color: 'gray' }}>□□확인체계</Text>
				<View style = {{
						margin: 30,
						height: 500, width: 350,
						borderColor: 'gray',
                    	borderWidth: 2,
						borderRadius: 5,
						justifyContent: 'center',
        				alignItems: 'center',
						}}>
					<Text style={{margin: 40, fontSize: 25, }}>
						△ 경고 △ {"\n"}
						본 어플리케이션은 허가된 사용자만 이용할 수 있습니다. {"\n"}
						무단으로 사용하거나 부당한 방법으로 접속 시, 관련 법령에 따라 처벌을 받을 수 있습니다.
					</Text>
					<TouchableHighlight 
						style={{
							margin: 5,
							width: 200,
							height: 50,
							borderColor: '#d0e8f2',
							borderWidth: 1,
							borderRadius: 5,
							backgroundColor: '#d0e8f2',	
							justifyContent: 'center',
							alignItems: 'center',
						}}
						onPress={() => navigate("Login")}>
						<Text style={{
								color: 'gray',
								fontSize: 20,
							}}>확인했습니다</Text>
					</TouchableHighlight>
					<Text style={{margin: 30, fontSize: 18, }}>
						ⓒ 2020 All Rights Reserved.{"\n"}
					</Text>
				</View>
				</LinearGradient>
        		
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