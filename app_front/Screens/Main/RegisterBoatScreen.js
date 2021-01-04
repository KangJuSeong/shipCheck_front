import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, StatusBar, TouchableHighlight, AsyncStorage, Image, TextInput, ScrollView} from 'react-native';
import { Container, Content, Spinner } from 'native-base';
import * as base from 'native-base';
import {registNormalRequest, registWastedRequest} from '../../utils/dataRequest'
import {getToken} from '../../utils/getToken';
import * as ImageManipulator from 'expo-image-manipulator';
import DropDownPicker from 'react-native-dropdown-picker';
import CustomInput from '../../Components/CustomInput';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';


const BUTTONS = ["Camera", "Photo", "Cancel"]
export default class RegisterBoatScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
			id: '',
			name: '',
			imo: '',
			calsign: '',
			mmsi: '',
			vessel_type: '',
			build_year: '',
			current_flag: '',
			home_port: '',
            latitude: '',
            longitude: '',
            title: '',
            detail: '',
            hand: 'Normal',
            uri: '',
            base64: '',
		}
        this.pickImage = this.pickImage.bind(this)
        this.pickCamera = this.pickCamera.bind(this)
        this.requestRegistBoat = this.requestRegistBoat.bind(this)
        this.getCurrentLocation = this.getCurrentLocation.bind(this)
    }
    
    async pickImage() {
        await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        }).then((result) => {
            this.setState({uri : result.uri})
            ImageManipulator.manipulateAsync(
                result.localUri || result.uri,
                [{resize: {width: 50, height:50}}],
                { base64: true, format: ImageManipulator.SaveFormat.JPEG }
                ).then((result) => {
                    this.setState({base64 : result.base64})
            })
        })
    }
    
    async pickCamera() {
        if(!ImagePicker.getCameraPermissionsAsync()) {
            ImagePicker.requestCameraPermissionsAsync()
        }
        await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        }).then((result) => {
            this.setState({uri : result.uri})
            ImageManipulator.manipulateAsync(
                result.localUri || result.uri,
                [{resize: {width: 100, height: 100}}],
                { base64: true, format: ImageManipulator.SaveFormat.JPEG }
                ).then((result) => {
                    this.setState({base64 : result.base64})
            })
        })
    }
    
    requestRegistBoat(flag) {
        getToken().then((token) => {
            if(flag == 'Normal') {
                registNormalRequest(token, this.state.name, this.state.imo, this.state.calsign, this.state.mmsi, this.state.vessel_type, this.state.build_year, this.state.current_flag, this.state.home_port, this.state.base64).then((response) => {
                    if(response.status == 200) {
                        this.props.navigation.goBack()
                    }
                })
            }
            else {
                registWastedRequest(token, this.state.latitude, this.state.longitude, this.state.detail, this.state.title, this.state.base64).then((response) => {
                    if(response.status == 200) {
                        this.props.navigation.goBack()
                    }
                })
                
            }
        })
    }
    
    async getCurrentLocation() {
        try {
			const response = await Location.requestPermissionsAsync();
			const location = await Location.getCurrentPositionAsync();
			await this.setState({latitude: location.coords['latitude'], longitude: location.coords['longitude']})
		} catch (error) {
		  Alert.alert("Can't find you.", "Please Try Again!")
		}
    }
    
  	render() {
        if(this.state.hand == 'Normal') {
                return(
                    <base.Container>
                        <base.Header style={styles.header}>
                            <base.Left>
                                <base.Button 
                                    style = {styles.header}
                                    onPress={()=>this.props.navigation.goBack()}>
                                    <Image source={require('/workspace/shipCheck_front/app_front/assets/icons/back.png')}/>
                                </base.Button>
                            </base.Left>
                            <base.Body>
                                <base.Title style={styles.header_title}>선박등록</base.Title>
                            </base.Body>
                            <base.Right/>
                        </base.Header>
                        <View style={{ height: '30%', width: '100%', borderRadius: 10, borderWidth: 1, borderColor: 'black', alignItems:"center", justifyContent:'center',}}>
                            <Image
                                style={{ resizeMode:'contain', width:"100%", height: "90%"}}
                                source={{uri : this.state.uri}}/>
                            <base.Button
                                style={styles.add_btn}
                                onPress={() => {
                                    base.ActionSheet.show({
                                        options: BUTTONS,
                                        cancelButtonIndex: 2,
                                        title: "Selected"},
                                        buttonIndex => {buttonIndex==0 ? this.pickCamera():this.pickImage()})}}>
                                <Image source={require('/workspace/shipCheck_front/app_front/assets/icons/_add.png')}/>
                            </base.Button>
					    </View>
                        <DropDownPicker
                            items={[
                                {label: '일반 선박', value: 'Normal'},
                                {label: '유기,폐 선박', value: 'Wasted'}]}
                            defaultValue='Normal'
                            containerStyle={{height: 40}}
                            itemStyle={{justifyContent: 'flex-start'}}
                            onChangeItem={item => this.setState({hand: item.value})}/>
                        <ScrollView>
                            <View>
                                <CustomInput
                                    style={styles.input}
                                    label='NAME'
                                    onChangeText={(text)=>this.setState({name:text})}/>
                                <CustomInput
                                    label='IMO'
                                    onChangeText={(text)=>this.setState({imo:text})}/>
                                <CustomInput
                                    label='CALSIGN'
                                    onChangeText={(text)=>this.setState({calsign:text})}/>
                                <CustomInput
                                    label='MMSI'
                                    onChangeText={(text)=>this.setState({mmsi:text})}/>
                                <CustomInput
                                    label='VESSEL TYPE'
                                    onChangeText={(text)=>this.setState({vessel_type:text})}/>
                                <CustomInput
                                    label='BUILD YEAR'
                                    onChangeText={(text)=>this.setState({build_year:text})}/>
                                <CustomInput
                                    label='CURRENT FLAG'
                                    onChangeText={(text)=>this.setState({current_flag:text})}/>
                                <CustomInput
                                    label='HOME PORT'
                                    onChangeText={(text)=>this.setState({home_port:text})}/>
                                <View style={{justifyContent:'center', alignItems:'center', marginTop:'5%'}}>
                                    <TouchableHighlight style={styles.btn}
                                        onPress={() => this.requestRegistBoat('Normal')}>
                                        <Text>등록</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </ScrollView>
                    </base.Container>
            )
        }
        else {
            return(
                <base.Container>
                    <base.Header style={styles.header}>
                        <base.Left>
                            <base.Button 
                                style = {styles.header}
                                onPress={()=>this.props.navigation.goBack()}>
                                <Image source={require('/workspace/shipCheck_front/app_front/assets/icons/back.png')}/>
                            </base.Button>
                        </base.Left>
                        <base.Body>
                            <base.Title style={styles.header_title}>선박등록</base.Title>
                        </base.Body>
                        <base.Right/>
                    </base.Header>
                    <View style={{ height: '30%', width: '100%', borderRadius: 10, borderWidth: 1, borderColor: 'black', alignItems: "center", justifyContent: 'center',}}>
                        <Image
                            resizeMode='contain'
                            style={{ resizeMode:'contain', width:"100%", height: "90%"}}
                            source={{uri : this.state.uri}}/>
                        <base.Button
                            style={styles.add_btn}
                            onPress={() => {
                                base.ActionSheet.show({
                                    options: BUTTONS,
                                    cancelButtonIndex: 2,
                                    title: "Selected"},
                                    buttonIndex => {buttonIndex==0 ? this.pickCamera():this.pickImage()})}}>
                            <Image source={require('/workspace/shipCheck_front/app_front/assets/icons/_add.png')}/>
                        </base.Button>
                    </View>
                    <DropDownPicker
                        items={[
                            {label: '일반 선박', value: 'Normal'},
                            {label: '유기,폐 선박', value: 'Wasted'}]}
                        defaultValue='Normal'
                        containerStyle={{height: 40}}
                        itemStyle={{justifyContent: 'flex-start'}}
                        onChangeItem={item => this.setState({hand: item.value})}/>
                    <ScrollView>
                        <View>
                            <CustomInput
                                label='TITLE'
                                onChangeText={(text)=>this.setState({title:text})}/>
                            <CustomInput
                                label='DETAIL'
                                onChangeText={(text)=>this.setState({detail:text})}/>
                            <View style={{justifyContent:'center', alignItems:'center', marginTop:'5%'}}>
                                <TouchableHighlight style={styles.btn}
                                    onPress={this.getCurrentLocation}>
                                    <Text>현재 위치 가져오기</Text>
                                </TouchableHighlight>
                                <Text>{this.state.latitude}</Text>
                                <Text>{this.state.longitude}</Text>
                                <TouchableHighlight style={styles.btn}
                                    onPress={()=>this.requestRegistBoat('Wasted')}>
                                    <Text>등록</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </ScrollView>
                </base.Container>
            )
        }
  	}
}

const styles = StyleSheet.create({
	btn:{
        backgroundColor: '#006EEE',
        width: '90%',
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        borderWidth: 1,
        justifyContent: 'center',
        borderColor: '#FFFFFF'
	},
    add_btn: {
        position: 'absolute',
        borderRadius: 35,
        borderWidth: 2,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent:'center',
        right: '5%',
        bottom: '5%'
    },
    header: {
        backgroundColor: '#006EEE',  
    },
    header_title: {
        color: 'white',
        fontWeight: 'bold'
    },
});