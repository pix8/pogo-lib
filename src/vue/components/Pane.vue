<!-- Pane.vue is only concerned with managing IT'S state and loading in content/data - it should have no awareness or dependency on anything external -->

<template lang="pug">
//-.ui__pane(:class='[{active: $parent.active == isActiveNew}]') //- DEVNOTE this should be bound to something on the parent and use v-if or :is - remember i will encapsulate accordion/concertina collapsible header structure into it's own component but could be problematic
.ui__pane(:class='[{active: isActive}]')
	//- v-if and v-else is best practise to use a key, :key="getType" but template will get discarded and key needs a real element for vue to keep track
	template(v-if='getType === "tab"')
		//- a reference to the active component instance can be used to toggle that component(can be name to registered component or component's options object)
		//- https://jsfiddle.net/chrisvfritz/b2qj69o1/
		//- component(:is="currentTab.component")
		transition
			.ui__animate(v-if='isActive')
				slot

	template(v-else)
		//-DEVNOTE: would like this to be it's own component that should always have a reference/pointer to it's pane - coupled.
		.collapsible__header
			p
				a(href='#', :title='getHeading', @click.prevent='clickHandler')
					i(v-if='iconClass', :class="iconClass")
					span(v-html="heading")
		.collapsible__pane
			transition
				.ui__animate(v-if='isActive')
					slot
					//- slots will compile in the parent scope(root) as that is where the content exists
</template>

<script>

import _ from 'lodash'


/*********************************************************************************************/

export default {
	name: 'UiPane',

	props: {
		heading: {
			type: [String, Number, Date, Boolean],
			required: true
		},
		iconClass: String,
		active: Boolean
	},

	//DEVNOTE: research
	//https://vuejs.org/v2/guide/components-edge-cases.html#Dependency-Injection
	//inject: ['panes'],

	data() {
		//DEVNOTE: considered bad practise to directly reference parent's data in child scope
		//https://vuejs.org/v2/guide/components.html#Composing-Components

		return {
			isActive: this.active, //!this.$parent.panes.length,
			isActiveNew: '' //store pane instance
		}
	},

	computed: {
		getType() {
			return this.$parent.type;
		},

		getHeading() {
			return this.heading;
		}
	},

	methods: {
		clickHandler(event) {
			this.$parent.$emit("trigger", this, event);
			
			return this.isActiveNew = this;
		}
	},

	//LIFECYCLE HOOKS
	beforeCreate() {},
	created() {},

	beforeMount() {},
	mounted() {
		//console.log("jb :: ", this.$parent);
	},

	beforeUpdate() {},
	updated() {},
	
	beforeDestroy() {},
	destroyed(){}
}
</script>

<style lang="scss" scoped>
	.ui__pane {
		&:first-child {
			.collapsible__header {
				border-top: 0;
			}
		}

		&.active {
			.collapsible__header {
				&:after {
					transform: rotate(-45deg);
				}
			}

			.collapsible__pane {
				display: block;
			}

			a {
				background-color: rgb(167,197,93);
			}
		}
	}

	.collapsible__header,
	.collapsible__pane {
		display: block;
		margin: 0;
	}

	.collapsible__header {
		color: #FFF;
		position: relative;
		border-top: 4px solid #FFF;

		&:after {
			content: "\00A0";
			position: absolute;
			top: 15px;
			right: 30px;
			width: 15px;
			height: 15px;
			border-top: 4px solid #FFF;
			border-right: 4px solid #FFF;

			transform: rotate(135deg);
			transition: transform 500ms;
		}

		&.active {
			&:after {
				transform: rotate(-45deg);
			}

			& + dd,
			& + .collapsible__pane {
				display: block;
			}
		}

		p {
			font-weight: 700;
			margin: 0;

			a {
				background-color: #888;
				text-decoration: none;
			}
		}

		a {
			color: #FFF;
			padding: 12px (20px + 15 + 30) 13px 20px;
			display: block;

			&:hover {
				background-color: rgb(167,197,93) !important;
			}
		}
	}

	.collapsible__pane {
		overflow: hidden; /*clearfix + margin-collapse*/
		background-color: #FFF;
		margin: 0 4px 4px;
		padding: 0 20px;
		display: none;

		//DEVNOTE: compensate for bootstrap
		padding: 20px 20px 10px;
	}
</style>
