"use strict";
['name', 'subname', 'name__loadItem', ''].forEach(function (value) { return elementReplace(document.getElementsByClassName(value)); });
function elementReplace(element) {
    for (var i = 0; i < element.length; i++) {
        var str = element[i].innerHTML;
        element[i].innerHTML =
            '<ruby>' +
                str +
                '<rt>' +
                katakanaToHiragana(str) +
                '</rt></ruby>';
    }
}
function katakanaToHiragana(str) {
    return str.replace(/[\u30a1-\u30fc]/g, function (match) {
        var chr = match.charCodeAt(0) - 0x60;
        return String.fromCharCode(chr);
    });
}
