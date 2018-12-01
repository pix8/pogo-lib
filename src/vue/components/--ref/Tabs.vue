<template lang="pug">
//- DEVNOTE: with the click binding existing at different levels this makes it's adoption as a universal active class switch problematic. consider nesting in another component
//- TODO: sanitize ambigous class names .collapsible__header, .collapsible__pane, .ui__pane etc..

.ui__tabs
	//-pre: code {{ $data }}

	.collapsible__header
		.ui__tab(v-for='(pane, index) in panes', :class='[{active: pane.isActive}]')
			//-p: a(href='#', @click.prevent='toggle(pane, index)') {{ pane.heading }} : {{ pane.isActive }}
			p
				a(href='#', @click.prevent='toggle(pane, index)')
					i.ui__icon.icon__svg.svg__file(style="margin-right: 15px;")
					| {{ pane.heading }}
	.collapsible__pane
		slot
</template>


<script>
import Vue from 'vue'
import pane from './Pane'

//register globally - hotfix to the pane issue
Vue.component('pane', pane)

//console.log("-- tabs component initialised --");

/*********************************************************************************************/

export default {
	name: 'tabs',

	components: { 'pane': pane },

	data() {
		this.foo = "data from parent";

		return {
			type: "tabs",
			panes: [],
			bar: "data from parent again"
		}
	},

	//TODO: set active child - default or user defined

	computed: {},

	methods: {
		toggle(pane, index) {
			var index = _.indexOf(this.panes, pane);

			for(var i = this.panes.length; i--;) {
				this.panes[i].isActive = (index == i);

				//if(this.type == "tabs") console.log("foobar :: ", this.panes[i]);
				//this.panes[i].setActive(true);
			}
		}
	}
}
</script>


<style lang="scss" scoped>

</style>
