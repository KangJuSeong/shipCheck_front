import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, StatusBar, TouchableHighlight, AsyncStorage, Image, TextInput, ScrollView} from 'react-native';
import { Container, Content, Spinner } from 'native-base';
import * as base from 'native-base'
import {InfoRequest} from '../../utils/dataRequest'
import {getToken} from '../../utils/getToken'
import { Dropdown } from 'react-native-material-dropdown-v2-fixed';
export default class RegisterBoatScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
			id: '',
			name: '',
			imo: '',
			calsign: '',
			mmsi: '',
			vessel_type: '',
			build_year: '',
			current_flag: '',
			home_port: '',
		}
    }
  	render() {
		let data = [{
			value: '일반선박',
			}, {
			value: '유기,폐선박',
			}];
    	return (
			<base.Container>
                <base.Header style={styles.header}>
                    <base.Left>
                        <base.Button 
                            style = {styles.header}
                            onPress={()=>this.props.navigation.goBack()}>
							<base.Icon name='ios-add'/>
						</base.Button>
                    </base.Left>
                    <base.Body>
                        <base.Title style={styles.header_title}>선박등록</base.Title>
                    </base.Body>
                    <base.Right>
                    </base.Right>
                </base.Header>
				<ScrollView>
					<View style={{ margin: 5, height: 300, width: 400, borderRadius: 10, borderWidth: 1, borderColor: 'black', alignItems: "center", justifyContent: 'center',}}>
						<Image
						resizeMode='contain'
						style={{ resizeMode:'contain', width:"100%", height: "90%"}}
						source={require('/workspace/app_front/assets/img/boatexample.jpg')}/>
					</View>
					<View style={{flexDirection:'row', alignItems: "center",}}>
						<TouchableHighlight style={styles.container}
							onPress={()=>this.props.navigation.goBack()}>
							<Text style={{fontSize: 15, color: 'white',}}>카메라 등록</Text>
						</TouchableHighlight>
						<TouchableHighlight style={styles.container}
							onPress={()=>this.props.navigation.goBack()}>
							<Text style={{fontSize: 15, color: 'white',}}>갤러리 등록</Text>
						</TouchableHighlight>
						<TouchableHighlight style={styles.container}
							onPress={()=>this.props.navigation.goBack()}>
							<Text style={{fontSize: 15, color: 'white',}}>미등록</Text>
						</TouchableHighlight>
					</View>
					<View>
						<Dropdown label= '선박유형' value="----------------------------------------" data={data}/>
						<Text style={styles.inputTitle}>선박명</Text>
						<TextInput style={styles.input} placeholder="" />
						<Text style={styles.inputTitle}>최초선박등록날짜</Text>
						<TextInput style={styles.input} placeholder="  XXXX-XX-XX" />
						<Text style={styles.inputTitle}>선박무게</Text>
						<TextInput style={styles.input} placeholder="" />
						<Text style={styles.inputTitle}>선박앞뒤길이</Text>
						<TextInput style={styles.input} placeholder="  ___m" />
						<Text style={styles.inputTitle}>선박좌우길이</Text>
						<TextInput style={styles.input} placeholder="  ___m" />
						<Text style={styles.inputTitle}>정착항</Text>
						<TextInput style={styles.input} placeholder="" />
						<Text style={styles.inputTitle}>MMSI</Text>
						<TextInput style={styles.input} placeholder="" />
						<Text style={styles.inputTitle}>IMO</Text>
						<TextInput style={styles.input} placeholder="" />
						<TouchableHighlight style={styles.btn}
							onPress={()=>this.props.navigation.goBack()}>
							<Text>등록</Text>
						</TouchableHighlight>
					</View>
				</ScrollView>
			</base.Container>
    	);
  	}
}

const styles = StyleSheet.create({
	container: {
   		alignItems: "center",
		justifyContent: 'center',
		margin: 5,
        backgroundColor: '#006EEE',
        width: 125,
        height: 35,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FFFFFF',
		fontSize: 30,
		color: 'white',
	},
	input:{
		margin: 5,
		width: 400,
		height: 50,
		fontSize: 25,
		borderColor: "gray",
		borderWidth: 1,
		borderRadius: 5,
		alignItems: "center",
		justifyContent: 'center',
	},
	inputTitle:{
		marginLeft: 5,
		fontSize: 15
	},
	btn:{
		margin: 5,
        backgroundColor: '#006EEE',
        width: 400,
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        borderWidth: 1,
        justifyContent: 'center',
        borderColor: '#FFFFFF'
	}
});