"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onRouteUpdate = void 0;

var _utils = require("./utils");

var onRouteUpdate = function onRouteUpdate(_ref, _ref2) {
  var location = _ref.location;
  var _ref2$offset = _ref2.offset,
      offset = _ref2$offset === void 0 ? 0 : _ref2$offset;
  if (typeof window !== "undefined") window.gatsby_scroll_offset = offset;
  (0, _utils.checkHash)(location, offset);
};

exports.onRouteUpdate = onRouteUpdate;