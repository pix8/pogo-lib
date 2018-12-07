/* eslint-disable */

import Vue from 'vue'

import * as UI from '@pix8/pogo-example-module'


let test = document.querySelectorAll('vuelogo');

if(test != undefined || null && test.length) {
	test.forEach((el, i, collection) => {
		new Vue(UI.VueLogo).$mount(el);
	})
}
