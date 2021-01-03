import * as base from 'native-base'
import React, { Component } from 'react';


export default class CustomInput extends Component {
	constructor(props){
    	super(props);
	}
	render() {
		return(
            <base.Form>
                <base.Item floatingLabel>
                    <base.Label>{this.props.label}</base.Label>
                    <base.Input {...this.props}/>
                </base.Item>
            </base.Form>
        )
	}
}