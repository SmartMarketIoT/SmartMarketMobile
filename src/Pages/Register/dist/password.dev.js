"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=Password;var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _Components=require("../../Components");var _jsxFileName="/home/matheus/Projects/SmartMarket/src/Pages/Register/password.js";function Password(_ref){var navigation=_ref.navigation;return _react["default"].createElement(_Components.Container,{__self:this,__source:{fileName:_jsxFileName,lineNumber:16,columnNumber:9}},_react["default"].createElement(_Components.ContentContainer,{__self:this,__source:{fileName:_jsxFileName,lineNumber:17,columnNumber:13}},_react["default"].createElement(_Components.BackButton,{onButtonPress:function onButtonPress(){navigation.goBack();},__self:this,__source:{fileName:_jsxFileName,lineNumber:18,columnNumber:17}}),_react["default"].createElement(_Components.PageTitle,{text:"Senha",__self:this,__source:{fileName:_jsxFileName,lineNumber:23,columnNumber:17}}),_react["default"].createElement(_reactNative.View,{__self:this,__source:{fileName:_jsxFileName,lineNumber:24,columnNumber:17}},_react["default"].createElement(_Components.InputLabel,{text:"Escolha uma senha para usar o app",__self:this,__source:{fileName:_jsxFileName,lineNumber:25,columnNumber:21}}),_react["default"].createElement(_Components.TextInput,{__self:this,__source:{fileName:_jsxFileName,lineNumber:26,columnNumber:21}})),_react["default"].createElement(_Components.Button,{title:"Pr\xF3ximo",onButtonPress:function onButtonPress(){navigation.navigate('PasswordConfirm');},__self:this,__source:{fileName:_jsxFileName,lineNumber:29,columnNumber:17}})));}