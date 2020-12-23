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
			latitude: '0',
			longitude: '0',
			wastedBoatData: [],
		}
		this.getLocation = this.getLocation(this);
		this.requestBoatData = this.requestBoatData(this);
	}
	componentWillMount() {
	}
	getLocation = async () => {
		try {
			const response = await Location.requestPermissionsAsync();
			const location = await Location.getCurrentPositionAsync();
			this.setState({latitude: location.coords['latitude'], longitude: location.coords['longitude']})
		} catch (error) {
		  Alert.alert("Can't find you.", "Please Try Again!")
		}
	}
	requestBoatData() {
		getToken().then((token) => {
            WastedBoatRequest(token).then((response) => {
            if(response.status == 200){
				console.log('success')
				console.log(response.data.data[0].latitude)
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
							onPress={()=>this.props.navigation.openDrawer()}
				/>)
			})
		}
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
								latitude: this.state.latitude,
								longitude: this.state.longitude,
								latitudeDelta: 0.0922,
								longitudeDelta: 0.0421,
							}}
						>
						{ mapToComponent(this.state.wastedBoatData) }
					</MapView>
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