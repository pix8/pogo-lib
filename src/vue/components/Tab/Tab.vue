<template lang="pug">
.ui__tab
	//-pre: code {{ $data }}

	nav
		.collapsible__header(v-for='(pane, index) in panes', :class='[{active: pane.isActive}]')
			p
				a(href='#', @click.prevent='toggle(pane, index)')
					i(v-if='pane.iconClass', :class="pane.iconClass")
					//-| {{ pane.heading }}
					span(v-html="pane.heading")
	.collapsible__pane
		//-DEVNOTE: you can't have a slot in the root element/component as vue will not grab the enclosed nodes(dunno why) but the function isn't called and this.$slots will be undefined on the root component
		//-https://stackoverflow.com/questions/49046697/vue-root-element-content-and-content-distribution-slots
		slot
</template>

<script>
import _ from 'lodash'
import Pane from '../Pane.vue'


/*********************************************************************************************/

export default {
	name: 'UiTab',

	components: { UiPane: Pane },

	props: {},

	data() {

		return {
			type: "tab",
			panes: this.$children
		}
	},

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
	},

	//LIFECYCLE HOOKS
	beforeCreate() {},
	created() {},

	beforeMount() {},
	mounted() {},

	beforeUpdate() {},
	updated() {},
	
	beforeDestroy() {},
	destroyed(){}
}
</script>


<style lang="scss" scoped>
	.ui__tab {
		//@extend .clearfix;
		overflow: hidden; //clearfix

		background-color: rgb(167,197,93);

		margin: 20px 0;
	}

	nav,
	.collapsible__pane {
		margin: 0;

		&:first-child {
			display: table;
			width: 100%;
		}
	}
	
	.collapsible__header {
		background-color: #888;
		border-left: 1px solid #888;
		color: #FFF;
		position: relative;
		//display: table-column;
		display: table-cell;

		&:after {
			content: "\00A0";
			position: absolute;
			top: 13px;
			right: 30px;
			width: 15px;
			height: 15px;
			border-top: 4px solid #FFF;
			border-right: 4px solid #FFF;

			transform: rotate(135deg);
			transition: transform 500ms;
		}

		&:first-child {
			border-left: 0;
		}

		&.active {
			background-color: rgb(167,197,93);

			&:after {
				transform: rotate(-45deg);
			}

			& + .collapsible__pane,
			& + dd {
				//display: block;
			}
		}

		p {
			font-weight: 700;
			margin: 0;

			a {
				text-decoration: none;
			}
		}

		a {
			color: #FFF;
			display: block;
			padding: 10px (20px + 15 + 30) 10px 20px;
		}
	}

	.ui__pane {
		overflow: hidden; /*clearfix + margin-collapse*/
		//@include clearfix;
		background-color: #FFF;
		margin: 0 4px 4px;
		padding: 0 20px;
		display: none;

		//DEVNOTE: compensate for bootstrap
		padding: 20px 20px 10px;

		&.active {
			display: block;
		}
	}

	.ui__animate {
		transition: all 500ms;
	}

	.v-enter-active, .v-leave-active {
		transition: opacity 500ms;
	}
	.v-enter, .v-leave-active {
		opacity: 0
	}

	.v-move {
		transition: transform 1s;
	}
</style>
