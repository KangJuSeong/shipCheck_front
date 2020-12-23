import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, StatusBar, Image } from 'react-native';
import * as base from 'native-base'
import axios from 'axios'


export default class DetailScreen extends Component {
	constructor(props){
		super(props)
		this.state = {
			title: '',
			price: '',
			reserve: '',
			product_status: '',
			manufacturer: '',
			brand: '',
			model_code: '',
			boat_img: '',
		}
		this.requestData = this.requestData(this)
	}
	componentDidMount() {this.requestData}
   
    requestData() {
        const itemId = this.props.navigation.getParam('itemId')
        axios.get('https://ship-server-rczvh.run.goorm.io/Boats/boat/'+itemId+'/').
        then((response) => {
            this.setState({
                title: response.data['title'],
				price: response.data['price'],
				reserve: response.data['reserve'],
				product_status: response.data['product_status'],
				manufacturer: response.data['manufacturer'],
				brand: response.data['brand'],
				model_code: response.data['model_code'],
				boat_img: response.data['boat_img'],
            })
        })
    }
	
  	render() {
		const {navigate} = this.props.navigation;
    	return (
             <base.Container>
                <base.Content padder>
                    <base.Card transparent>
                        <base.CardItem style={{borderWidth:1}}>
                            <base.Left/>
                            <base.Body style={{alignItems:'center',justifyContent:'center'}}>
                                <Text style={{marginBottom:'10%'}}>{this.state.title}</Text>
                            </base.Body>
                            <base.Right/>
                        </base.CardItem>
                        <base.CardItem cardBody>
                            <Image source={{uri:'https://ship-server-rczvh.run.goorm.io/'+this.state.post_img + '/'}} resizeMode='contain' style={{height:300, flex: 1,borderWidth:1}}/>
                        </base.CardItem>
                        <base.CardItem style={{borderWidth:1}}>
                            <base.Left/>
                            <base.Body>
                                <Text>{this.state.post_text}</Text>
                            </base.Body>
                            <base.Right/>
                        </base.CardItem>
                    </base.Card>
                </base.Content>
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
});