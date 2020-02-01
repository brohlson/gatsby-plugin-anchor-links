"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnchorLink = AnchorLink;

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

var _utils = require("../utils");

var _types = require("../types");

var errorTypes = _interopRequireWildcard(require("../errors"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function AnchorLink(_ref) {
  var to = _ref.to,
      title = _ref.title,
      children = _ref.children;

  /**
   * Check props are valid
   */
  var improperFormatting = !to.includes("/") || !to.includes("#");
  if (improperFormatting) console.warn(errorTypes.IMPROPPER_FORMATTING);
  var linkProps = {
    to: to,
    title: title,
    onClick: function onClick(e) {
      return (0, _utils.handleMenuLinkClick)(to, e);
    }
  };
  return _react["default"].createElement(_gatsby.Link, linkProps, Boolean(children) ? children : title);
}

AnchorLink.propTypes = _types.anchorLinkTypes;