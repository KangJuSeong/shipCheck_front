import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, StatusBar, TouchableHighlight, AsyncStorage} from 'react-native';
import { Container, Content, Spinner } from 'native-base';
import * as base from 'native-base'
import {InfoRequest} from '../../utils/dataRequest'
import {getToken} from '../../utils/getToken'

export default class InformationScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            serviceNum : '',
            password : '',
            name : '',
			rank : '',
			position : '',
			belong : '',
			phone : '',
			device_id : '',
		}
		this.requestInfoData = this.requestInfoData(this)
    }
    requestInfoData() {
		getToken().then((token) => {
            WastedBoatRequest(token).then((response) => {
            if(response.status == 200){
				console.log('success')
            }
            else{
                console.log('fail')
            }
			})
        })
	}
  	render() {
    	return (
            <View style={{
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				<Text style={{ fontSize:40,}}>사용자정보</Text>
            </View>
    	);
  	}
}

const styles = StyleSheet.create({
	container: {
		margin: 10,
        backgroundColor: '#006EEE',
        width: '90%',
        height: '15%',
        borderRadius: 10,
        alignItems: 'center',
        borderWidth: 1,
        justifyContent: 'center',
        borderColor: '#FFFFFF'
	},
});