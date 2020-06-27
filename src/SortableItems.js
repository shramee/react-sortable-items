import React, {Component} from 'react';

/**
 * Sortable List module
 * A sortable list component using html5 drag and drop api.
 * @param {array} data Array of data to resort
 * @param {function} renderItem Callback function to render item element from data item
 * @param {function} onChange Callback function called with newly ordered data
 **/
export default class SortableItems extends Component {

	constructor( props ) {
		super( props );
		let placeholder = document.createElement( 'div' );
		placeholder.className = 'placeholder';
		this.state = {
			data: [...props.data],
			placeholder: placeholder
		};

		this.dragEnd = this.dragEnd.bind( this );
		this.dragStart = this.dragStart.bind( this );
		this.dragOver = this.dragOver.bind( this );
	}

	sortData( from, to ) {
		let {data} = this.state;

		data.splice( to, 0, data.splice( from, 1 )[0] );
		let {onChange} = this.props;
		if ( ! onChange ) {
			onChange = items => null;
		}

		onChange( data );

		this.setState( {data} );

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
		let from = Number( this.dragged.dataset.id );
		let to = Number( this.over.dataset.id );
		if ( from < to ) to --;
		if ( this.nodePlacement == 'after' ) to ++;

		this.sortData( from, to );

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

		const props = {
			key        : i,
			draggable  : "true",
			onDragEnd  : this.dragEnd,
			onDragStart: this.dragStart,
			className  : 'sortable-items--item',
			...(this.props.itemProps || {})
		};

		return <div {...props}>
			{renderItem( item )}
		</div>;
	}

	render() {
		const {data} = this.state;
		const listItems = data.map( ( item, i ) => this.renderItem( item, i ) );
		const props = {
			onDragOver: this.dragOver,
			className  : 'sortable-items--wrap',
			...(this.props.wrapProps || {})
		};

		return <div {...props}>{listItems}</div>;
	}
}
