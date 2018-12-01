<template lang="pug">
	p.ui__countdown
		span.countdown__days
			| {{ days | double_digits}}
			span.text Days
		span.countdown__hours
			| {{ hours | double_digits}}
			span.text Hours
		span.countdown__minutes
			| {{ minutes | double_digits }}
			span.text Minutes
		span.countdown__minutes
			| {{ seconds | double_digits }}
			span.text Seconds
</template>


<script>
import Vue from 'vue'

//console.log("-- countdown component initialised --");

Vue.filter('double_digits', (value) => {
	if(value.toString().length <= 1) {
		return "0" + value.toString();
	}

	return value.toString();
});

/*********************************************************************************************/

export default {
	//SCOPE= hero > UI__COUNTDOWN
	name: 'countdown',

	components: {},

	created() {
		console.log("1. COMPONENT: created");

		var self = this;

		this.timer = setInterval(() => {
			self.$data.now = Math.trunc((new Date()).getTime() / 1000);
		}, 1000);		
	},

	props: ['epoch'],

	data() {
		console.log("now :: ", Math.trunc((new Date()).getTime() / 1000) );
		return {
			now: Math.trunc((new Date()).getTime() / 1000),

			//temp
			date: Math.trunc(Date.parse(this.epoch) / 1000)
		}
	},

	computed: {
		days: function() {
			return Math.trunc((this.date - this.now) / 60 / 60 / 24);
		},

		hours: function() {
			return Math.trunc((this.date - this.now) / 60 / 60) % 24;
		},

		minutes: function() {
			return Math.trunc((this.date - this.now) / 60) % 60;
		},

		seconds: function() {
			return (this.date - this.now) % 60;
		}
	}
}
</script>


<style lang="scss" scoped>
</style>
