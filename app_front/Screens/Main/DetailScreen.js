import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, StatusBar, Image } from 'react-native';
import * as base from 'native-base'
import axios from 'axios'
import {boatDetailRequest} from '../../utils/dataRequest'
import {getToken} from '../../utils/getToken'


export default class DetailScreen extends Component {
	constructor(props){
		super(props)
		this.state = {
            data : {
                name: '',
                imo: '',
                calsign: '',
                mmsi: '',
                vessel_type: '',
                build_year: '',
                current_flag: '',
                home_port: '',
                main_img: '',
                is_learning: false,
            }
		}
		this.requestData = this.requestData(this)
	}
	componentDidMount() {}
   
    requestData() {
        const id = this.props.navigation.getParam('itemId')
        getToken().then((token) => {
            boatDetailRequest(token, id).then((response) => {
                if(response.data.status == 200) {
                    this.setState({data: response.data.data})    
                }
            })
        })
    }
	
  	render() {
        const img = 'https://shipcheck-server-vrxqx.run.goorm.io' + this.state.data.main_img
    	return (
            <base.Container>
                <base.Header style={styles.header}>
                    <base.Left>
                        <base.Button 
                            style = {styles.header}
                            onPress={()=>this.props.navigation.goBack()}>
							<Image source={require('/workspace/shipCheck_front/app_front/assets/icons/back.png')}/>
						</base.Button>
                    </base.Left>
                    <base.Body><base.Title style={styles.header_title}>보트 정보</base.Title></base.Body>
                    <base.Right/>
                </base.Header>
                <base.Card style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={{uri :img}}
                           resizeMode='contain'
                           style={styles.img}/>
                    <base.CardItem>
                        <base.Body style={{alignItems: 'center', justifyContent: 'center'}}>
                            <base.Text>선박명 : {this.state.data.name}</base.Text>
                            <base.Text>IMO : {this.state.data.imo}</base.Text>
                            <base.Text>MMSI : {this.state.data.mmsi}</base.Text>
                            <base.Text>선박 유형 : {this.state.data.vessel_type}</base.Text>
                            <base.Text>제작 년도 : {this.state.data.build_year}</base.Text>
                            <base.Text>소속 국가 : {this.state.data.current_flag}</base.Text>
                            <base.Text>소속 항구 : {this.state.data.home_port}</base.Text>
                        </base.Body>
                    </base.CardItem>
                </base.Card>
            </base.Container>
    	);
  	}
}

const styles = StyleSheet.create({
	container: {
        flex: 1
	},
    header: {
        backgroundColor: '#006EEE',  
    },
    header_title: {
        color: 'white',
        fontWeight: 'bold'
    },
    img: {
        width: 150,
        height: 130,
    },
});