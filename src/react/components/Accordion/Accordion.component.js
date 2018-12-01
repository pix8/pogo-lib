import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM, { render } from 'react-dom'
import { observable, computed } from 'mobx'
import { observer } from 'mobx-react'

import _ from 'lodash'
import v4 from 'uuid/v4'

//import { Accordion as ngAccordion } from '@pix8/ui-core'
import * as Core from '@pix8/ui-core'

import {
	AccordionFoobar,
	Slidereel,
	Slide,
	Control
} from './Accordion.styles'


@observer
export default class Accordion extends Component {

	@observable index = this.engine.go(0);

	@computed get position() {
		return (this.index * -100) + "%";
	}

	//DEVNOTE:
	//reactivity. when the current index is changed the view should re-render.
		// change in current index triggers engine. the returned values from engine in turn  are binded/setState in the component to refresh the UI.

	constructor(props) {
		super(props)

		this.state = {
		}

		this.engine = new Core.Accordion(props.slides);
	}

	/*foobar(event) {
	}*/

	onKeyUpHandler(event) {
		if(event.keyCode === 37 || event.key === "ArrowLeft") {
			this.index = this.engine.go(--this.index)
		}

		if(event.keyCode === 39 || event.key === "ArrowRight") {
			this.index = this.engine.go(++this.index)
		}

		return false;
	}

	render() {
		return (
			<div className='ui__accordion' onKeyUp={ this.onKeyUpHandler.bind(this) } tabIndex="0">
				<p>Index: { this.index } :: x-axis(position): { this.position }</p>

				<AccordionFoobar>
					<Slidereel x_axis={ this.position }>
						{/* this.props.children */}

						{
							this.props.slides.map((item, i, arr) => {
								return (
									<Slide key={ `slide-${v4()}-${i}` }>
										<div className="mock-content" style={ {height:'400px'} }>
											<h2>{ `Slide ${i}` }</h2>
										</div>
									</Slide>
								)
							})
						}
					</Slidereel>
				</AccordionFoobar>

				<nav style={ {textAlign:  'center'} }>
					<Control onClick={ () => this.index = this.engine.go(--this.index) }>&larr; Previous</Control>
					<Control onClick={ () => this.index = this.engine.go(++this.index) }>Next &rarr;</Control>
				</nav>
			</div>
		)
	}
}


Accordion.propTypes = {
	slides: PropTypes.array
}
