<template lang="pug">
//-.ui__pane(:class='classObject')
.ui__pane(:class='[{active: isActive}]')
	template(v-if="getType === 'tabs'")
		transition
			.ui__animate(v-if="isActive")
				//- pre: code {{ $data }}

				slot

	template(v-else)
		.collapsible__header
			p
				a(href='#', :title='getHeading', @click.prevent='toggle')
					i(v-if='iconClass', :class="iconClass")
					span {{ heading }}
					//-: {{ isActive }}
		.collapsible__pane
			transition
				.ui__animate(v-if="isActive")
					slot
					//- slots will compile in the parent scope(root) as that is where the content exists
</template>

<script>
//console.log("-- pane component initialised --");

/*********************************************************************************************/

export default {
	name: 'pane',

	created() {
		if(this.$parent !== undefined)
			this.$parent.panes.push(this);
	},

	mounted() {
		//this.paneClasses = this.$el.className; //this.$el.classList;
		//this.$el.classList.remove('active');			
	},

	props: {
		'heading': String,
		'iconClass': String,
		'active': Boolean
	},

	data() {
		//DEVNOTE: considered bad practise to directly reference parent's data in child scope
		//https://vuejs.org/v2/guide/components.html#Composing-Components

		return {
			index: this.$parent.panes.length,
			isActive: this.active, //!this.$parent.panes.length,
			//paneClasses: "", //need to declare 2-way binding so that things will update once they have been mutated
			//fromParent1: this.$parent.foo,
			//fromParent2: this.$parent.bar
		}
	},

	computed: {
		getType() {
			return this.$parent.type;
		},

		getHeading() {
			return this.heading;
		},

		classObject() {
			const ACTIVECLASS = "active";

			if(this.$parent.type == "tabs") {
				//console.log("JB :classObject 4: ", this.$el, " :: ", this.paneClasses)
				//console.log("split >> ", this.paneClasses.split(" "));

				/*var _self = this;
				var foo = [];
				var bar = [];
				this.paneClasses.split(" ").forEach(function(item, i, arr) {
					//console.log(_self.index, " = ", item, " :: ", item.search(ACTIVECLASS) );

					if( item.search(ACTIVECLASS) === 0 ) {

						//strip predeclared active class from node else we will get duplication
						foo = _self.paneClasses.split(" ");
						//console.log(i, "jb >> ", foo);
						bar = foo.splice(i, 1);
						//_self.paneClasses.remove('active');
						//_self.paneClasses.$remove('active');

						//DEVNOTE: effectively same code block as methods:toggle()
						for(var i = _self.$parent.panes.length; i--;) {
							_self.$parent.panes[i].isActive = (_self.index == i);
						}

						//console.log(_self.$el.className, " jb >> ", foo.join());

						//_self.paneClasses = foo.join();
					}
				});*/
			}

			return {
			 	active: this.isActive
			}
		}
	},

	methods: {
		toggle() {
			var index = _.indexOf(this.$parent.panes, this);

			if(this.$parent.type === 'accordion'){

				for(var i = this.$parent.panes.length; i--;) {
				 	this.$parent.panes[i].isActive = (index == i);
				}

			} else if(this.$parent.type === 'collapsible') {

				this.$parent.panes[index].isActive = !this.$parent.panes[index].isActive;
			}
		}
	}
}
</script>

<style lang="scss" scoped>
</style>
