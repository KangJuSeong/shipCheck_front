import React, { Component } from 'react';
import axios from 'axios'
import { StyleSheet, Text, TextInput, View, Button, StatusBar, TouchableHighlight } from 'react-native';
import { signupRequest } from '../../utils/userRequest/'
import Constants from 'expo-constants';

export default class SignupScreen2 extends Component {
    constructor(props){
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
		this.requestData = this.requestData(this)
		this.requestSignup = this.requestSignup.bind(this)
    }
	componentWillMount(){
		this.setState({device_id: Constants.deviceId})
	}
    componentDidMount() {
		this.requestData
	}
	requestData(){
		this.state.serviceNum = this.props.navigation.getParam('serviceNum')
		this.state.password = this.props.navigation.getParam('password')
		console.log(this.state.serviceNum)
		console.log(this.state.password)
	}
	requestSignup(){
		signupRequest(this.state.serviceNum, this.state.password, this.state.name, this.state.rank, this.state.position, this.state.belong, this.state.phone, this.state.device_id)
		.then((response) => {
            if(response.status == 200){
                console.log("success")
				this.props.navigation.popToTop();
            }
            else{
                console.log('fail')
            }
		})
	}
  	render() {
		const {navigate} = this.props.navigation;
    	return (
      		<View style={styles.container}>
        		<Text style={{fontSize: 50}}>회원가입</Text>
				<TouchableHighlight 
					style={{
						margin: 5,
						width: 355,
						height: 50,
						borderColor: 'white',
                    	borderWidth: 1,
						borderRadius: 5,
						backgroundColor: '#DDDDDD',	
						justifyContent: 'center',
        				alignItems: 'center',
					}}
                    onPress={this.requestLogin}>
                    <Text style={{
							color: 'black',
							fontSize: 20,
						}}>[필독] 개인정보수집 및 이용 동의</Text>
                </TouchableHighlight>
				<TouchableHighlight 
					style={{
						margin: 5,
						width: 355,
						height: 50,
						borderColor: 'white',
                    	borderWidth: 1,
						borderRadius: 5,
						backgroundColor: '#DDDDDD',	
						justifyContent: 'center',
        				alignItems: 'center',
					}}
                    onPress={this.requestLogin}>
                    <Text style={{
							color: 'black',
							fontSize: 20,
						}}>[필독] 위치기반서비스 이용약관 동의</Text>
                </TouchableHighlight>
				<TextInput
					style={{
							margin: 20,
							width: 350,
							height: 50,
							fontSize: 20,
							borderColor: "gray",
							borderBottomWidth: 1,
							backgroundColor: 'white',
					}}
					placeholder="이름"
					onChangeText={ (name) => this.setState({ name }) }
				/>
				<TextInput
					style={{
							margin: 20,
							width: 350,
							height: 50,
							fontSize: 20,
							borderColor: "gray",
							borderBottomWidth: 1,
							backgroundColor: 'white',
					}}
					placeholder="직급"
					onChangeText={ (rank) => this.setState({ rank }) }
				/>
				<TextInput
					style={{
							margin: 20,
							width: 350,
							height: 50,
							fontSize: 20,
							borderColor: "gray",
							borderBottomWidth: 1,
							backgroundColor: 'white',
					}}
					placeholder="직책"
					onChangeText={ (position) => this.setState({ position }) }
				/>
				<TextInput
					style={{
							margin: 20,
							width: 350,
							height: 50,
							fontSize: 20,
							borderColor: "gray",
							borderBottomWidth: 1,
							backgroundColor: 'white',
					}}
					placeholder="부서"
					onChangeText={ (belong) => this.setState({ belong }) }
				/>
				<TextInput
					style={{
							margin: 20,
							width: 350,
							height: 50,
							fontSize: 20,
							borderColor: "gray",
							borderBottomWidth: 1,
							backgroundColor: 'white',
					}}
					placeholder="전화번호"
					onChangeText={ (phone) => this.setState({ phone }) }
				/>
                <View style={{flexDirection: 'row',}}>
					<TouchableHighlight style={{
								margin: 3,
								width: 175,
								height: 50,
								borderColor: 'white',
								borderWidth: 1,
								borderRadius: 5,
								justifyContent: 'center',
								alignItems: 'center',
								borderColor: 'black',
								borderWidth: 1,
								borderRadius: 5,
						}}
						onPress={() => navigate("Login")}>
						<Text style={{
							fontSize: 20,
									 }}>취소</Text>
                	</TouchableHighlight>
					<TouchableHighlight style={{
								margin: 3,
								width: 175,
								height: 50,
								justifyContent: 'center',
								alignItems: 'center',
								borderColor: '#DDDDDD',
								borderWidth: 1,
								borderRadius: 5,
								backgroundColor: '#DDDDDD',
						}}
						onPress={this.requestSignup}>
						<Text style={{
							fontSize: 20, color: 'white'
									 }}>회원가입</Text>
                	</TouchableHighlight>
				</View>
				<StatusBar hidden = {true} />  
      		</View>
			
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