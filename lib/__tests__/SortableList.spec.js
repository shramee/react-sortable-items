"use strict";

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _SortableItems = _interopRequireDefault(require("../SortableItems"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* setup enzyme */
(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
/* setup jsdom */

var jsdom = require('jsdom');

var JSDOM = jsdom.JSDOM;
var window = new JSDOM('').window;
global.window = window;
global.document = window.document;
var colors = ['Red', 'Green', 'Blue', 'Yellow', 'Black', 'White', 'Orange'];
test('SortableItems render matches snapshot', function () {
  var component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_SortableItems.default, {
    data: colors
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('SortableItems renders the correct elements', function () {
  var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_SortableItems.default, {
    data: colors
  }));
  expect(wrapper.children('.sortable-items--item').length).toEqual(colors.length);
  expect(wrapper.children('.sortable-items--item').first().prop('draggable')).toEqual('true');
});
test('SortableItems wrapProps className', function () {
  var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_SortableItems.default, {
    data: colors,
    wrapProps: {
      className: 'my-sortable-stuff'
    }
  }));
  expect(wrapper.hasClass('my-sortable-stuff')).toEqual(true);
});
test('SortableItems itemProps className', function () {
  var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_SortableItems.default, {
    data: colors,
    itemProps: {
      className: 'my-sortable-item'
    }
  }));
  expect(wrapper.children('.my-sortable-item').length).toEqual(colors.length);
});
test('SortableItems data sorting', function () {
  var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_SortableItems.default, {
    data: colors
  }));
  expect(wrapper.find('.sortable-items--item').at(0).text()).toEqual(colors[0]);
  wrapper.instance().sortData(5, 0);
  expect(wrapper.find('.sortable-items--item').at(0).text()).toEqual(colors[5]);
  wrapper.instance().sortData(0, 5);
  wrapper.instance().sortData(1, 5);
  expect(wrapper.find('.sortable-items--item').at(5).text()).toEqual(colors[1]);
});
test('SortableItems data onChange callback', function () {
  var delim = ', ',
      colorsArr = [].concat(colors),
      colorsList = colorsArr.join(delim);

  var onChange = function onChange(items) {
    return colorsList = items.join(delim);
  };

  var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_SortableItems.default, {
    data: colors,
    onChange: onChange
  }));
  expect(colorsList).toEqual(colorsArr.join(delim)); // Operation in component

  wrapper.instance().sortData(5, 0); // Simulate operation on our array

  colorsArr.splice(0, 0, colorsArr.splice(5, 1)[0]); // onChange callback should change colorsList

  expect(colorsList).toEqual(colorsArr.join(delim));
});