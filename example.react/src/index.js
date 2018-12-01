/* eslint-disable */

import React from 'react'
import ReactDOM from 'react-dom'

import * as UI from '@pix8/ui-react'


let test = document.querySelectorAll('carousel');

if(test.length) {
	test.forEach((el, i, collection) => {
		ReactDOM.render(<UI.Carousel slides={ [1, 2, 3, 4] }></UI.Carousel>, el);
	});
}

test = document.querySelectorAll('collapsible');

if(test.length) {
	test.forEach((el, i, collection) => {
		ReactDOM.render(<UI.Collapsible slides={ [1, 2, 3, 4] }></UI.Collapsible>, el);
	});
}

test = document.querySelectorAll('accordion');

if(test.length) {
	test.forEach((el, i, collection) => {
		ReactDOM.render(<UI.Accordion slides={ [1, 2, 3, 4] }></UI.Accordion>, el);
	});
}

test = document.querySelectorAll('tab');

if(test.length) {
	test.forEach((el, i, collection) => {
		ReactDOM.render(<UI.Tab slides={ [1, 2, 3, 4] }></UI.Tab>, el);
	});
}
