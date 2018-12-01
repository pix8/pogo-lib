<template lang="pug">
.ui__accordion
	slot
</template>


<script>
import Vue from 'vue'
import pane from './Pane'

//console.log("-- accordion component initialised --");

/*********************************************************************************************/

//register globally - hotfix to the pane issue
//Vue warn]: Unknown custom element: <pane> - did you register the component correctly? For recursive components, make sure to provide the "name" option. (found in root instance)
Vue.component('pane', pane)

export default {
	name: 'accordion',

	components: { pane },

	props: ['heading'],

	data() {
		return {
			type: "accordion",
			panes: []
		}
	},

	computed: {},

	methods: {}
}
</script>


<style lang="scss" scoped>
</style>
