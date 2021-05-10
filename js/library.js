"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
String.prototype.swapStr = function (first, last) {
    if (first == last) {
        return this;
    }
    if (last < first) {
        var temp = last;
        last = first;
        first = temp;
    }
    if (first >= this.length) {
        return this;
    }
    return this.substring(0, first) + this[last] +
        this.substring(first + 1, last) + this[first] +
        this.substring(last + 1);
};
String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
};
