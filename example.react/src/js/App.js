import React, { Component } from 'react'

// import 'digital-commons-ui-styleguide/dist/styles/commons.css'
import { AppTheme, AemWrapper } from 'digital-commons-ui-components'


export default class App extends Component {
	render () {
		const { aemData, componentType } = this.props

		return (
			<AppTheme>
				<AemWrapper
					aemData={aemData}
					componentType={componentType}
				/>
			</AppTheme>
		)
	}
}
