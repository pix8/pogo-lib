<template lang="pug">
	.ui__notification.clearfix
		.container
			.row
				.col-xs-12
					template(v-if="str")
						p {{ str }}

					template(v-else-if="$slots.default")
						slot

					template(v-else)
						p Hi I'm a notification; my class is .ui__notification; i am compiled and rendered from a Vue component
</template>

<script>
//console.log("-- notification component initialised --");

/*********************************************************************************************/

export default {
	name: 'notification',

	created() {
	},

	mounted() {		
	},

	props: ['str'],

	data() {
		return {
		}
	},

	computed: {
	},

	methods: {
	}
}
</script>


<style lang="scss" scoped>
.ui__notification {	
	//background-color: rgb(220,10,10);
	//color: rgb(255,255,255);
}
</style>
