<!-- DO NOT ASSIGN/DECLARE A TEMPLATE - that way the child component can get parsed and instantiated independently and it's innerhtml transcluded to a slot; will break slots otherwise which don't operate on root component -->

<!-- <template lang="pug">
.ui__accordion
	UiPane(heading="Foo")
		p Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
	UiPane(heading="Bar")
		p Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.

	//-DEVNOTE: you can't have a slot in the root element/component as vue will not grab the enclosed nodes(dunno why) but the function isn't called and this.$slots will be undefined on the root component
	//-https://stackoverflow.com/questions/49046697/vue-root-element-content-and-content-distribution-slots
	slot
</template> -->


<script>
import _ from 'lodash'
import Pane from '../Pane.vue'


/*********************************************************************************************/


export default {
	//el: 'ui-accordion',
	
	name: 'UiAccordion',

	components: { UiPane: Pane },

	props: {},

	data() {

		return {
			panes: [],

			active: false
		}
	},

	//DEVNOTE: research
	//https://vuejs.org/v2/guide/components-edge-cases.html#Dependency-Injection
	/*provide() {

		return {
			panes: this.$children //this.panes
		}
	},*/

	computed: {},

	methods: {
		onTriggerHandler(component, event) {
			console.log("accordion hi", component);

			var index = this.$children.indexOf(component);
			
			//Define ACCCORDION specific behaviour --> CORE-UI
			//DEVNOTE: this should be modified as a computed function(they both should be) - only the current pane should be active. --> see vue tabs example
			//METHOD 1
			for(var i = this.$children.length; i--;) {
				this.$children[i].isActive = (index == i);
			}

			//METHOD 2
			/*
			console.log("hi accordion", this.$children, " :: ", component);
			console.log(this.$children.indexOf(component));

			//set via reactivity as opposed to looping through each component and flipping the boolean
			this.active = component;
			*/
		}
	},


	//LIFECYCLE HOOKS
	beforeCreate() {},
	created() {
		//setup an eventsbus? - overheads as only really condoned for global use + when things aren't being constantly instantiated - memory leaks - would need correct management $off to garbage collect
		//emitting/boardcasting by passing UP the chain to parent - could arguably do this the other way round via $children or when collecting all the Panes into an array
		//DEVNOTE: research
		//https://vuejs.org/v2/guide/components-edge-cases.html#Programmatic-Event-Listeners
		this.$on('trigger', this.onTriggerHandler);

		//DEVNOTE: research
		//https://vuejs.org/v2/api/#vm-listeners
		//https://vuejs.org/v2/guide/components-custom-events.html#Binding-Native-Events-to-Components
		//this.$on(this.$listeners);
		//this.$children.$on(this.$listeners);
	},

	beforeMount() {
		//console.log("jb :3: ", this.el, " :: ", this.$el);
		//this.$el exists as the original nodes and could be deep cloned like i would have to do for react
		//test = this.$el.cloneNode(true);
	},
	mounted() {
		//console.log("jb :4: ", this.el, " :: ", this.$el);
		//this.$el.appendChild(test);
		//this won't work as it's missed the vital init lifecycle steps - however can we force it through with a call to render?
	},

	beforeUpdate() {},
	updated() {},

	activated() {},
	deactivated() {},
	
	beforeDestroy() {
		this.$off('trigger', this.onTriggerHandler);
	},
	destroyed(){}
}
</script>


<style lang="scss" scoped>
	[ui-accordion],
	ui-accordion,
	.ui__accordion {
		overflow: hidden; //clearfix

		background-color: rgb(167,197,93);
		margin: 20px 0;
	}
</style>
