"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scroller = scroller;
exports.handleMenuLinkClick = handleMenuLinkClick;
exports.checkHash = checkHash;

var _scrollToElement = _interopRequireDefault(require("scroll-to-element"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function scroller(target) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  (0, _scrollToElement["default"])(target, {
    offset: offset
  });
}

function handleMenuLinkClick(to, e) {
  if (typeof window !== "undefined" && to.includes("#")) {
    var _to$split = to.split("#"),
        _to$split2 = _slicedToArray(_to$split, 2),
        anchorPath = _to$split2[0],
        anchor = _to$split2[1];

    if (window.location.pathname === anchorPath) {
      e.preventDefault();
      scroller("#".concat(anchor), -80);
    }
  }
}

function checkHash(location, offset) {
  var hash = location.hash;
  if (hash) scroller(hash, offset);
}