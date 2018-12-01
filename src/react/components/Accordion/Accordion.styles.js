import styled from 'styled-components'

const AccordionFoobar = styled.div`
	border: 4px solid rgb(236,0,140);
	overflow: hidden;
	margin: 0 auto;
`;

const Slidereel = styled.ul`
	transform: translate3d(${ props => props.x_axis }, 0px, 0px); //current index * +/-100%
	padding-left: 0;
	list-style-type: none;
	display: flex;
	transition: transform 500ms ease;
`;

const Slide = styled.li`
	flex-shrink: 0;
	flex-basis: 100%;
	background-color: #888;
	border: 4px solid #fff;
`;

const Control = styled.button.attrs({
	type: 'button'
})`
	display: inline-block;
`;

export {
	AccordionFoobar,
	Slidereel,
	Slide,
	Control
}
