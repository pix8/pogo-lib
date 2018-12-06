/* eslint-disable */

import React from 'react'
import ReactDOM from 'react-dom'

import * as UI from '@pix8/pogo-example-module'


let test = document.querySelectorAll('logo');

if(test.length) {
	test.forEach((el, i, collection) => {
		ReactDOM.render(<UI.ReactLogo></UI.ReactLogo>, el);
	});
}
