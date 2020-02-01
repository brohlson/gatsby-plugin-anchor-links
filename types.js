"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.anchorLinkTypes = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var anchorLinkTypes = {
  to: _propTypes["default"].string.isRequired,
  title: _propTypes["default"].string,
  children: _propTypes["default"].node
};
exports.anchorLinkTypes = anchorLinkTypes;