import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import IntroScreen from './Screens/IntroScreen';
import LostScreen from './Screens/LostScreen';
import MainScreen from './Screens/Main/MainScreen';
import RegisterBoatScreen from './Screens/Main/RegisterBoatScreen';
import SearchScreen from './Screens/Main/SearchScreen';
import AIScreen from './Screens/Main/AIScreen';
import DetailScreen from './Screens/Main/DetailScreen';
import ResultScreen from './Screens/Main/ResultScreen';
import WastedBoatScreen from './Screens/Main/WastedBoatScreen';
import WastedDetailScreen from './Screens/Main/WastedDetailScreen';
import InformationScreen from './Screens/Main/InformationScreen';
import LoginScreen from './Screens/User/LoginScreen';
import SignupScreen1 from './Screens/User/SignupScreen1';
import SignupScreen2 from './Screens/User/SignupScreen2';
import MainOptionScreen from './Screens/User/MainOptionScreen';
import test from './Screens/Main/test';
import { Root } from "native-base";


const MainStack = createStackNavigator(
	{
		Main:{
			screen: MainScreen,
			navigationOptions: { headerShown: false }			
		},
		Register:{
			screen: RegisterBoatScreen,
			navigationOptions: { headerShown: false }			
		},
		Search:{
			screen: SearchScreen,
			navigationOptions: { headerShown: false }
		},
		AI:{
			screen: AIScreen,
			navigationOptions: { headerShown: false }
		},
		Detail:{
			screen: DetailScreen,
			navigationOptions: { headerShown: false }
		},
        Lost:{
			screen: LostScreen,
			navigationOptions: { headerShown: false }
		},
		Result:{
			screen: ResultScreen,
			navigationOptions: { headerShown: false }
		},
		Wasted:{
			screen: WastedBoatScreen,
			navigationOptions: { headerShown: false }
		},
		Info:{
			screen: InformationScreen,
			navigationOptions: { headerShown: false }
		},
		
		test:{
			screen: test,
			navigationOptions: { headerShown: false }
		}
		
	},
	{ initialRouteName: 'Main' }
);

const Drawer = createDrawerNavigator(
    {
        Main: MainStack
    },
	{
  		drawerPosition: 'left',
  		contentComponent: MainOptionScreen,
    }
);

const UserStack = createStackNavigator(
	{
		Intro:{
			screen: IntroScreen,
			navigationOptions: { headerShown: false }
		},
		Login:{
			screen: LoginScreen,
			navigationOptions: { headerShown: false }
		},
		Signup1:{
			screen: SignupScreen1,
			navigationOptions: { headerShown: false }
		},
		Signup2:{
			screen: SignupScreen2,
			navigationOptions: { headerShown: false }
		},
        Drawer: {
            screen: Drawer,
            navigationOptions: { headerShown: false }
        },
	},
	{ initialRouteName: 'Login' }
);

const Route = createStackNavigator(
    {
        UserStack: {
			screen: UserStack,
			navigationOptions: { headerShown: false }			
		}
    }
)

const Container = createAppContainer(Route)

export default class App extends React.Component {
  render() {
    return (
        <Root>
            <Container/>
        </Root>
    )
  }
}