# react-sortable-items

[![npm version](https://badge.fury.io/js/react-sortable-items.svg)](https://badge.fury.io/js/react-sortable-items)

![](https://raw.githubusercontent.com/shramee/react-sortable-items/master/example/screenshot.gif)

react-sortable-items is a sortable list component using react and html5 drag and drop api.

## Installation

`yarn add react-sortable-items`

## Use

```jsx
import SortableItems from 'react-sortable-items'
import ReactDOM from 'react-dom'
import React, { Component } from 'react'

class TestComponent extends Component {
  render() {
    let colors = ['Red', 'Green', 'Blue', 'Yellow', 'Black', 'White', 'Orange']

    return (
      <div>
        <SortableItems data={colors} />
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

## Publish
    npm login
    npm version patch
    git add -A
    git push origin master
    npm publish

## License

[MIT](http://isekivacenz.mit-license.org/)
