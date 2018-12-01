<!-- DO NOT ASSIGN/DECLARE A TEMPLATE - that way the child component can get parsed and instantiated independently and it's innerhtml transcluded to a slot; will break slots otherwise which don't operate on root component -->

<!-- <template lang="pug">
.ui__collapsible
	UiPane(heading="Foo")
		p Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
	UiPane(heading="Bar")
		p Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.
	
	//-DEVNOTE: you can't have a slot in the root element/component as vue will not grab the enclosed nodes(dunno why) but the function isn't called and this.$slots will be undefined on the root component
	//-https://stackoverflow.com/questions/49046697/vue-root-element-content-and-content-distribution-slots
	//-slot
</template> -->


<script>
import _ from 'lodash'
import Pane from '../Pane.vue'


/*********************************************************************************************/


export default {
	//el: 'ui-collapsible',
	
	name: 'UiCollapsible',

	components: { UiPane: Pane },

	props: {},

	data() {

		return {
			panes: []
		}
	},

	computed: {},

	methods: {
		onTriggerHandler(component, event) {
			console.log("collapsible hi", component);

			var index = this.$children.indexOf(component);
			
			//Define COLLAPSIBLE specific behaviour --> CORE-UI
			//METHOD 2 - define collapsible specific behaviour
			this.$children[index].isActive = !this.$children[index].isActive;
		}
	},

	//LIFECYCLE HOOKS
	beforeCreate() {},
	created() {
		this.$on('trigger', this.onTriggerHandler);
	},

	beforeMount() {},
	mounted() {},

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
	[ui-collapsible],
	ui-collapsible,
	.ui__collapsible {
		overflow: hidden; //clearfix

		background-color: rgb(167,197,93);
		margin: 20px 0;
	}
</style>
