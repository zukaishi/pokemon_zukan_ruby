['name', 'subname', 'name__loadItem',''].forEach(value => elementReplace(document.getElementsByClassName(value)));

function elementReplace(element: HTMLCollectionBase ): void {
    for (var i = 0; i < element.length; i++) {
        let str = element[i].innerHTML;
        element[i].innerHTML = 
            '<ruby>' + 
            str + 
            '<rt>' +
            katakanaToHiragana(str) + 
            '</rt></ruby>'
    }
}

function katakanaToHiragana(str: string): string {
    return str.replace(/[\u30a1-\u30f6]/g, function (match) {
        var chr = match.charCodeAt(0) - 0x60;
        return String.fromCharCode(chr);
    });
}