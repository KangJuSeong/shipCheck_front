import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, StatusBar, TouchableHighlight, Image, AsyncStorage} from 'react-native';
import axios from 'axios';
import * as base from 'native-base'
import {loginRequest} from '../../utils/userRequest/'
import Constants from 'expo-constants';

export default class LoginScreen extends Component {
	constructor(props){
        super(props)
		this.state= {
            serviceNum : '',
            password : '',
			device_id : '',
		}
		this.requestLogin = this.requestLogin.bind(this)
	}
	
	componentWillMount(){
		this.setState({device_id: Constants.deviceId})
	}
	componentDidMount(){
    }

	requestLogin() {
        loginRequest(this.state.serviceNum, this.state.password, this.state.device_id)
        .then((response) => {
            if(response.status == 200){
                AsyncStorage.setItem('token', response.data['data']['token']);
                this.props.navigation.replace("Drawer")
            }
            else{
                console.log('Invalid User')
            }
		})
	}
    
	render() {
		return (
            <base.Container style={styles.container}>
                <Image
                    resizeMode='contain'
                    style={styles.main_logo}
                    source={require('/workspace/app_front/assets/main_logo.png')}/>
                <Text style={styles.txt_1}>보트정보</Text>
                <Text style={styles.txt_2}>확인체계</Text>
                <base.Form style={styles.input}>
                    <base.Item floatingLabel>
                        <base.Label style={{color: 'white'}}>아이디</base.Label>
                        <base.Input 
							keyboardType="number-pad"
                            onChangeText={(serviceNum) => this.setState({serviceNum})}/>
                    </base.Item>
                    <base.Item floatingLabel>
                        <base.Label style={{color: 'white'}}>비밀번호</base.Label>
                        <base.Input
                            secureTextEntry={ true }
                            onChangeText={(password) => this.setState({password})}/>
                    </base.Item>
                </base.Form>
                <View style={styles.btn_container}>
					<TouchableHighlight
                        onPress={()=>this.props.navigation.navigate('Register')}
                        style={styles.logout}>
                        <Text style={styles.logout_txt}>TEST</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={this.requestLogin}
                        style={styles.login}>
                        <Text style={styles.login_txt}>로그인</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={()=>this.props.navigation.navigate('Signup1')}
                        style={styles.logout}>
                        <Text style={styles.logout_txt}>회원가입</Text>
                    </TouchableHighlight>
					
                </View>
            </base.Container>
		);
 	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#006EEE',
        alignItems: 'center',
    },
    form: {
        width: '50%'    
    },
    main_logo: {
        marginTop: '23%'
    },
    txt_1: {
        fontSize: 65,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginTop: '4%'
    },
    txt_2: {
        fontSize: 65,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginTop: '2%'
    },
    input: {
        width: '80%',
        height: '7%',
    },
    login: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: '20%',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    login_txt: {
        color: '#006EEE',
        fontWeight: 'bold'
    },
    logout: {
        marginTop: '8%',
        backgroundColor: '#006EEE',
        width: '100%',
        height: '20%',
        borderRadius: 4,
        alignItems: 'center',
        borderWidth: 1,
        justifyContent: 'center',
        borderColor: '#FFFFFF'
    },
    logout_txt: {
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    btn_container: {
        alignItems: 'center',
        width: '80%',
        marginTop: '35%'
    }
});
