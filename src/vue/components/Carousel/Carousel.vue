<!-- DEVNOTE: convert to jsx for portability with react ecosystem - explore potemtially using styled components -->
<template lang="pug">
	//- contenteditable="true" or tabindex="0" will grant focus to non-focusable elements to capture keyboard events
	//- mouseover/mouseenter to trigger focus. keyboard events will be capturable. mouseout/mouseleave will blur.
	//- can also bind to the body and allow(event delegation) to propogate down and back up/query target and determine if keyup is applicable

	//- https://vuejs.org/v2/guide/components-custom-events.html#Customizing-Component-v-model
	//-v-on:focus.native
	.ui__carousel(@keyup.left="index = engine.go(--index)" @keyup.right="index = engine.go(++index)" contenteditable="true")
		p Index: {{ index }} :: x-axis(position): {{ getPosition }}

		.ui__header
			//- slide title/caption

		.carousel.ui__body
			ul.slidereel(:style="{transform: 'translate3d(' + getPosition + ', 0px, 0px)'}")
				li.slide(v-for="(slide, i) in slides")
					.mock-content(style="height:400px;")
						h2 Slide {{ i+1 }}
					//- slot

		nav
			//- don't implicitly call the event handler; leverage off reactivity. just set the index; increment or decrement. the change in value should trigger the re-render which should itself call go().
			//- hmm this is already the case i suspect.
			button.control(type="button" @click.prevent="index = engine.go(--index)") &larr; Previous
			template(v-for="(slide, i) in slides")
				button.control(type="button" @click.prevent="index = engine.go(i)") {{ i+1 }}
			button.control(type="button" @click.prevent="index = engine.go(++index)") Next &rarr;
</template>


<script>
	//import _ from 'lodash'
	//import { Carousel as ngCarousel } from '@pix8/ui-core'
	import * as Core from '@pix8/ui-core'

	export default {
		//el: 'carousel',
		
		name: 'UiCarousel',

		components: {},

		//props: { slides: Array },
		props: [],

		data() {
			return {
				slides: [1, 2, 3, 4], //DEVNOTE: retrofit with 'Panes' component. - treat all the same UI component; tabs(horizontal and vertical), carousel, accordion, concertina
				index: 0
			}
		},

		computed: {
			getPosition() {
				return (this.index * -100) + "%";
			}
		},

		methods: {
			onKeyUpHandler(event) {
				console.log(event.keyCode);
			},

			onFocusHandler(event) {
				console.log(event.target);
			},

			onBlurHandler(event) {
				console.log(event.target);
			}
		},

		beforeCreate() {},

		created() {
			this.engine = new Core.Carousel(this.slides);
		},

		mounted() {
			//console.log("foobar :: ", this);

			//DEVNOTE: see if this can be delegated to ui-core; react synthetic events might spoils that ambition
			this.$el.addEventListener('focus', this.onFocusHandler, true);
			this.$el.addEventListener('blur', this.onBlurHandler, true);
		}
	}
</script>


<style lang="scss" scoped>
	ol, ul {
		margin: 0;
	}

	.carousel {
		border: 4px solid rgb(167,197,93);
		overflow: hidden;
		margin: 0 auto;
	}

	.slidereel {
		/*transform: translate3d(${ props => props.x_axis }, 0px, 0px);*/
		padding-left: 0;
		list-style-type: none;
		display: flex;
		transition: transform 500ms ease;

		/* allow for scrolling */
		//overflow-x: auto;
		/* make it smooth on iOS */
		//-webkit-overflow-scrolling: touch;
		/* each slide snaps into place */
		// scroll-snap-points-x: repeat(300px);
		// scroll-snap-type: mandatory;
	}

	.slide {
		flex-shrink: 0;
		flex-basis: 100%;
		background-color: #888;
		border: 4px solid #fff;
	}

	nav {
		text-align:center;
	}

	.control {
		display: inline-block;
	}

	.mock-content {
		color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
