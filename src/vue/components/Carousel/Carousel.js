//DEVNOTE: can use jsx and potentially styled-components in vuejs
import Vue from 'vue'

//import _ from 'lodash'
//import { Go } from '@pix8/ui-core'


/*export default class HelloWorld {
	constructor(props) {
		console.log("hello jon");
	}
}*/

/*export default function HelloWorld() {
	console.log("hello jon");

	let data = {
		items: [
			{text: 'Bananas', checked: true},
			{text: 'Apples', checked: true},
			{text: 'Pears', checked: false}
		],
		title: 'My Shopping List',
		newItem: ''
	}

	new Vue({
		el: '#app3',

		data,

		methods: {
			addItem() {
				var text;

				text = this.newItem.trim();
				if(text) {
					this.items.push({
						text,
						checked: false
					});
					this.newItem = '';
				}
			}
		}
	})
}*/

export default {
	template: `
		<div className='ui__helloworld'>
			<p>Index: {{ index }} :: x-axis(position): {{ getPosition }}</p>

			<div class="carousel">
				<ul class="slidereel" :style="{transform: 'translate3d(' + getPosition + ', 0px, 0px)'}">
					<li v-for="(slide, i) in slides" class="slide">
						<div class="mock-content" style="height:400px;">Slide {{ i }}</div>
					</li>
				</ul>
			</div>

			<div style="text-align:center;">
				<button type="button" class="control" @click="index = Go(--index)">&larr; Previous</button>
				<button type="button" class="control" @click="index = Go(++index)">Next &rarr;</button>
			</div>
		</div>
	`,

	name: 'helloworld',

	components: {},

	props: [],
	
	data() {
		return {
			slides: [1, 2, 3, 4],
			index: 0
		}
	},

	computed: {
		getPosition() {
			console.log("its a knockout");
			return (this.index * -100) + "%";
		}
	},

	methods: {
		//should be from @pix8/ui-core
		Go(num) {
			console.log("HelloWorld GO >> ", num)

			return num;
			return Math.floor(Math.random()*5);
			//return this.state.currentIndex-1;
		}
	}
}