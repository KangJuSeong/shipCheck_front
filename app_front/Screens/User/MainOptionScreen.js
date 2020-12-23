import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, StatusBar, TouchableHighlight, AsyncStorage} from 'react-native';
import { Container, Content, Spinner } from 'native-base';
import * as base from 'native-base'
import {logoutRequest} from '../../utils/userRequest'
import {getToken} from '../../utils/getToken'

export default class MainOptionScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.requestLogout = this.requestLogout.bind(this)
    }
    
    requestLogout() {
        getToken().then((token)=>{
            logoutRequest(token).then( async (response) => {
                if(response.status == 200){
                    await AsyncStorage.removeItem('token')
                    this.props.navigation.replace("Login")
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
				<TouchableHighlight
                    onPress={()=>this.props.navigation.navigate('Info')}
                    style={styles.container}>
                    <Text style={{fontSize: 20, color:'white'}}>사용자정보</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={this.requestLogout}
                    style={styles.container}>
                    <Text style={{fontSize: 20, color:'white'}}>로그아웃</Text>
                </TouchableHighlight>
				<TouchableHighlight
                    onPress={this.requestLogout}
                    style={styles.container}>
                    <Text style={{fontSize: 20, color:'white'}}>오류보고</Text>
                </TouchableHighlight>
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