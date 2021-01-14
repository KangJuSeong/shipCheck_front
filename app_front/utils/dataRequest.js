import axios from 'axios'
import {AsyncStorage} from 'react-native'
import {request} from './request'

export const boatRequest = (token, name, imo, calsign, mmsi, vessel_type, build_year, current_flag, home_port) => 
    request.post('/Boats/boat/searching/',
		{
			name: name,
			imo: imo,
			calsign: calsign,
			mmsi: mmsi,
			vessel_type: vessel_type,
			build_year: build_year,
			current_flag: current_flag,
            home_port: home_port,
		},
        {
        headers: {
            'AUTHORIZATION': 'jwt ' + token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })

export const WastedBoatRequest = (token) => 
    request.post('/Boats/boat/wastedboats/', {},
        {
        headers: {
            'AUTHORIZATION': 'jwt ' + token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })

export const WastedBoatDetailRequest = (token, dataid) => 
    request.post('/Boats/boat/detailwastedboat/',
		{
			id: dataid,
		},
        {
        headers: {
            'AUTHORIZATION': 'jwt ' + token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })

export const boatDetailRequest = (token, id) => 
    request.post('/Boats/boat/detail/',
        {
            id: id
        },
        {
        headers: {
            'AUTHORIZATION': 'jwt ' + token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })

export const registNormalRequest = (token, name, imo, calsign, mmsi, vessel_type, build_year, current_flag, home_port, image_data) => 
    request.post('/Boats/boat/regist/',
        {
            flag: 'Normal',
            name: name,
            imo: imo,
            calsign: calsign,
            mmsi: mmsi,
            vessel_type: vessel_type,
            build_year: build_year,
            current_flag: current_flag,
            home_port: home_port,
            image_data: image_data
        },
        {
        headers: {
            'AUTHORIZATION': 'jwt ' + token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })

export const registWastedRequest = (token, latitude, longitude, detail, title, image_data) => 
    request.post('/Boats/boat/regist/',
        {
            flag: 'Wasted',
            latitude: latitude,
            longitude: longitude,
            detail: detail,
            title: title,
            image_data: image_data
        },
        {
        headers: {
            'AUTHORIZATION': 'jwt ' + token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })

export const predictBoat = (token, image_data) => 
    request.post('/Boats/boat/predict/',
        {
            image_data: image_data
        },
        {
            headers: {
                'AUTHORIZATION': 'jwt ' + token,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }
    )


export const test = (token) => 
    request.post('/Boats/test/', 
        {
        },
        {
            headers: {
                'AUTHORIZATION': 'jwt ' + token,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }
    )