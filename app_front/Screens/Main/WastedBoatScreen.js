import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, StatusBar, ScrollView, Alert, TouchableHighlight, Linking } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import {WastedBoatRequest} from '../../utils/dataRequest'
import {getToken} from '../../utils/getToken'
import * as base from 'native-base'


export default class WastedBoatScreen extends Component {
	constructor(props){
        super(props)
		this.state= {
			latitude: '',
			longitude: '',
			wastedBoatData: [],
		}
		this.getLocation = this.getLocation.bind(this);
		this.requestBoatData = this.requestBoatData(this);
	}
	componentDidMount() {
        this.getLocation()
	}
	getLocation = async () => {
		try {
			const response = await Location.requestPermissionsAsync();
			const location = await Location.getCurrentPositionAsync();
			await this.setState({latitude: location.coords['latitude'], longitude: location.coords['longitude']})
		} catch (error) {
		  Alert.alert("Can't find you.", "Please Try Again!")
		}
	}
	requestBoatData() {
		getToken().then((token) => {
            WastedBoatRequest(token).then((response) => {
            if(response.status == 200){
				console.log('success')
				this.setState({wastedBoatData: this.state.wastedBoatData.concat(response.data.data)})
            }
            else{
                console.log('fail')
            }
			})
        })
	}
  	render() {
		const mapToComponent = (wastedBoatData) =>{
			return wastedBoatData.map((wastedBoat) =>{
				return (<Marker
							coordinate={{
							latitude: parseFloat(wastedBoat.latitude),
							longitude: parseFloat(wastedBoat.longitude),
							}}
							title={wastedBoat.title}
				/>)
			})
		}
        if(this.state.latitude == ''){
            return(
                <View style={{alignItems:'center', justifyContent: 'center', flex: 1}}>
                    <Text>위치 가져오는중</Text>
                </View>
            )
        }
        else{
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
                        <base.Body>
                            <base.Title style={styles.header_title}>유기,폐선박DB</base.Title>
                        </base.Body>
                        <base.Right>
                        </base.Right>
                    </base.Header>
                    <View style={styles.container}>
                        <MapView
                            provider={PROVIDER_GOOGLE}
                            style={{flex: 1}}
                            initialRegion={{
                                    latitude: parseFloat(this.state.latitude),
                                    longitude: parseFloat(this.state.longitude),
                                    latitudeDelta: 1.0,
                                    longitudeDelta: 1.0,
                                }}
                            >
                            { mapToComponent(this.state.wastedBoatData) }
                        </MapView>
                    </View>
                </base.Container>
            );    
        }
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