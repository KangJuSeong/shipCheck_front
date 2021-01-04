import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, StatusBar, FlatList, TouchableHighlight, TextInput, Image} from 'react-native';
import axios from 'axios';
import * as base from 'native-base';
export default class SearchScreen extends Component {
	constructor(props){
		super(props)
			this.state = {
                name: '',
                imo: '',
                calsign: '',
                mmsi: '',
                vessel_type: '',
                build_year: '',
                current_flag: '',
                home_port: '',
			}
		this.postBoatData = this.postBoatData.bind(this)
	}
	componentDidMount(){}
    postBoatData(){
		this.props.navigation.navigate('Result',{
			name: this.state.name,
			imo: this.state.imo,
			calsign: this.state.calsign,
			mmsi: this.state.mmsi,
			vessel_type: this.state.vessel_type,
			build_year: this.state.build_year,
			current_flag: this.state.current_flag,
            home_port: this.state.home_port,
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
							<Image source={require('/workspace/shipCheck_front/app_front/assets/icons/back.png')}/>
						</base.Button>
                    </base.Left>
                    <base.Body><base.Title style={styles.header_title}>등록보트 DB</base.Title></base.Body>
                    <base.Right/>
                </base.Header>
				<TextInput
					style={styles.searchInput}
					placeholder="선박명"
					onChangeText={ (name) => this.setState({ name }) }
				/>
				<TextInput
					style={styles.searchInput}
					placeholder="IMO"
					onChangeText={ (imo) => this.setState({ imo }) }
				/>
				<TextInput
					style={styles.searchInput}
					placeholder="CALSIGN"
					onChangeText={ (calsign) => this.setState({ calsign }) }
				/>
				<TextInput
					style={styles.searchInput}
					placeholder="MMSI"
					onChangeText={ (mmsi) => this.setState({ mmsi }) }
				/>
				<TextInput
					style={styles.searchInput}
					placeholder="VESSEL TYPE"
					onChangeText={ (vessel_type) => this.setState({ vessel_type }) }
				/>
				<TextInput
					style={styles.searchInput}
					placeholder="BUILD YEAR"
					onChangeText={ (build_year) => this.setState({ build_year }) }
				/>
				<TextInput
					style={styles.searchInput}
					placeholder="CURRENT FLAG"
					onChangeText={ (current_flag) => this.setState({current_flag}) }
				/>
                <TextInput
					style={styles.searchInput}
					placeholder="HOME PORT"
					onChangeText={ (home_port) => this.setState({home_port}) }
				/>
                <TouchableHighlight
                        onPress={this.postBoatData}
                        style={styles.btn}>
                        <Text style={styles.header_title}>검색</Text>
                </TouchableHighlight>
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
        flex: 1,
	},
    btn: {
        backgroundColor: '#006EEE',
        width: '100%',
        height: '10%',
        borderRadius: 4,
        alignItems: 'center',
        borderWidth: 1,
        justifyContent: 'center',
        borderColor: '#FFFFFF'
    }
});
