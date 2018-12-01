import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import SampleJSON from './__sampleJSON.json'

import * as DigitalCommons from 'digital-commons-ui-components'

// import url from 'digital-commons-ui-styleguide/dist/svg/icon/sprite__icon.svg'

import { CarouselJSON } from './sampleData';

/*const Icon = (props) => (
	<svg className={ `ui__icon icon__svg icon--${props.name}` }>
		<use xlinkHref={ `${url}#icon--${props.name}` } />
	</svg>
);*/

const el = document.getElementById('dataset');

if (el && el.getAttribute('data-options')) {
	const jsonItem = JSON.parse(unescape(el.getAttribute('data-options')));

		ReactDOM.render(
			<App aemData={SampleJSON} componentType='dataset' />,
			document.getElementById('dataset'));
}

