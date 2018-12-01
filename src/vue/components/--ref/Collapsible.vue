<template lang="pug">
.ui__collapsible
	slot
</template>


<script>
import Vue from 'vue'
import pane from './Pane'

//console.log("-- collapsible component initialised --");

/*********************************************************************************************/

//register globally - hotfix to the pane issue
Vue.component('pane', pane)

export default {
	name: 'collapsible',

	components: { pane },

	props: ['heading', 'iconClass'],

	data() {
		return {
			type: "collapsible",
			panes: []
		}
	},

	computed: {},

	methods: {}
}
</script>


<style lang="scss" scoped>
</style>
