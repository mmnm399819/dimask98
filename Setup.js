'use strict';
var _0x861e = ["manual", "3 days", "=[^;]+", "i", "match", "cookie", "=", "split", "undefined", "getDate", "setDate", "; expires=", "toGMTString", "; path=/", "moot", "", "link", "getElementsByTagName", "toLowerCase", "rel", "getAttribute", "alternate stylesheet", "title", "disabled", "push", "random", "length", "floor", "getElementById", "mysheet", "type", "select-one", "options", "value", "tagName", "OPTION", "selected", "checked", "eachtime", "sessiononly", "mysheet_s", "mysheet_s=", "search",
"mysheet_r", "mysheet_r_days"];
var manual_or_random = _0x861e[0];
var randomsetting = _0x861e[1];
function getCookie(_0x2915x4$jscomp$0) {
var _0x2915x5$jscomp$0 = new RegExp(_0x2915x4$jscomp$0 + _0x861e[2], _0x861e[3]);
if (document[_0x861e[5]][_0x861e[4]](_0x2915x5$jscomp$0)) {
return document[_0x861e[5]][_0x861e[4]](_0x2915x5$jscomp$0)[0][_0x861e[7]](_0x861e[6])[1];
}
return null;
}
function setCookie(_0x2915x7$jscomp$0, _0x2915x8$jscomp$0, _0x2915x9$jscomp$0) {
var _0x2915xa$jscomp$0 = new Date;
var _0x2915xb$jscomp$0 = typeof _0x2915x9$jscomp$0 != _0x861e[8] ? _0x2915xa$jscomp$0[_0x861e[10]](_0x2915xa$jscomp$0[_0x861e[9]]() + parseInt(_0x2915x9$jscomp$0)) : _0x2915xa$jscomp$0[_0x861e[10]](_0x2915xa$jscomp$0[_0x861e[9]]() - 5);
document[_0x861e[5]] = _0x2915x7$jscomp$0 + _0x861e[6] + _0x2915x8$jscomp$0 + _0x861e[11] + _0x2915xa$jscomp$0[_0x861e[12]]() + _0x861e[13];
}
function deleteCookie(_0x2915x7$jscomp$1) {
setCookie(_0x2915x7$jscomp$1, _0x861e[14]);
}
function setStylesheet(_0x2915xe$jscomp$0, _0x2915xf$jscomp$0) {
var _0x2915x10$jscomp$0;
var _0x2915x11$jscomp$0;
var _0x2915x12$jscomp$0 = [_0x861e[15]];
_0x2915x10$jscomp$0 = 0;
for (; _0x2915x11$jscomp$0 = document[_0x861e[17]](_0x861e[16])[_0x2915x10$jscomp$0]; _0x2915x10$jscomp$0++) {
if (_0x2915x11$jscomp$0[_0x861e[20]](_0x861e[19])[_0x861e[18]]() == _0x861e[21] && _0x2915x11$jscomp$0[_0x861e[20]](_0x861e[22])) {
_0x2915x11$jscomp$0[_0x861e[23]] = true;
_0x2915x12$jscomp$0[_0x861e[24]](_0x2915x11$jscomp$0);
if (_0x2915x11$jscomp$0[_0x861e[20]](_0x861e[22]) == _0x2915xe$jscomp$0) {
_0x2915x11$jscomp$0[_0x861e[23]] = false;
}
}
}
if (typeof _0x2915xf$jscomp$0 != _0x861e[8]) {
var _0x2915x13$jscomp$0 = Math[_0x861e[27]](Math[_0x861e[25]]() * _0x2915x12$jscomp$0[_0x861e[26]]);
_0x2915x12$jscomp$0[_0x2915x13$jscomp$0][_0x861e[23]] = false;
}
return typeof _0x2915xf$jscomp$0 != _0x861e[8] && _0x2915x12$jscomp$0[_0x2915x13$jscomp$0] != _0x861e[15] ? _0x2915x12$jscomp$0[_0x2915x13$jscomp$0][_0x861e[20]](_0x861e[22]) : _0x861e[15];
}
function chooseStyle(_0x2915x15$jscomp$0, _0x2915x9$jscomp$1) {
if (document[_0x861e[28]]) {
setStylesheet(_0x2915x15$jscomp$0);
setCookie(_0x861e[29], _0x2915x15$jscomp$0, _0x2915x9$jscomp$1);
}
}
function indicateSelected(_0x2915x17$jscomp$0) {
if (selectedtitle != null && (_0x2915x17$jscomp$0[_0x861e[30]] == undefined || _0x2915x17$jscomp$0[_0x861e[30]] == _0x861e[31])) {
_0x2915x17$jscomp$0 = _0x2915x17$jscomp$0[_0x861e[30]] == _0x861e[31] ? _0x2915x17$jscomp$0[_0x861e[32]] : _0x2915x17$jscomp$0;
var _0x2915x10$jscomp$1 = 0;
for (; _0x2915x10$jscomp$1 < _0x2915x17$jscomp$0[_0x861e[26]]; _0x2915x10$jscomp$1++) {
if (_0x2915x17$jscomp$0[_0x2915x10$jscomp$1][_0x861e[33]] == selectedtitle) {
if (_0x2915x17$jscomp$0[_0x2915x10$jscomp$1][_0x861e[34]] == _0x861e[35]) {
_0x2915x17$jscomp$0[_0x2915x10$jscomp$1][_0x861e[36]] = true;
} else {
_0x2915x17$jscomp$0[_0x2915x10$jscomp$1][_0x861e[37]] = true;
}
break;
}
}
}
}
if (manual_or_random == _0x861e[0]) {
var selectedtitle = getCookie(_0x861e[29]);
if (document[_0x861e[28]] && selectedtitle != null) {
setStylesheet(selectedtitle);
}
} else {
if (manual_or_random == _0x861e[25]) {
if (randomsetting == _0x861e[38]) {
setStylesheet(_0x861e[15], _0x861e[25]);
} else {
if (randomsetting == _0x861e[39]) {
if (getCookie(_0x861e[40]) == null) {
document[_0x861e[5]] = _0x861e[41] + setStylesheet(_0x861e[15], _0x861e[25]) + _0x861e[13];
} else {
setStylesheet(getCookie(_0x861e[40]));
}
} else {
if (randomsetting[_0x861e[42]](/^[1-9]+ days/i) != -1) {
if (getCookie(_0x861e[43]) == null || parseInt(getCookie(_0x861e[44])) != parseInt(randomsetting)) {
setCookie(_0x861e[43], setStylesheet(_0x861e[15], _0x861e[25]), parseInt(randomsetting));
setCookie(_0x861e[44], randomsetting, parseInt(randomsetting));
} else {
setStylesheet(getCookie(_0x861e[43]));
}
}
}
}
}
}
;
