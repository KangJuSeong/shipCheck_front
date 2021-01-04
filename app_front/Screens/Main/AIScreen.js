import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, StatusBar, Image} from 'react-native';
import * as base from 'native-base'
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import {getToken} from '../../utils/getToken';
import {predictBoat} from '../../utils/dataRequest'


export default class AIScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            uri : '',
            base64 : '',
            data: []
        }
        this.camera = this.camera.bind(this)
        this.predictRequest = this.predictRequest.bind(this)
    }
    
    async camera() {
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
                [{resize: {width: 50, height:50}}],
                { base64: true, format: ImageManipulator.SaveFormat.JPEG }
                ).then((result) => {
                    this.setState({base64 : result.base64})
            })
        })
    }
    
    // async predictRequest() {
    //     getToken().then((token) => {
    //         predictBoat(token, this.state.base64).then((response)=>{
    //             if(response.status == 200) {
    //                 console.log('success')
    //             }
    //         }).catch((error) => {
    //             console.log(error)
    //         })
    //     })
    // }
    async predictRequest() {
        const token = await getToken()
        await predictBoat(token, this.state.base64).then((response)=>{
                if(response.status==200){
                    console.log('success')
                }
            })
    }
    
    
    
  	render() {
		const {navigate} = this.props.navigation;
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
                    <base.Body>
                        <base.Title style={styles.header_title}>AI검색</base.Title>
                    </base.Body>
                    <base.Right>
                    </base.Right>
                </base.Header>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <Image
                        style={styles.img}
                        source={{uri:this.state.uri}}
                        resizeMode='contain'
                        />
                    <TouchableHighlight
                        style={styles.btn}
                        onPress={this.camera}>
                        <Text>선박 사진 촬영</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.btn}
                        onPress={this.predictRequest}>
                        <Text>선박 인식하기</Text>
                    </TouchableHighlight>
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
    btn: {
        marginTop: '12%',
        backgroundColor: '#006EEE',
        width: '90%',
        height: '10%',
        borderRadius: 10,
        alignItems: 'center',
        borderWidth: 1,
        justifyContent: 'center',
        borderColor: '#FFFFFF'
    },
    img: {
        marginTop: '10%',
        width: '90%',
        height: 300,
        borderRadius: 10,
        borderWidth: 2,
    }
});