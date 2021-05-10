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
var Sudoku = (function (_super) {
    __extends(Sudoku, _super);
    function Sudoku(level) {
        var _this = _super.call(this, level) || this;
        var length = level.length;
        _this.answer = "abcdefghijklmnopqrstuvwxyz";
        _this.answer = _this.answer.substr(0, length);
        return _this;
    }
    Sudoku.prototype.display = function (state) {
        var buffer = "Sudoku\n--------\n";
        buffer += this.level + "\n\n";
        buffer += state + "\n\n";
        return buffer;
    };
    Sudoku.prototype.findmoves = function (state) {
        var index = 0;
        for (var y = 0; y < 9; y++) {
            for (var x = 0; x < 9; x++) {
                index = y * 9 + x;
                if (state[index] == '0') {
                    var newmoves = [];
                    for (var n = 1; n < 10; n++) {
                        if (this.possible(state, x, y, n.toString())) {
                            var el = y.toString() + "_" + x.toString() + "_" + n.toString();
                            newmoves.push(el);
                        }
                    }
                    return newmoves;
                }
            }
        }
        return [];
    };
    Sudoku.prototype.possible = function (state, x, y, n) {
        var index = 0;
        for (var i = 0; i < 9; i++) {
            index = y * 9 + i;
            if (state[index] == n)
                return false;
        }
        for (var i = 0; i < 9; i++) {
            index = i * 9 + x;
            if (state[index] == n)
                return false;
        }
        var x0 = Math.floor(y / 3) * 3;
        var y0 = Math.floor(x / 3) * 3;
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                index = (y0 + i) * 9 + x0 + j;
                if (state[index] == n) {
                    return false;
                }
            }
        }
        return true;
    };
    Sudoku.prototype.isfinished = function (state) {
        for (var i = 0; i < 81; i++) {
            if (state[i] == '0') {
                return false;
            }
        }
        return true;
    };
    Sudoku.prototype.makemove = function (state, move) {
        console.log(move);
        var move_list = move.toString().split("_");
        var x = parseInt(move_list[0].toString(), 10);
        var y = parseInt(move_list[1].toString(), 10);
        var num = move_list[2].toString();
        var index = y * 9 + x;
        if (state[index] == '0') {
            state = state.replaceAt(index, num);
        }
        else {
            console.log("wrong move");
        }
        return state;
    };
    return Sudoku;
}(BaseGame));
function testSudoku() {
    var sudo = new Sudoku("flbjghaemkcid");
    sudo.solve(1);
    console.log(sudo.output);
}
