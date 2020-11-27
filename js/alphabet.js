var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Alphabet = (function (_super) {
    __extends(Alphabet, _super);
    function Alphabet(level) {
        var _this = _super.call(this, level) || this;
        var length = level.length;
        _this.answer = "abcdefghijklmnopqrstuvwxyz";
        _this.answer = _this.answer.substr(0, length);
        return _this;
    }
    Alphabet.prototype.display = function (state) {
        var buffer = "Alphabet<br/>--------<br/>\n";
        buffer += "Level length: " + this.level.length + "<br/>\n";
        buffer += this.level + "<br/>\n";
        buffer += state + "<br/>\n";
        return buffer;
    };
    Alphabet.prototype.findmoves = function (state) {
        var validmoves = [];
        for (var i = 0; i < state.length - 1; i++) {
            if (state[i] > state[i + 1]) {
                validmoves.push(i);
            }
        }
        return validmoves;
    };
    Alphabet.prototype.isfinished = function (state) {
        return state == this.answer;
    };
    Alphabet.prototype.makemove = function (state, move) {
        return state.swapStr(move, move + 1);
    };
    return Alphabet;
}(BaseGame));
function test() {
    var alpha = new Alphabet("flbjghaemkcid");
    alpha.solve();
    console.log(alpha.output);
}
