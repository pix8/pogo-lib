import styled from 'styled-components'

const CarouselFoobar = styled.div`
	border: 4px solid rgb(236,0,140);
	overflow: hidden;
	//width: 100px;
	margin: 0 auto;
`;

const Slidereel = styled.ul`

	//DEVNOTE: 3d transform Vs 2d transform; 3d opens up scope to hardware gfx acceleration by forcing the issue.
	//transform: translate3d(${ props => props.x_axis }px, 0px, 0px);
	transform: translate3d(${ props => props.x_axis }, 0px, 0px); //current index * +/-100%
	//transform: translateX( ${ props => props.x_axis }px );
	padding-left: 0;
	list-style-type: none;
	display: flex;

	//DEVNOTE: use state__transition to apply this rule
	transition: transform 500ms ease;
`;

const Slide = styled.li`
	//DEVNOTE: no truly fluid setup needs explicit dimensions
	//width: 100px;
	//height: 100px;
	flex-shrink: 0;
	//flex-grow: 1;
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
	CarouselFoobar,
	Slidereel,
	Slide,
	Control
}
