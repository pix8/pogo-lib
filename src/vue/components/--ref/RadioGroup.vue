<template lang="pug">
	.form__control.control__radio
		//- DEVNOTE you can not use Vue directives (props, events, is etc..) with slots(if the slot is a placeholder for a Vue Component)
		slot

		p.ui__cta: a(href="#" @click.prevent="clickHandler" v-if="isRender") Edit

	//-
		.result
			p Radio group name = {{ name }}
			p Radio button selected = {{ selectedValue }}
</template>

<script>
import Vue from 'vue'
import _ from 'lodash'

import Radio from './Radio'


Vue.component('radio', Radio)

//console.log("-- VUE::RadioGroup(COMPONENT) initialised -- ");
/*********************************************************************************************/
export default {
	name: 'radioGroup',

	created() {
		this.$on('change', this.radioGroupChangeHandler);
	},

	mounted() {},

	components: {'radio': Radio},

	props: ['name', 'preSelected'],

	data() {
		return {
			radios: [],
			selectedValue: null
		}
	},

	computed: {
		isRender() {
			return this.selectedValue !== null;
		}
	},

	watch: {},

	methods: {
		radioGroupChangeHandler(radio) {
			//DEVNOTE: this is were an events bus might come in handy
			console.log("radioGroupChangeHandler() ", this)

            this.selectedValue = radio.data;
			
			let index = _.indexOf(this.radios, radio);

			for(var i = this.radios.length; i--;) {
			 	this.radios[i].isSelected = (index == i);
			}

			this.$parent.$parent.$emit('complete', radio)
		},

		clickHandler() {
			this.selectedValue = null;
		}
	}
}
</script>

<style lang="scss" scoped>
.ui__cta {
	font-size: 1.3rem;
	float: left;
}
</style>
