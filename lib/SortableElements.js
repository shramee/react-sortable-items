"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Sortable List module
 * A sortable list component using html5 drag and drop api.
 * @param {array} data Array of data to resort
 * @param {function} renderItem Callback function to render item element from data item
 * @param {function} onChange Callback function called with newly ordered data
 **/
var SortableElements = /*#__PURE__*/function (_Component) {
  _inherits(SortableElements, _Component);

  var _super = _createSuper(SortableElements);

  function SortableElements(props) {
    var _this;

    _classCallCheck(this, SortableElements);

    _this = _super.call(this, props);
    var placeholder = document.createElement('div');
    placeholder.className = 'placeholder';
    _this.state = {
      data: _toConsumableArray(props.data),
      placeholder: placeholder
    };
    _this.dragEnd = _this.dragEnd.bind(_assertThisInitialized(_this));
    _this.dragStart = _this.dragStart.bind(_assertThisInitialized(_this));
    _this.dragOver = _this.dragOver.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SortableElements, [{
    key: "sortData",
    value: function sortData(from, to) {
      var data = this.state.data;
      data.splice(to, 0, data.splice(from, 1)[0]);
      var onChange = this.props.onChange;

      if (!onChange) {
        onChange = function onChange(items) {
          return null;
        };
      }

      onChange(data);
      this.setState({
        data: data
      });
    }
    /**
     * On drag start, set data.
     **/

  }, {
    key: "dragStart",
    value: function dragStart(e) {
      this.dragged = e.currentTarget;
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/html', e.currentTarget);
      this.state.placeholder.style.height = this.dragged.offsetHeight + 'px';
    }
    /**
     * On drag end, update the data state.
     **/

  }, {
    key: "dragEnd",
    value: function dragEnd(e) {
      this.dragged.style.display = 'block';
      this.dragged.parentNode.removeChild(this.state.placeholder);
      var from = Number(this.dragged.dataset.id);
      var to = Number(this.over.dataset.id);
      if (from < to) to--;
      if (this.nodePlacement == 'after') to++;
      this.sortData(from, to);
    }
    /**
     * On drag over, update items.
     **/

  }, {
    key: "dragOver",
    value: function dragOver(e) {
      e.preventDefault();
      this.dragged.style.display = 'none';

      if (e.target.className == 'placeholder') {
        return;
      }

      this.over = e.target;
      var relY = e.clientY - this.over.offsetTop;
      var height = this.over.offsetHeight / 2;
      var parent = e.target.parentNode;

      if (relY > height) {
        this.nodePlacement = 'after';
        parent.insertBefore(this.state.placeholder, e.target.nextElementSibling);
      } else if (relY < height) {
        this.nodePlacement = 'before';
        parent.insertBefore(this.state.placeholder, e.target);
      }
    }
  }, {
    key: "renderItem",
    value: function renderItem(item, i) {
      var renderItem = this.props.renderItem;

      if (!renderItem) {
        renderItem = function renderItem(item) {
          return item;
        };
      }

      var props = _objectSpread({
        key: i,
        draggable: "true",
        onDragEnd: this.dragEnd,
        onDragStart: this.dragStart,
        className: 'sortable-items--item'
      }, this.props.itemProps || {});

      return /*#__PURE__*/_react.default.createElement("div", props, renderItem(item));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var data = this.state.data;
      var listItems = data.map(function (item, i) {
        return _this2.renderItem(item, i);
      });

      var props = _objectSpread({
        onDragOver: this.dragOver,
        className: 'sortable-items--wrap'
      }, this.props.wrapProps || {});

      return /*#__PURE__*/_react.default.createElement("div", props, listItems);
    }
  }]);

  return SortableElements;
}(_react.Component);

exports.default = SortableElements;