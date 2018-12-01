<template lang="pug">
	fieldset
		slot
</template>

<script>
import Vue from 'vue'
import _ from 'lodash'

import Field from './Field'


Vue.component('field', Field)

console.log("-- VUE::Fieldset(COMPONENT) initialised -- ");
/*********************************************************************************************/
//CONDITIONS
// 1) if a field is progressive then all subsequent sibling fields should be made not visible
	//this can only be reliably managed if all components are maintained in order in an array 

export default {
	name: 'fieldGroup',

	created() {
		this.$on('complete', this.fieldChangeHandler);
	},

	mounted() {},

	components: {},

	props: [],

	data() {
		return {
			fields: []
		}
	},

	computed: {
	},

	watch: {},

	methods: {
		fieldChangeHandler(control) {
			console.log("fieldChangeHandler() ", this.fields)
			//DEVNOTE: toggle next progresive field to render in array order
			//1. need to keep array for operation immutable and have copy for modification which we will later retain after operation is complete
			//1. remove first item in  the array

			for(let i = 0, l = this.fields.length, flag = false; i < l; i++) {
				console.log(i, " :: ", this.fields[i].progressive)
				if(this.fields[i].progressive){
					flag = true;
				}

				//keep iterating through(switching on) remaining items + remove from array until next true field is revealed. then break
			}
		}
	}
}
</script>

<style lang="scss" scoped>
</style>
