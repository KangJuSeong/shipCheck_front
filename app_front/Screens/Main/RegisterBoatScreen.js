import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, StatusBar, TouchableHighlight, AsyncStorage, Image, TextInput, ScrollView} from 'react-native';
import { Container, Content, Spinner } from 'native-base';
import * as base from 'native-base'
import {InfoRequest} from '../../utils/dataRequest'
import {getToken} from '../../utils/getToken'
import * as ImageManipulator from 'expo-image-manipulator';
import DropDownPicker from 'react-native-dropdown-picker';
import CustomInput from '../../Components/CustomInput';
import * as ImagePicker from 'expo-image-picker';

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
    }
    
    async pickImage() {
        await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        }).then((result) => {
            this.setState({uri : result.uri})
        })
    }
    
    async pickCamera() {
        if(!ImagePicker.getCameraPermissionsAsync()) {
            ImagePicker.requestCameraPermissionsAsync()
        }
        await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        }).then((result) => {
            this.setState({uri : result.uri})
        })
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
                                    <base.Icon name='ios-add'/>
                                </base.Button>
                            </base.Left>
                            <base.Body>
                                <base.Title style={styles.header_title}>선박등록</base.Title>
                            </base.Body>
                            <base.Right/>
                        </base.Header>
                        <View style={{ height: '30%', width: '100%', borderRadius: 10, borderWidth: 1, borderColor: 'black', alignItems:"center", justifyContent:'center',}}>
                            <Image
                                resizeMode='contain'
                                style={{ resizeMode:'contain', width:"100%", height: "90%"}}
                                source={{uri : this.state.uri}}/>
                            <base.Button
                                style={styles.add_btn}
                                onPress={() => {
                                    base.ActionSheet.show({
                                        options: BUTTONS,
                                        cancelButtonIndex: CANCEL_INDEX,
                                        destructiveButtonIndex: DESTRUCTIVE_INDEX,
                                        title: "Testing ActionSheet"},
                                        buttonIndex => { this.setState({ clicked: BUTTONS[buttonIndex] })})}}>
                                <Text>+</Text>
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
                            <View style={{justifyContent:'center'}}>
                                <CustomInput
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
                                <TouchableHighlight style={styles.btn}
                                    onPress={()=>this.props.navigation.goBack()}>
                                    <Text>등록</Text>
                                </TouchableHighlight>
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
                                <base.Icon name='ios-add'/>
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
                                source={require('/workspace/shipCheck_front/app_front/assets/img/boatexample.jpg')}/>
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
                            <TouchableHighlight style={styles.btn}
                                onPress={()=>this.props.navigation.goBack()}>
                                <Text>등록</Text>
                            </TouchableHighlight>
                        </View>
                    </ScrollView>
                </base.Container>
            )
        }
  	}
}

const styles = StyleSheet.create({
	input:{
		margin: 5,
		width: '90%',
		height: "5%",
		fontSize: 25,
		borderColor: "gray",
		borderWidth: 1,
		borderRadius: 5,
		alignItems: "center",
		justifyContent: 'center',
	},
	inputTitle:{
		marginLeft: 5,
		fontSize: 15
	},
	btn:{
		margin: 5,
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
    }
});