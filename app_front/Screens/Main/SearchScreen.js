import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, StatusBar, FlatList, TouchableHighlight, TextInput} from 'react-native';
import axios from 'axios';
import * as base from 'native-base';
export default class SearchScreen extends Component {
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
			}
		this.postBoatData = this.postBoatData.bind(this)
	}
	componentDidMount(){}
    postBoatData(){
		this.props.navigation.navigate('Result',{
			title: this.state.title,
			price: this.state.price,
			reserve: this.state.reserve,
			product_status: this.state.product_status,
			manufacturer: this.state.manufacturer,
			brand: this.state.brand,
			model_code: this.state.model_code,
		})
	}
  	render() {
    	return (
            <base.Container>
                <base.Header style={styles.header}>
                    <base.Left>
                        <base.Button 
                            style = {styles.header}
                            onPress={()=>this.props.navigation.goBack()}>
							<base.Icon name='ios-add'/>
						</base.Button>
                    </base.Left>
                    <base.Body><base.Title style={styles.header_title}>등록보트 DB</base.Title></base.Body>
                    <base.Right/>
                </base.Header>
                <TouchableHighlight
                        onPress={this.postBoatData}
                        style={styles.btn}>
                        <Text>검색</Text>
                </TouchableHighlight>
				
				<TextInput
					style={styles.searchInput}
					placeholder="선박명"
					onChangeText={ (title) => this.setState({ title }) }
				/>
				<TextInput
					style={styles.searchInput}
					placeholder="가격"
					onChangeText={ (price) => this.setState({ price }) }
				/>
				<TextInput
					style={styles.searchInput}
					placeholder="적립금"
					onChangeText={ (reserve) => this.setState({ reserve }) }
				/>
				<TextInput
					style={styles.searchInput}
					placeholder="제품상태"
					onChangeText={ (product_status) => this.setState({ product_status }) }
				/>
				<TextInput
					style={styles.searchInput}
					placeholder="제조사"
					onChangeText={ (manufacturer) => this.setState({ manufacturer }) }
				/>
				<TextInput
					style={styles.searchInput}
					placeholder="브랜드"
					onChangeText={ (brand) => this.setState({ brand }) }
				/>
				<TextInput
					style={styles.searchInput}
					placeholder="모델 코드"
					onChangeText={ (model_code) => this.setState({model_code}) }
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
	searchInput:{
		margin: 20,
		width: 350,
		height: 50,
		fontSize: 20,
		borderColor: "gray",
		borderBottomWidth: 1,
		backgroundColor: 'white',
	},
    btn: {
        backgroundColor: '#006EEE',
        width: '100%',
        height: '20%',
        borderRadius: 4,
        alignItems: 'center',
        borderWidth: 1,
        justifyContent: 'center',
        borderColor: '#FFFFFF'
    }
});
