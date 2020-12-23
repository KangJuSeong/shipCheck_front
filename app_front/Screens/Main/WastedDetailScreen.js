import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, StatusBar, TouchableHighlight, AsyncStorage} from 'react-native';
import { Container, Content, Spinner } from 'native-base';
import * as base from 'native-base'
import {WastedBoatDetailRequest} from '../../utils/dataRequest'
import {getToken} from '../../utils/getToken'

export default class WastedDetailScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
			title: '',
		}
		this.requestBoatData = this.requestBoatData(this)
    }
	requestBoatData() {
		const dataid = this.props.navigation.getParam('dataid')
		console.log(dataid)
		getToken().then((token) => {
            WastedBoatDetailRequest(token, dataid).then((response) => {
            if(response.status == 200){
				console.log('success')
				this.setState({title: response.data.data.title})
            }
            else{
                console.log('fail')
            }
		})
        })
	}
    render(){
		return(
			<View>
				<Text>{this.state.title}</Text>
			</View>
		);
	}
}