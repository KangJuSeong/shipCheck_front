import React, { Component } from 'react';
import axios from 'axios';
import { StyleSheet, Text, TextInput, View, Button, StatusBar, TouchableHighlight, Alert } from 'react-native';
const alertMessage =
	  ' 1. 숫자, 문자, 특수문자를 혼합하여 9자리 이상으로 조합\n' +
	  ' 2. 사용자 아이디와 미일치\n' +
	  ' 3. 개인신상 및 부서명칭 등과 관련 내용 미기입\n' +
	  ' 4. 일반 사전에 등록된 단어 미기입\n' +
	  ' 5. 동일문자 3회 이상 반복 미사용\n' +
	  ' 6. 연속적인 오름차순, 내림차순 미사용'

export default class SignupScreen1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            serviceNum : '',
            password : '',
			passwordCheck: ''
		}
        this.passwordCondition = this.passwordCondition.bind(this)
    }
    
    componentDidMount() {
    }
    
    passwordCondition(){
		if(this.state.serviceNum == '') Alert.alert('생성할 아이디를 입력하세요')
		else if(this.state.password == '') Alert.alert('첫번째 비밀번호를 입력하세요')
		else if(this.state.passwordCheck == '') Alert.alert('두번째 비밀번호를 입력하세요')
		else if(this.state.password == this.state.passwordCheck){
			this.props.navigation.replace('Signup2',{
				serviceNum : this.state.serviceNum,
				password : this.state.password,
			})
		   }
		else {
			Alert.alert("비밀번호가 일치하지 않습니다")
		}
	}
  	render() {
		const {navigate} = this.props.navigation;
    	return (
      		<View style={styles.container}>
        		<Text style={{fontSize: 50}}>회원가입</Text>
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
					placeholder="아이디"
					keyboardType="number-pad"
					onChangeText={ (serviceNum) => this.setState({ serviceNum }) }
				/>
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
						onPress={() => Alert.alert('아이디조건', alertMessage)}>
						<Text style={{
							fontSize: 20,
									 }}>아이디 조건</Text>
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
					placeholder="비밀번호 입력"
					secureTextEntry={ true }
					onChangeText={ (password) => this.setState({ password }) }
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
					placeholder="비밀번호 확인"
					secureTextEntry={ true }
					onChangeText={ (passwordCheck) => this.setState({ passwordCheck }) }
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
						onPress={this.passwordCondition}>
						<Text style={{
							fontSize: 20, color: 'white'
									 }}>다음</Text>
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