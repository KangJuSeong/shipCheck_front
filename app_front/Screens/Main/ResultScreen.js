import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, StatusBar, FlatList, TouchableHighlight} from 'react-native';
import axios from 'axios';
import * as base from 'native-base';
import PostData from '../../Components/PostData'
import {boatRequest} from '../../utils/dataRequest';
import {getToken} from '../../utils/getToken';

export default class ResultScreen extends Component {
	constructor(props){
		super(props)
			this.state = {
				data: [],
                title: '',
                price: '',
                reserve: '',
                product_status: '',
                manufacturer: '',
                brand: '',
                model_code: '',   
			}
        this.requestBoatData = this.requestBoatData(this)
	}
	componentWillMount(){}
	
    requestBoatData() {
		const name = this.props.navigation.getParam('name')
		const imo = this.props.navigation.getParam('imo')
		const calsign = this.props.navigation.getParam('calsign')
		const mmsi = this.props.navigation.getParam('mmsi')
		const vessel_type = this.props.navigation.getParam('vessel_type')
		const build_year = this.props.navigation.getParam('build_year')
		const current_flag = this.props.navigation.getParam('current_flag')
        const home_port = this.props.navigation.getParam('home_port')
		getToken().then((token) => {
            boatRequest(token, name, imo, calsign, mmsi, vessel_type, build_year, current_flag, home_port).then((response) => {
            if(response.status == 200){
				console.log('success')
				console.log(this.state.title)
				this.setState({ data: this.state.data.concat(response.data.data) })
            }
            else{
                console.log('fail')
            }
		})
        })
	}
  	render() {
    	return (
            <base.Container>
                <base.Header style={styles.header}>
                    <base.Left>
                        <base.Button onPress={()=>this.props.navigation.goBack()}>
                            <base.Icon name='ios-add'/>
                        </base.Button>
                    </base.Left>
                    <base.Body><base.Title style={styles.header_title}>등록보트 DB</base.Title></base.Body>
                    <base.Right/>
                </base.Header>
                <FlatList
                    sytle={{flex:1}}
                    data = {this.state.data}
                    renderItem={({item}) =>
                    <PostData
                        onPress={()=>this.props.navigation.navigate('Detail',{
                            itemId: item.id})}
                        post={item}/>}
                /> 
            </base.Container> 
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
    header: {
        backgroundColor: '#006EEE',  
    },
    header_title: {
        color: 'white',
        fontWeight: 'bold'
    },
});