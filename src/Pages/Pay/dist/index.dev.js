"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=Pay;var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _Components=require("../../Components");var _reactNativeQrcodeScanner=_interopRequireDefault(require("react-native-qrcode-scanner"));var _reactNativeCamera=require("react-native-camera");var _jsxFileName="/home/matheus/Projects/SmartMarket/src/Pages/Pay/index.js";function Pay(_ref){var navigation=_ref.navigation;function onRead(e){console.log("scanned");navigation.navigate('WaitingSensor');}return _react["default"].createElement(_Components.Container,{__self:this,__source:{fileName:_jsxFileName,lineNumber:16,columnNumber:9}},_react["default"].createElement(_reactNativeQrcodeScanner["default"],{onRead:onRead,containerStyle:{flex:1},showMarker:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:17,columnNumber:13}}));}