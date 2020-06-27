/* setup enzyme */
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure( {adapter: new Adapter()} );

/* setup jsdom */
var jsdom = require( 'jsdom' );
const {JSDOM} = jsdom;
const window = new JSDOM( '' ).window;
global.window = window;
global.document = window.document;

import React from 'react'
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme'
import SortableItems from '../SortableItems'

test( 'SortableItems render matches snapshot', () => {
	let colors = ['Red', 'Green', 'Blue', 'Yellow', 'Black', 'White', 'Orange'];

	const component = renderer.create(
		<SortableItems data={colors}/>
	);

	let tree = component.toJSON();
	expect( tree ).toMatchSnapshot();
} );

test( 'SortableItems renders the correct elements', () => {
	let colors = ['Red', 'Green', 'Blue', 'Yellow', 'Black', 'White', 'Orange'];

	const wrapper = shallow(
		<SortableItems data={colors}/>
	);

	expect( wrapper.instance().props.data ).toEqual( colors );

	expect( wrapper.children( '.sortable-items--item' ).length ).toEqual( colors.length );
	expect( wrapper.children( '.sortable-items--item' ).first().prop( 'draggable' ) ).toEqual( 'true' );
} );
