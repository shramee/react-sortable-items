import SortableElements from '../lib/SortableElements' // 'react-sortable-elements'
import ReactDOM from 'react-dom'
import React, { Component } from 'react'

class TestComponent extends Component {
  render() {
    let colors = ['Red', 'Green', 'Blue', 'Yellow', 'Black', 'White', 'Orange']

    return (
      <div>
        <SortableElements data={colors} />
      </div>
    )
  }
}

ReactDOM.render(<TestComponent />, document.getElementById('root'))
