"use strict";

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _SortableElements = _interopRequireDefault(require("../SortableElements"));

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
test('SortableElements render matches snapshot', function () {
  var component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_SortableElements.default, {
    data: colors
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('SortableElements renders the correct elements', function () {
  var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_SortableElements.default, {
    data: colors
  }));
  expect(wrapper.children('.sortable-items--item').length).toEqual(colors.length);
  expect(wrapper.children('.sortable-items--item').first().prop('draggable')).toEqual('true');
});
test('SortableElements wrapProps className', function () {
  var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_SortableElements.default, {
    data: colors,
    wrapProps: {
      className: 'my-sortable-stuff'
    }
  }));
  expect(wrapper.hasClass('my-sortable-stuff')).toEqual(true);
});
test('SortableElements itemProps className', function () {
  var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_SortableElements.default, {
    data: colors,
    itemProps: {
      className: 'my-sortable-item'
    }
  }));
  expect(wrapper.children('.my-sortable-item').length).toEqual(colors.length);
});
test('SortableElements data sorting', function () {
  var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_SortableElements.default, {
    data: colors
  }));
  expect(wrapper.find('.sortable-items--item').at(0).text()).toEqual(colors[0]);
  wrapper.instance().sortData(5, 0);
  expect(wrapper.find('.sortable-items--item').at(0).text()).toEqual(colors[5]);
  wrapper.instance().sortData(0, 5);
  wrapper.instance().sortData(1, 5);
  expect(wrapper.find('.sortable-items--item').at(5).text()).toEqual(colors[1]);
});
test('SortableElements data onChange callback', function () {
  var delim = ', ',
      colorsArr = [].concat(colors),
      colorsList = colorsArr.join(delim);

  var onChange = function onChange(items) {
    return colorsList = items.join(delim);
  };

  var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_SortableElements.default, {
    data: colors,
    onChange: onChange
  }));
  expect(colorsList).toEqual(colorsArr.join(delim)); // Operation in component

  wrapper.instance().sortData(5, 0); // Simulate operation on our array

  colorsArr.splice(0, 0, colorsArr.splice(5, 1)[0]); // onChange callback should change colorsList

  expect(colorsList).toEqual(colorsArr.join(delim));
});