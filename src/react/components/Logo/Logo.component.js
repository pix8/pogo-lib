import React, { Component } from 'react'
import PropTypes from 'prop-types'

import path from './svg/logo__react.svg'

// import {
// 	StyledLogo
// } from './Logo.styles'


export default class Logo extends Component {
	
	static propTypes = {}

	render() {
		return (
			<img className='logo__react grid__logo' src="./svg/logo__react.svg" />
		)
	}
}
