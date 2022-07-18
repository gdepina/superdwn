module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/MainRouter.js":
/*!******************************!*\
  !*** ./client/MainRouter.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Menu = __webpack_require__(/*! ./core/Menu */ \"./client/core/Menu.js\");\n\nvar _Menu2 = _interopRequireDefault(_Menu);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar MainRouter = function (_Component) {\n    _inherits(MainRouter, _Component);\n\n    function MainRouter() {\n        _classCallCheck(this, MainRouter);\n\n        return _possibleConstructorReturn(this, (MainRouter.__proto__ || Object.getPrototypeOf(MainRouter)).apply(this, arguments));\n    }\n\n    _createClass(MainRouter, [{\n        key: 'componentDidMount',\n\n        // Removes the server-side injected CSS when React component mounts\n        value: function componentDidMount() {\n            var jssStyles = document.getElementById('jss-server-side');\n            if (jssStyles && jssStyles.parentNode) {\n                jssStyles.parentNode.removeChild(jssStyles);\n            }\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(_Menu2.default, null),\n                _react2.default.createElement(\n                    _reactRouterDom.Switch,\n                    null,\n                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: null })\n                )\n            );\n        }\n    }, {\n        key: '__reactstandin__regenerateByEval',\n        value: function __reactstandin__regenerateByEval(key, code) {\n            this[key] = eval(code);\n        }\n    }]);\n\n    return MainRouter;\n}(_react.Component);\n\nvar _default = MainRouter;\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(MainRouter, 'MainRouter', 'C:/Users/Ger/Documents/DESA/superdwn/client/MainRouter.js');\n    reactHotLoader.register(_default, 'default', 'C:/Users/Ger/Documents/DESA/superdwn/client/MainRouter.js');\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/MainRouter.js?");

/***/ }),

/***/ "./client/core/Menu.js":
/*!*****************************!*\
  !*** ./client/core/Menu.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _AppBar = __webpack_require__(/*! material-ui/AppBar */ \"material-ui/AppBar\");\n\nvar _AppBar2 = _interopRequireDefault(_AppBar);\n\nvar _Toolbar = __webpack_require__(/*! material-ui/Toolbar */ \"material-ui/Toolbar\");\n\nvar _Toolbar2 = _interopRequireDefault(_Toolbar);\n\nvar _Typography = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _IconButton = __webpack_require__(/*! material-ui/IconButton */ \"material-ui/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _Home = __webpack_require__(/*! material-ui-icons/Home */ \"material-ui-icons/Home\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _ExitToApp = __webpack_require__(/*! material-ui-icons/ExitToApp */ \"material-ui-icons/ExitToApp\");\n\nvar _ExitToApp2 = _interopRequireDefault(_ExitToApp);\n\nvar _AccountCircle = __webpack_require__(/*! material-ui-icons/AccountCircle */ \"material-ui-icons/AccountCircle\");\n\nvar _AccountCircle2 = _interopRequireDefault(_AccountCircle);\n\nvar _Button = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _ShoppingCart = __webpack_require__(/*! material-ui-icons/ShoppingCart */ \"material-ui-icons/ShoppingCart\");\n\nvar _ShoppingCart2 = _interopRequireDefault(_ShoppingCart);\n\nvar _Badge = __webpack_require__(/*! material-ui/Badge */ \"material-ui/Badge\");\n\nvar _Badge2 = _interopRequireDefault(_Badge);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nvar auth = {\n    isAuthenticated: function isAuthenticated() {\n        return false;\n    }\n};\n\nvar isActive = function isActive(history, path) {\n    if (history.location.pathname == path) return { color: '#1ADEE5' };else return { color: '#ffffff' };\n};\nvar isPartActive = function isPartActive(history, path) {\n    if (history.location.pathname.includes(path)) return { color: '#1ADEE5' };else return { color: '#ffffff' };\n};\n\nvar Menu = (0, _reactRouterDom.withRouter)(function (_ref) {\n    var history = _ref.history;\n    return _react2.default.createElement(\n        _AppBar2.default,\n        { position: 'static', style: { backgroundColor: '#7D2DEE', boxShadow: 'none' } },\n        _react2.default.createElement(\n            _Toolbar2.default,\n            null,\n            _react2.default.createElement(\n                _Typography2.default,\n                { type: 'title', color: 'inherit' },\n                'SUPERMERK2'\n            ),\n            _react2.default.createElement(\n                'div',\n                { style: { marginLeft: '10px' } },\n                _react2.default.createElement(\n                    _reactRouterDom.Link,\n                    { to: '/' },\n                    _react2.default.createElement(\n                        _IconButton2.default,\n                        { 'aria-label': 'Home', style: isActive(history, \"/\") },\n                        _react2.default.createElement(_Home2.default, null)\n                    )\n                ),\n                _react2.default.createElement(\n                    _reactRouterDom.Link,\n                    { to: '/cart' },\n                    _react2.default.createElement(\n                        _Button2.default,\n                        { style: isActive(history, \"/cart\") },\n                        _react2.default.createElement(\n                            _Badge2.default,\n                            { color: 'error', badgeContent: 0 },\n                            _react2.default.createElement(_ShoppingCart2.default, null)\n                        )\n                    )\n                )\n            ),\n            _react2.default.createElement(\n                'div',\n                { style: { 'position': 'absolute', 'right': '10px' } },\n                _react2.default.createElement(\n                    'span',\n                    { style: { 'float': 'right' } },\n                    !auth.isAuthenticated() && _react2.default.createElement(\n                        'span',\n                        null,\n                        _react2.default.createElement(\n                            _reactRouterDom.Link,\n                            { to: '/signup' },\n                            _react2.default.createElement(\n                                _Button2.default,\n                                { style: isActive(history, \"/signup\") },\n                                'Registrarse'\n                            )\n                        ),\n                        _react2.default.createElement(\n                            _reactRouterDom.Link,\n                            { to: '/signin' },\n                            _react2.default.createElement(\n                                _Button2.default,\n                                { style: isActive(history, \"/signin\") },\n                                'Ingresar'\n                            )\n                        )\n                    ),\n                    auth.isAuthenticated().user && auth.isAuthenticated().user.employee && _react2.default.createElement(\n                        _reactRouterDom.Link,\n                        { to: '/reports' },\n                        _react2.default.createElement(\n                            _Button2.default,\n                            { style: isActive(history, \"/reports\") },\n                            'Administraci\\xF3n'\n                        )\n                    ),\n                    auth.isAuthenticated().user && auth.isAuthenticated().user.employee && _react2.default.createElement(\n                        _reactRouterDom.Link,\n                        { to: '/shops/all' },\n                        _react2.default.createElement(\n                            _Button2.default,\n                            { style: isActive(history, \"/shops/all\") },\n                            'Proveedores'\n                        )\n                    ),\n                    auth.isAuthenticated().user && auth.isAuthenticated().user.employee && _react2.default.createElement(\n                        _reactRouterDom.Link,\n                        { to: '/users' },\n                        _react2.default.createElement(\n                            _Button2.default,\n                            { style: isActive(history, \"/users\") },\n                            'Empleados'\n                        )\n                    ),\n                    auth.isAuthenticated() && _react2.default.createElement(\n                        'span',\n                        null,\n                        auth.isAuthenticated().user.seller && _react2.default.createElement(\n                            _reactRouterDom.Link,\n                            { to: '/seller/shops' },\n                            _react2.default.createElement(\n                                _Button2.default,\n                                { style: isPartActive(history, \"/seller/\") },\n                                'Tienda'\n                            )\n                        ),\n                        _react2.default.createElement(\n                            _reactRouterDom.Link,\n                            { to: \"/user/\" + auth.isAuthenticated().user._id },\n                            _react2.default.createElement(\n                                _Button2.default,\n                                { style: isActive(history, \"/user/\" + auth.isAuthenticated().user._id) },\n                                _react2.default.createElement(_AccountCircle2.default, null)\n                            )\n                        ),\n                        _react2.default.createElement(\n                            _Button2.default,\n                            { color: 'inherit', onClick: function onClick() {\n                                    auth.signout(function () {\n                                        return history.push('/');\n                                    });\n                                } },\n                            _react2.default.createElement(_ExitToApp2.default, null),\n                            ' '\n                        )\n                    )\n                )\n            )\n        )\n    );\n});\n\nvar _default = Menu;\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(auth, 'auth', 'C:/Users/Ger/Documents/DESA/superdwn/client/core/Menu.js');\n    reactHotLoader.register(isActive, 'isActive', 'C:/Users/Ger/Documents/DESA/superdwn/client/core/Menu.js');\n    reactHotLoader.register(isPartActive, 'isPartActive', 'C:/Users/Ger/Documents/DESA/superdwn/client/core/Menu.js');\n    reactHotLoader.register(Menu, 'Menu', 'C:/Users/Ger/Documents/DESA/superdwn/client/core/Menu.js');\n    reactHotLoader.register(_default, 'default', 'C:/Users/Ger/Documents/DESA/superdwn/client/core/Menu.js');\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/core/Menu.js?");

/***/ }),

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar config = {\n  env: \"development\" || 'development',\n  port: process.env.PORT || 3000,\n  mongoUri: 'mongodb+srv://downwondb:downwonpass@cluster0.kcmdovh.mongodb.net/test' || process.env.MONGO_HOST || 'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGO_PORT || '27017') + '/mernproject'\n};\n\nvar _default = config;\nexports.default = _default;\n//mongodb+srv://adminDb:integracion123@tpointegracion-whfqh.azure.mongodb.net/test?retryWrites=true&w=majority\n\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(config, 'config', 'C:/Users/Ger/Documents/DESA/superdwn/config/config.js');\n  reactHotLoader.register(_default, 'default', 'C:/Users/Ger/Documents/DESA/superdwn/config/config.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./config/config.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _config = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar _webpack2 = _interopRequireDefault(_webpack);\n\nvar _webpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n\nvar _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);\n\nvar _webpackHotMiddleware = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n\nvar _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);\n\nvar _webpackConfigClient = __webpack_require__(/*! ./../webpack.config.client.js */ \"./webpack.config.client.js\");\n\nvar _webpackConfigClient2 = _interopRequireDefault(_webpackConfigClient);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar compile = function compile(app) {\n  if (_config2.default.env === \"development\") {\n    var compiler = (0, _webpack2.default)(_webpackConfigClient2.default);\n    var middleware = (0, _webpackDevMiddleware2.default)(compiler, {\n      publicPath: _webpackConfigClient2.default.output.publicPath\n    });\n    app.use(middleware);\n    app.use((0, _webpackHotMiddleware2.default)(compiler));\n  }\n};\n\nvar _default = {\n  compile: compile\n};\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(compile, 'compile', 'C:/Users/Ger/Documents/DESA/superdwn/server/devBundle.js');\n  reactHotLoader.register(_default, 'default', 'C:/Users/Ger/Documents/DESA/superdwn/server/devBundle.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/devBundle.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n\nvar _cookieParser2 = _interopRequireDefault(_cookieParser);\n\nvar _compression = __webpack_require__(/*! compression */ \"compression\");\n\nvar _compression2 = _interopRequireDefault(_compression);\n\nvar _cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nvar _helmet = __webpack_require__(/*! helmet */ \"helmet\");\n\nvar _helmet2 = _interopRequireDefault(_helmet);\n\nvar _template = __webpack_require__(/*! ./../template */ \"./template.js\");\n\nvar _template2 = _interopRequireDefault(_template);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _server2 = _interopRequireDefault(_server);\n\nvar _MainRouter = __webpack_require__(/*! ./../client/MainRouter */ \"./client/MainRouter.js\");\n\nvar _MainRouter2 = _interopRequireDefault(_MainRouter);\n\nvar _StaticRouter = __webpack_require__(/*! react-router-dom/StaticRouter */ \"react-router-dom/StaticRouter\");\n\nvar _StaticRouter2 = _interopRequireDefault(_StaticRouter);\n\nvar _jss = __webpack_require__(/*! react-jss/lib/jss */ \"react-jss/lib/jss\");\n\nvar _JssProvider = __webpack_require__(/*! react-jss/lib/JssProvider */ \"react-jss/lib/JssProvider\");\n\nvar _JssProvider2 = _interopRequireDefault(_JssProvider);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _devBundle = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n\nvar _devBundle2 = _interopRequireDefault(_devBundle);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\n// modules for server side rendering\n\n//end\n\n//comment out before building for production\n\n\nvar CURRENT_WORKING_DIR = process.cwd();\nvar app = (0, _express2.default)();\n\n//comment out before building for production\n_devBundle2.default.compile(app);\n\n// parse body params and attache them to req.body\napp.use(_bodyParser2.default.json());\napp.use(_bodyParser2.default.urlencoded({ extended: true }));\napp.use((0, _cookieParser2.default)());\napp.use((0, _compression2.default)());\n// secure apps by setting various HTTP headers\napp.use((0, _helmet2.default)());\n// enable CORS - Cross Origin Resource Shagsring\napp.use((0, _cors2.default)());\n\napp.use('/dist', _express2.default.static(_path2.default.join(CURRENT_WORKING_DIR, 'dist')));\n\n// mount routes\n\n\napp.get('*', function (req, res) {\n  var sheetsRegistry = new _jss.SheetsRegistry();\n  var generateClassName = (0, _styles.createGenerateClassName)();\n  var context = {};\n  var markup = _server2.default.renderToString(_react2.default.createElement(\n    'div',\n    null,\n    'hola'\n  ));\n\n  /*\n  ReactDOMServer.renderToString(\n     <StaticRouter location={req.url} context={context}>\n       <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>\n            <MainRouter/>\n       </JssProvider>\n    </StaticRouter>\n   */\n  if (context.url) {\n    return res.redirect(303, context.url);\n  }\n  var css = sheetsRegistry.toString();\n  res.status(200).send((0, _template2.default)({\n    markup: markup,\n    css: css\n  }));\n});\n\n// Catch unauthorised errors\napp.use(function (err, req, res, next) {\n  if (err.name === 'UnauthorizedError') {\n    res.status(401).json({ \"error\": err.name + \": \" + err.message });\n  }\n});\n\nvar _default = app;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, 'CURRENT_WORKING_DIR', 'C:/Users/Ger/Documents/DESA/superdwn/server/express.js');\n  reactHotLoader.register(app, 'app', 'C:/Users/Ger/Documents/DESA/superdwn/server/express.js');\n  reactHotLoader.register(_default, 'default', 'C:/Users/Ger/Documents/DESA/superdwn/server/express.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/express.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _config = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _express = __webpack_require__(/*! ./express */ \"./server/express.js\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Connection URL\n/*\nmongoose.Promise = global.Promise\nmongoose.connect(config.mongoUri)\nmongoose.connection.on('error', () => {\n  throw new Error(`unable to connect to database: ${mongoUri}`)\n})\n */\n\n_express2.default.listen(_config2.default.port, function (err) {\n  if (err) {\n    console.log(err);\n  }\n  console.info('Server started on port %s.', _config2.default.port);\n});\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar _default = function _default(_ref) {\n  var markup = _ref.markup,\n      css = _ref.css;\n\n  return \"<!doctype html>\\n      <html lang=\\\"en\\\">\\n        <head>\\n          <meta charset=\\\"utf-8\\\">\\n          <title>Supermerk2</title>\\n          <link rel=\\\"stylesheet\\\" href=\\\"https://fonts.googleapis.com/css?family=Roboto:100,300,400\\\">\\n          <link rel=\\\"stylesheet\\\" href=\\\"https://fonts.googleapis.com/icon?family=Material+Icons\\\">\\n          <style>\\n              a{\\n                text-decoration: none\\n              }\\n          </style>\\n        </head>\\n        <body style=\\\"margin:0;font-family: 'Proxima Nova',-apple-system,'Helvetica Neue',Helvetica,Roboto,Arial,sans-serif,sans-serif;\\\">\\n          <div id=\\\"root\\\">\" + markup + \"</div>\\n          <style id=\\\"jss-server-side\\\">\" + css + \"</style>\\n          <script id=\\\"stripe-js\\\" src=\\\"https://js.stripe.com/v3/\\\" async></script>\\n          <script type=\\\"text/javascript\\\" src=\\\"/dist/bundle.js\\\"></script>\\n        </body>\\n      </html>\";\n};\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"C:/Users/Ger/Documents/DESA/superdwn/template.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nvar path = __webpack_require__(/*! path */ \"path\");\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\nvar CURRENT_WORKING_DIR = process.cwd();\n\nvar config = {\n    name: \"browser\",\n    mode: \"development\",\n    devtool: 'eval-source-map',\n    entry: ['react-hot-loader/patch', 'webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, 'client/main.js')],\n    output: {\n        path: path.join(CURRENT_WORKING_DIR, '/dist'),\n        filename: 'bundle.js',\n        publicPath: '/dist/'\n    },\n    module: {\n        rules: [{\n            test: /\\.jsx?$/,\n            exclude: /node_modules/,\n            use: ['babel-loader']\n        }, {\n            test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\n            use: 'file-loader'\n        }]\n    }, plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]\n};\n\nmodule.exports = config;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(CURRENT_WORKING_DIR, 'CURRENT_WORKING_DIR', 'C:/Users/Ger/Documents/DESA/superdwn/webpack.config.client.js');\n    reactHotLoader.register(config, 'config', 'C:/Users/Ger/Documents/DESA/superdwn/webpack.config.client.js');\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./webpack.config.client.js?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./server/server.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! C:\\Users\\Ger\\Documents\\DESA\\superdwn\\server\\server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_./server/server.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "material-ui-icons/AccountCircle":
/*!**************************************************!*\
  !*** external "material-ui-icons/AccountCircle" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/AccountCircle\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/AccountCircle%22?");

/***/ }),

/***/ "material-ui-icons/ExitToApp":
/*!**********************************************!*\
  !*** external "material-ui-icons/ExitToApp" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/ExitToApp\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/ExitToApp%22?");

/***/ }),

/***/ "material-ui-icons/Home":
/*!*****************************************!*\
  !*** external "material-ui-icons/Home" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/Home\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/Home%22?");

/***/ }),

/***/ "material-ui-icons/ShoppingCart":
/*!*************************************************!*\
  !*** external "material-ui-icons/ShoppingCart" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/ShoppingCart\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/ShoppingCart%22?");

/***/ }),

/***/ "material-ui/AppBar":
/*!*************************************!*\
  !*** external "material-ui/AppBar" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/AppBar\");\n\n//# sourceURL=webpack:///external_%22material-ui/AppBar%22?");

/***/ }),

/***/ "material-ui/Badge":
/*!************************************!*\
  !*** external "material-ui/Badge" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Badge\");\n\n//# sourceURL=webpack:///external_%22material-ui/Badge%22?");

/***/ }),

/***/ "material-ui/Button":
/*!*************************************!*\
  !*** external "material-ui/Button" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Button\");\n\n//# sourceURL=webpack:///external_%22material-ui/Button%22?");

/***/ }),

/***/ "material-ui/IconButton":
/*!*****************************************!*\
  !*** external "material-ui/IconButton" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/IconButton\");\n\n//# sourceURL=webpack:///external_%22material-ui/IconButton%22?");

/***/ }),

/***/ "material-ui/Toolbar":
/*!**************************************!*\
  !*** external "material-ui/Toolbar" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Toolbar\");\n\n//# sourceURL=webpack:///external_%22material-ui/Toolbar%22?");

/***/ }),

/***/ "material-ui/Typography":
/*!*****************************************!*\
  !*** external "material-ui/Typography" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Typography\");\n\n//# sourceURL=webpack:///external_%22material-ui/Typography%22?");

/***/ }),

/***/ "material-ui/styles":
/*!*************************************!*\
  !*** external "material-ui/styles" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/styles\");\n\n//# sourceURL=webpack:///external_%22material-ui/styles%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader%22?");

/***/ }),

/***/ "react-jss/lib/JssProvider":
/*!********************************************!*\
  !*** external "react-jss/lib/JssProvider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-jss/lib/JssProvider\");\n\n//# sourceURL=webpack:///external_%22react-jss/lib/JssProvider%22?");

/***/ }),

/***/ "react-jss/lib/jss":
/*!************************************!*\
  !*** external "react-jss/lib/jss" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-jss/lib/jss\");\n\n//# sourceURL=webpack:///external_%22react-jss/lib/jss%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "react-router-dom/StaticRouter":
/*!************************************************!*\
  !*** external "react-router-dom/StaticRouter" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom/StaticRouter\");\n\n//# sourceURL=webpack:///external_%22react-router-dom/StaticRouter%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });