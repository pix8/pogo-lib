<template lang="pug">
	//- child scope (component)
	div.ui__dropdown(:class="[{active: isActive}]")
		a(href="#", @click.prevent="toggle('masthead')", @blur="toggle('masthead')") 
			slot(name="id") Link {{ counter }}
		slot
			//- should this be a sub component to the dropdown component??
			ol.ui__dropdown-menu
				li: a(href="#") Link 1
				li: a(href="#") Link 2
				li: a(href="#") Link 3
				li: a(href="#") Link 4
			//- slots will compile in the parent scope(root) as that is where the content exists
</template>


<script>
//console.log("-- dropdown component initialised --");

/*********************************************************************************************/

// SCOPE= masthead > UI__DROPDOWN
//TODO: conditional on blur/focus toggling of dropdown as interactions within the dropdown will cause it to disappear
export default {
	name: 'dropdown',

	components: {},

	props: ['message'],

	data: function() {
		return {
			counter: 0,

			isActive: false,
			foo: this.message,
			bar: 'hear me now'
		}
	},

	computed: {
	},

	methods: {
		toggle: function(group) {
			//console.log("GROUP >> ", group);

			//for onblur need to abstract housed child elements
			//also inefficient as it is set up; provoked twice //potential to clash/break

			this.isActive = !this.isActive;

			var self = this;

			var index = _.indexOf(this.$parent.$children, this)
			this.$parent.$children.forEach(function(item, i, arr) {

				if(i !== index)
					item.isActive = false;
			});

			//this.counter += 1;
			this.$emit('toggle'); //broadcast custom event to listeners
		}
	}
}
</script>


<style lang="scss" scoped>

</style>
