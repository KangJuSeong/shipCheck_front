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
		const title = this.props.navigation.getParam('title')
		const price = this.props.navigation.getParam('price')
		const reserve = this.props.navigation.getParam('reserve')
		const product_status = this.props.navigation.getParam('product_status')
		const manufacturer = this.props.navigation.getParam('manufacturer')
		const brand = this.props.navigation.getParam('brand')
		const model_code = this.props.navigation.getParam('model_code')
		getToken().then((token) => {
            boatRequest(token, title, price, reserve, product_status, manufacturer, brand, model_code).then((response) => {
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
                    <base.Left><base.Icon name='ios-add'/></base.Left>
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