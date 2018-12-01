<template lang="pug">
	transition
		label(:class='[{state__selected: isSelected}]' v-if="isRender")
			//- input(type="radio", :id="id", :name="this.$parent.name", :value="data", @change="radioChangeHandler")
			
			input(type="radio", :id="id", :name="this.$parent.name", :value="data" v-model="radioButtonValue", :disabled="isSelected")
			//- :checked = value == this.$parent.selected
			//-, :disabled="isSelected"
			span
				slot
			//-
				| :: value= {{ data }}
				| :: isSelected= {{ isSelected }}
</template>

<script>
import _ from 'lodash'


//console.log("-- VUE::radio(COMPONENT) initialised -- ");
/*********************************************************************************************/
export default {
	name: 'radio',

	created() {
		if(this.$parent !== undefined)
			this.$parent.radios.push(this);
	},

	props: [
		'id',
		'value',
		'data'
	],

	data() {
		return {
			_self: this
		}
	},

	computed: {
		radioButtonValue: {
            get() {
            	//console.log("radioButtonValue.GET: ", this);

                return this.value || this.$parent.selectedValue;
            },
            
            set() {
            	//console.log("radioButtonValue.SET: ", this._self);

                this.$parent.$emit('change', this._self);
            }
        },

        isSelected() {        	
        	return this.data == this.radioButtonValue;
        },

        isRender() {
        	return this.radioButtonValue === null ? true : this.data == this.radioButtonValue;
        }
	},

	watch: {},

	methods: {
		/*radioChangeHandler() {
			let index = _.indexOf(this.$parent.radios, this);

			for(var i = this.$parent.radios.length; i--;) {
			 	this.$parent.radios[i].isSelected = (index == i);
			}

			this.$parent.$emit('change', this);
		}*/
	}
}
</script>

<style lang="scss" scoped>
.control__radio > label {
	&.state__selected {
		border-width: 0;
		padding: 0;
		padding-right: 5vw;
		float: left;
		width: auto;

		& input[type="radio"]:checked ~ span {
			&:before,
			&:after {
				content: none;
			}
		}
	}
}
</style>
