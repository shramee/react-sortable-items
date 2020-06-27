import React, {Component} from 'react';

/**
 * Sortable List module
 * A sortable list component using html5 drag and drop api.
 * @param {array} data Array of data to resort
 * @param {function} renderItem Callback function to render item element from data item
 * @param {function} onChange Callback function called with newly ordered data
 **/
export default class SortableList extends Component {

	constructor( props ) {
		super( props );
		let placeholder = document.createElement( 'div' );
		placeholder.className = 'placeholder';
		this.state = {
			data: props.data,
			placeholder: placeholder
		};
	}

	/**
	 * On drag start, set data.
	 **/
	dragStart( e ) {
		this.dragged = e.currentTarget;
		e.dataTransfer.effectAllowed = 'move';
		e.dataTransfer.setData( 'text/html', e.currentTarget );
		this.state.placeholder.style.height = this.dragged.offsetHeight + 'px';
	}

	/**
	 * On drag end, update the data state.
	 **/
	dragEnd( e ) {
		this.dragged.style.display = 'block';
		this.dragged.parentNode.removeChild( this.state.placeholder );
		let data = this.state.data;
		let from = Number( this.dragged.dataset.id );
		let to = Number( this.over.dataset.id );
		if ( from < to ) to --;
		if ( this.nodePlacement == 'after' ) to ++;
		data.splice( to, 0, data.splice( from, 1 )[0] );

		let {onChange} = this.props;
		if ( ! onChange ) {
			onChange = items => null;
		}

		onChange( data );

		this.setState( {data: data} );
	}

	/**
	 * On drag over, update items.
	 **/
	dragOver( e ) {
		e.preventDefault();
		this.dragged.style.display = 'none';
		if ( e.target.className == 'placeholder' ) {
			return;
		}
		this.over = e.target;
		let relY = e.clientY - this.over.offsetTop;
		let height = this.over.offsetHeight / 2;
		let parent = e.target.parentNode;
		if ( relY > height ) {
			this.nodePlacement = 'after';
			parent.insertBefore( this.state.placeholder, e.target.nextElementSibling );
		} else if ( relY < height ) {
			this.nodePlacement = 'before';
			parent.insertBefore( this.state.placeholder, e.target );
		}
	}

	renderItem( item, i ) {
		let {renderItem} = this.props;

		if ( ! renderItem ) {
			renderItem = item => item;
		}

		return <div
			data-id={i}
			key={i}
			draggable="true"
			onDragEnd={this.dragEnd.bind( this )}
			onDragStart={this.dragStart.bind( this )}
		>
			{renderItem( item )}
		</div>;
	}

	render() {
		const {data} = this.state;
		const listItems = data.map( ( item, i ) => this.renderItem( item, i ) );

		return <div onDragOver={this.dragOver.bind( this )}>{listItems}</div>;
	}
}
