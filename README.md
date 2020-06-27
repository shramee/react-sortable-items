# react-sortable-elements

[![npm version](https://badge.fury.io/js/react-sortable-elements.svg)](https://badge.fury.io/js/react-sortable-elements)

![](https://raw.githubusercontent.com/shramee/react-sortable-elements/master/example/screenshot.gif)

react-sortable-elements is a sortable list component using react and html5 drag and drop api.

## Installation

`yarn add react-sortable-elements`

## Use

```jsx
import SortableElements from 'react-sortable-elements'
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
```

## Styles

Uses styled-components 💅 for the base styling.

## Development
    yarn
    yarn dev

## Test
    yarn test

## Build
    yarn
    yarn build


## License

[MIT](http://isekivacenz.mit-license.org/)
