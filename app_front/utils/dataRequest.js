import axios from 'axios'
import {AsyncStorage} from 'react-native'
import {request} from './request'

export const boatRequest = (token, title, price, reserve, product_status, manufacturer, brand, model_code) => 
    request.post('/Boats/boat/searching/',
		{
			title: title,
			price: price,
			reserve: reserve,
			product_status: product_status,
			manufacturer: manufacturer,
			brand: brand,
			model_code: model_code,
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

export const InfoRequest = (token) => 
    request.post('아직안짰어요 주성이 여드름마냥', {},
        {
        headers: {
            'AUTHORIZATION': 'jwt ' + token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })