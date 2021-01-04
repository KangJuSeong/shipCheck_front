import React, { Component } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Button, StatusBar, Linking, TouchableHighlight, Image, Alert, AsyncStorage} from 'react-native';
import CommonButton from '../../Components/CommonButton';
import * as base from 'native-base'
import {getToken} from '../../utils/getToken'
import {StackActions, NavigationActions} from 'react-navigation'
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import DrawerActions from 'react-navigation-drawer';

export default class MainScreen extends Component {
    constructor(props){
        super(props)
		this.state= {
			name : '',
			latitude : 0,
			longitude : 0,
		}
    }
    
	componentDidMount(){
    }
	
	render() {
		const {navigate} = this.props.navigation;
    	return (
			<base.Container>
                <base.Header style={styles.header}>
                    <base.Left>
                        <base.Button 
                            style = {styles.header}
                            onPress={()=>this.props.navigation.openDrawer()}>
							<Image source={require('/workspace/shipCheck_front/app_front/assets/icons/menu.png')}/>
						</base.Button>
                    </base.Left>
                    <base.Body>
                        <base.Title style={styles.header_title}>선박정보확인체계</base.Title>
                    </base.Body>
                    <base.Right>
                    </base.Right>
                </base.Header>
                <View style={styles.container}>
                    <base.Text style={styles.title}>선박 검색</base.Text>
                    <base.Card style={styles.card}>
                        <base.CardItem button
                            style={styles.cardItem}
                            onPress={()=>this.props.navigation.navigate('AI')}>
                            <Image source={require('/workspace/shipCheck_front/app_front/assets/icons/search.png')}/>
                            <base.Text>AI 검색</base.Text>
                        </base.CardItem>
                        <base.CardItem button
                            style={styles.cardItem}
                            onPress={()=>this.props.navigation.navigate('Lost')}>
                            <Image source={require('/workspace/shipCheck_front/app_front/assets/icons/qrcode.png')}/>
                            <base.Text>QR코드 검색</base.Text>
                        </base.CardItem>
                    </base.Card>
                </View>
                <View style={styles.container}>
                    <base.Text style={styles.title}>DB관리/등록</base.Text>
                    <base.Card style={styles.card}>
                        <base.CardItem button
                            style={styles.cardItem}
                            onPress={()=>this.props.navigation.navigate('Search')}>
                            <Image source={require('/workspace/shipCheck_front/app_front/assets/icons/ship.png')}/>
                            <base.Text>등록선박DB</base.Text>
                        </base.CardItem>
                        <base.CardItem button
                            style={styles.cardItem}
                            onPress={()=>this.props.navigation.navigate('Wasted')}>
                            <Image source={require('/workspace/shipCheck_front/app_front/assets/icons/place.png')}/>
                            <base.Text>유기,폐선박DB</base.Text>
                        </base.CardItem>
                        <base.CardItem button
                            style={styles.cardItem}
                            onPress={()=>this.props.navigation.navigate('Register')}>
                            <Image source={require('/workspace/shipCheck_front/app_front/assets/icons/add.png')}/>
                            <base.Text>DB 등록</base.Text>
                        </base.CardItem>
                    </base.Card>
                </View>
                <View style={styles.container}>
                    <base.Text style={styles.title}>기상/조류</base.Text>
                    <base.Card style={styles.card}>
                        <base.CardItem button
                            style={styles.cardItem}
                            onPress={()=>Linking.openURL('http://m.kma.go.kr')}>
                            <Image source={require('/workspace/shipCheck_front/app_front/assets/icons/sun.png')}/>
                            <base.Text>기상 정보</base.Text>
                        </base.CardItem>
						<base.CardItem button
                            style={styles.cardItem}
                            onPress={()=>Linking.openURL('http://m.khoa.go.kr/')}>
                            <Image source={require('/workspace/shipCheck_front/app_front/assets/icons/wave.png')}/>
                            <base.Text>수치조류도</base.Text>
                        </base.CardItem>
                    </base.Card>
                </View>
            </base.Container>
    	);
  	}
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		flex: 1,
		justifyContent: 'center',
	},
    header: {
        backgroundColor: '#006EEE',  
    },
    header_title: {
        color: 'white',
        fontWeight: 'bold'
    },
    cardItem: {
        flex: 1,
        flexDirection: 'column'
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
		justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        marginTop: '8%',
        marginLeft: '5%'
    }
});