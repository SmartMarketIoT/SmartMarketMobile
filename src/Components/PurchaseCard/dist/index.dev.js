"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireDefault(require("react"));var _styles=require("./styles");var _this=void 0,_jsxFileName="/home/matheus/Projects/SmartMarket/src/Components/PurchaseCard/index.js";var ProductCard=function ProductCard(_ref){var Title=_ref.Title,Price=_ref.Price,Id=_ref.Id;return _react["default"].createElement(_styles.CardContainer,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:6,columnNumber:5}},Title?_react["default"].createElement(_styles.CardTitle,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:7,columnNumber:18}},Title):null,_react["default"].createElement(_styles.CardPrice,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:8,columnNumber:9}},"Pre\xE7o: ",_react["default"].createElement(_styles.CardPriceGreen,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:8,columnNumber:27}},"R$ ",Price)),_react["default"].createElement(_styles.CardId,{__self:_this,__source:{fileName:_jsxFileName,lineNumber:9,columnNumber:9}},"Id: ",Id));};var _default=ProductCard;exports["default"]=_default;