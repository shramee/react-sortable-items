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
import SortableElements from '../SortableElements'

const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Black', 'White', 'Orange'];

test( 'SortableElements render matches snapshot', () => {
	const component = renderer.create(
		<SortableElements data={colors}/>
	);

	let tree = component.toJSON();
	expect( tree ).toMatchSnapshot();
} );

test( 'SortableElements renders the correct elements', () => {
	const wrapper = shallow(
		<SortableElements data={colors}/>
	);

	expect( wrapper.children( '.sortable-items--item' ).length ).toEqual( colors.length );
	expect( wrapper.children( '.sortable-items--item' ).first().prop( 'draggable' ) ).toEqual( 'true' );
} );

test( 'SortableElements wrapProps className', () => {
	const wrapper = shallow(
		<SortableElements data={colors} wrapProps={{className: 'my-sortable-stuff',}}/>
	);

	expect( wrapper.hasClass( 'my-sortable-stuff' ) ).toEqual( true );
} );

test( 'SortableElements itemProps className', () => {
	const wrapper = shallow(
		<SortableElements data={colors} itemProps={{className: 'my-sortable-item',}}/>
	);

	expect( wrapper.children( '.my-sortable-item' ).length ).toEqual( colors.length );
} );

test( 'SortableElements data sorting', () => {
	const wrapper = shallow(
		<SortableElements data={colors}/>
	);

	expect( wrapper.find( '.sortable-items--item' ).at( 0 ).text() ).toEqual( colors[0] );

	wrapper.instance().sortData( 5, 0 );

	expect( wrapper.find( '.sortable-items--item' ).at( 0 ).text() ).toEqual( colors[5] );

	wrapper.instance().sortData( 0, 5 );

	wrapper.instance().sortData( 1, 5 );

	expect( wrapper.find( '.sortable-items--item' ).at( 5 ).text() ).toEqual( colors[1] );

} );

test( 'SortableElements data onChange callback', () => {

	let
		delim = ', ',
		colorsArr = [...colors],
		colorsList = colorsArr.join( delim );

	const onChange = items => colorsList = items.join( delim );

	const wrapper = shallow(
		<SortableElements data={colors} onChange={onChange}/>
	);

	expect( colorsList ).toEqual( colorsArr.join( delim ) );

	// Operation in component
	wrapper.instance().sortData( 5, 0 );

	// Simulate operation on our array
	colorsArr.splice( 0, 0, colorsArr.splice( 5, 1 )[0] );

	// onChange callback should change colorsList
	expect( colorsList ).toEqual( colorsArr.join( delim ) );

} );
