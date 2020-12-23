import axios from 'axios'
import {AsyncStorage} from 'react-native'
import {request} from './request'


export const loginRequest = (serviceNum, password, device_id) => 
    request.post('/Accounts/login/',{
        serviceNum: serviceNum,
        password: password,
		device_id: device_id,
        })

export const logoutRequest = (token) => 
    request.post('/Accounts/logout/',{},
        {
        headers: {
            'AUTHORIZATION': 'jwt ' + token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })

export const signupRequest = (sn, pw, nm, rk, pst, bl, ph, di) => 
	request.post('/Accounts/signup/',{
        	serviceNum : sn,
            password : pw,
			name : nm,
			rank : rk,
			position : pst,
			belong : bl,
			phone : ph,
			device_id : di,
	})
