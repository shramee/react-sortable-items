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
test('SortableItems render matches snapshot', function () {
  var colors = ['Red', 'Green', 'Blue', 'Yellow', 'Black', 'White', 'Orange'];

  var component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_SortableItems.default, {
    data: colors
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('SortableItems renders the correct elements', function () {
  var colors = ['Red', 'Green', 'Blue', 'Yellow', 'Black', 'White', 'Orange'];
  var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_SortableItems.default, {
    data: colors
  }));
  expect(wrapper.instance().props.data).toEqual(colors);
  expect(wrapper.children('.sortable-items--item').length).toEqual(colors.length);
  expect(wrapper.children('.sortable-items--item').first().prop('draggable')).toEqual('true');
});
test('SortableItems wrapProps className', function () {
  var colors = ['Red', 'Green', 'Blue', 'Yellow', 'Black', 'White', 'Orange'];
  var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_SortableItems.default, {
    data: colors,
    wrapProps: {
      className: 'my-sortable-stuff'
    }
  }));
  expect(wrapper.hasClass('my-sortable-stuff')).toEqual(true);
});
test('SortableItems itemProps className', function () {
  var colors = ['Red', 'Green', 'Blue', 'Yellow', 'Black', 'White', 'Orange'];
  var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_SortableItems.default, {
    data: colors,
    itemProps: {
      className: 'my-sortable-items'
    }
  }));
  expect(wrapper.children('.my-sortable-items').length).toEqual(colors.length);
});