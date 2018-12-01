<template lang="pug">
	.form__field(v-if="isRender")
		p Progressive field? {{ progressive }}
		slot
</template>

<script>
import _ from 'lodash'


console.log("-- VUE::Field(COMPONENT) initialised -- ");
/*********************************************************************************************/
//CONDITIONS
// 1) if a field is progressive then all subsequent sibling fields should be made not visible
	//this can only be reliably managed if all components are maintained in order in an array 

export default {
	name: 'field',

	created() {
		console.log("is it progressive? ", this.progressive);

		if(this.$parent !== undefined)
			this.$parent.fields.push(this);
		
		//DEVNOTE: if progressive field register handler
		// needs to listen for it's previous sibling to fire 'complete' event
		// if(this.progressive){
		// 	this.$on('complete', this.fieldChangeHandler);
		// }
	},

	mounted() {},

	components: {},

	props: ['progressive'],

	data() {
		return {
			//fields: [],
			isRender: true
		}
	},

	computed: {
	},

	watch: {},

	methods: {
		fieldChangeHandler(control) {
			console.log("fieldChangeHandler() ", this.render)
			//DEVNOTE: toggle next progresive field to render in array order
		}
	}
}
</script>

<style lang="scss" scoped>
</style>
