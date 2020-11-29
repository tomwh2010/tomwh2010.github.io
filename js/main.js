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
var BaseGame = (function () {
    function BaseGame(level) {
        this.moves = [];
        this.states = [];
        this.level = level;
        this.states.push(level);
        this.moves.push("");
        this.usedstates = [];
        this.nummoves = 0;
        this.counter = 0;
        this.output = "";
    }
    BaseGame.prototype.makemove = function (state, move) {
        console.log("Override makemove(), please!");
        return "";
    };
    BaseGame.prototype.findmoves = function (state) {
        console.log("Override findmoves(), please!");
        return [];
    };
    BaseGame.prototype.isfinished = function (state) {
        console.log("Override isfinished(), please!");
        return false;
    };
    BaseGame.prototype.display = function (state) {
        console.log("Override display(), please!");
    };
    BaseGame.prototype.solve = function () {
        var currstate = "";
        var currmoves = "";
        var t0 = performance.now();
        var counter = 0;
        var done = false;
        var sanity = 0;
        while (this.states.length > 0) {
            currstate = this.states.pop();
            currmoves = this.moves.pop();
            if (this.isfinished(currstate)) {
                done = true;
                break;
            }
            var newmoves = this.findmoves(currstate);
            if (newmoves.length == 0) {
                console.log("no moves to play?");
                continue;
            }
            sanity++;
            if (sanity % 100 == 0) {
                console.log("100");
            }
            if (sanity == 100) {
                this.output = "something wrong with the algorithm\n\n";
                break;
            }
            console.log(newmoves);
            for (var i = 0; i < newmoves.length; i++) {
                var newstate = this.makemove(currstate, newmoves[i]);
                if (this.usedstates.indexOf(newstate) !== -1)
                    continue;
                this.usedstates.push(newstate);
                this.states.push(newstate);
                var newmove = currmoves + " " + newmoves[i];
                this.moves.push(newmove);
                var currentmovecount = newmove.length / 2;
                this.counter += 1;
                var nummoves = 0;
                if (currentmovecount > nummoves) {
                    this.counter = 0;
                    nummoves = currentmovecount;
                }
            }
        }
        if (done) {
            this.output = "Game finished\n\n";
            this.output += this.display(currstate) + "\n\n";
            this.output += "Moves:" + currmoves + "\n\n";
            this.output += "# moves: " + currmoves.length / 2 + "\n\n";
            this.output += "# used states: " + this.usedstates.length + "\n\n";
        }
        else {
            this.output = "Unsolvable?\n\n";
            this.output += this.display(currstate) + "\n\n";
            this.output += "# used states: " + this.usedstates.length + "\n\n";
        }
        var t1 = performance.now();
        var diff = Math.round(((t1 - t0) + Number.EPSILON) * 100) / 100;
        this.output += "\n\nsolve() tok " + diff + " milliseconds to complete.";
    };
    return BaseGame;
}());
define("library", ["require", "exports"], function (require, exports) {
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
});
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
        var buffer = "Alphabet\n--------\n";
        buffer += "Level length: " + this.level.length + "\n\n";
        buffer += this.level + "\n\n";
        buffer += state + "\n\n";
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
function testAlphabet() {
    var alpha = new Alphabet("flbjghaemkcid");
    alpha.solve();
    console.log(alpha.output);
}
var MoveTheBox = (function (_super) {
    __extends(MoveTheBox, _super);
    function MoveTheBox(level) {
        return _super.call(this, level) || this;
    }
    MoveTheBox.prototype.display = function (state) {
        var buffer = "MoveTheBox\n--------\n\n";
        buffer += "Initial state\tEnd state\n";
        for (var i = 0; i < 9; i++) {
            buffer += this.level.slice(i * 7, i * 7 + 7) + "\t\t" + state.slice(i * 7, i * 7 + 7) + "\n";
        }
        return buffer;
    };
    MoveTheBox.prototype.isfinished = function (state) {
        return state == "...............................................................";
    };
    MoveTheBox.prototype.findmoves = function (state) {
        var validmoves = [];
        for (var i = 0; i < state.length; i++) {
            if (state[i] != ".") {
                var left = true;
                var up = true;
                var right = true;
                if (i < 7)
                    up = false;
                if (i % 7 == 0)
                    left = false;
                if (i % 7 == 6)
                    right = false;
                if (up && state[i - 7] == ".") {
                    up = false;
                }
                if (up && state[i] == state[i - 7]) {
                    up = false;
                }
                if (left && state[i] == state[i - 1]) {
                    left = false;
                }
                if (right && state[i] == state[i + 1]) {
                    right = false;
                }
                var num = i.toString();
                if (i < 10)
                    num = "0" + num;
                if (left)
                    validmoves.push(num + "L");
                if (up)
                    validmoves.push(num + "U");
                if (right)
                    validmoves.push(num + "R");
            }
        }
        return validmoves;
    };
    MoveTheBox.prototype.makemove = function (state, move) {
        var local_state = state.slice(0);
        var index = parseInt(move.substr(0, 2), 10);
        var direction = move.substr(2, 1);
        var delta = 0;
        if (direction == "L")
            delta = -1;
        if (direction == "U")
            delta = -7;
        if (direction == "R")
            delta = 1;
        local_state = local_state.swapStr(index + delta, index);
        var onemoretime = 1;
        var returnvalue = [];
        var sanity = 0;
        while (onemoretime > 0) {
            if (this.isfinished(local_state)) {
                console.log("we're done");
                break;
            }
            sanity++;
            if (sanity == 10) {
                console.log("sanity?!?");
                break;
            }
            onemoretime = 0;
            returnvalue = this.removecharacters(local_state);
            onemoretime += returnvalue[0];
            local_state = returnvalue[1].slice(0);
            returnvalue = this.gravity(local_state);
            onemoretime += returnvalue[0];
            local_state = returnvalue[1].slice(0);
        }
        return local_state;
    };
    MoveTheBox.prototype.gravity = function (state) {
        var local_state = state.slice(0);
        var tainted = 1;
        var change = true;
        var sanity = 0;
        while (change) {
            sanity++;
            if (sanity == 10000) {
                console.log("sanity?!?");
                break;
            }
            change = false;
            for (var i = 0; i < 56; i++) {
                if (local_state[i] != "." && local_state[i + 7] == ".") {
                    local_state = local_state.swapStr(i + 7, i);
                    change = true;
                    tainted = 1;
                }
            }
        }
        return [tainted, local_state];
    };
    MoveTheBox.prototype.removecharacters = function (state) {
        var local_level_o = state.slice(0);
        var local_level_h = state.slice(0);
        var local_level_v = state.slice(0);
        var tainted = 0;
        var count = 0;
        var box = "";
        for (var y = 0; y < 9; y++) {
            for (var x = 0; x < 5; x++) {
                count = 0;
                if (local_level_h[y * 7 + x] != ".") {
                    box = local_level_h[y * 7 + x];
                    count = 1;
                    for (var j = x + 1; j < 7; j++) {
                        if (local_level_h[y * 7 + j] == box) {
                            count++;
                        }
                        else {
                            break;
                        }
                    }
                }
                if (count > 2) {
                    for (var j = x; j < x + count; j++) {
                        local_level_h = local_level_h.replaceAt(y * 7 + j, "1");
                    }
                    x += count - 1;
                }
            }
        }
        for (var x = 0; x < 7; x++) {
            for (var y = 0; y < 7; y++) {
                count = 0;
                if (local_level_v[y * 7 + x] != ".") {
                    box = local_level_v[y * 7 + x];
                    count = 1;
                    for (var j = y + 1; j < 9; j++) {
                        if (local_level_v[j * 7 + x] == box) {
                            count++;
                        }
                        else {
                            break;
                        }
                    }
                }
                if (count > 2) {
                    for (var j = y; j < y + count; j++) {
                        local_level_v = local_level_v.replaceAt(j * 7 + x, "1");
                    }
                    x += count - 1;
                }
            }
        }
        for (var i = 0; i < 63; i++) {
            if (local_level_v[i] == "1") {
                tainted = 1;
                local_level_o = local_level_o.replaceAt(i, ".");
            }
            if (local_level_h[i] == "1") {
                tainted = 1;
                local_level_o = local_level_o.replaceAt(i, ".");
            }
        }
        return [tainted, local_level_o];
    };
    return MoveTheBox;
}(BaseGame));
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
    sudo.solve();
    console.log(sudo.output);
}
