"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = optimize;
var SVGO = _interopRequireWildcard(require("svgo"));
var _lodash = _interopRequireDefault(require("lodash.isplainobject"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var essentialPlugins = ['removeDoctype', 'removeComments'];
function isEssentialPlugin(p) {
  return essentialPlugins.indexOf(p) !== -1;
}
function validateAndFix(opts) {
  if (!(0, _lodash["default"])(opts)) return;
  if (opts.full) {
    if (typeof opts.plugins === 'undefined' || Array.isArray(opts.plugins) && opts.plugins.length === 0) {
      /* eslint no-param-reassign: 1 */
      opts.plugins = [].concat(essentialPlugins);
      return;
    }
  }

  // opts.full is false, plugins can be empty
  if (typeof opts.plugins === 'undefined') return;
  if (Array.isArray(opts.plugins) && opts.plugins.length === 0) return;

  // track whether its defined in opts.plugins
  var state = essentialPlugins.reduce(function (p, c) {
    return Object.assign(p, _defineProperty({}, c, false));
  }, {});
  opts.plugins.forEach(function (p) {
    if (typeof p === 'string' && isEssentialPlugin(p)) {
      state[p] = true;
    } else if (_typeof(p) === 'object') {
      Object.keys(p).forEach(function (k) {
        if (isEssentialPlugin(k)) {
          // make it essential
          if (!p[k]) p[k] = true;
          // and update state
          /* eslint no-param-reassign: 1 */
          state[k] = true;
        }
      });
    }
  });
  Object.keys(state).filter(function (key) {
    return !state[key];
  }).forEach(function (key) {
    return opts.plugins.push(key);
  });
}
function optimize(content) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  validateAndFix(opts);
  return SVGO.optimize(content, opts);
}