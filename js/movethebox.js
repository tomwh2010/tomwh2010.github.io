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
var MoveTheBox = (function (_super) {
    __extends(MoveTheBox, _super);
    function MoveTheBox(level) {
        var _this = _super.call(this, level) || this;
        _this.movesdenominator = 4;
        return _this;
    }
    MoveTheBox.prototype.display = function (state) {
        var buffer = "MoveTheBox\n--------\n\n";
        buffer += "Initial state\n";
        var temp = "";
        for (var i = 0; i < 9; i++) {
            temp = (i * 7).toString();
            if ((i * 7) < 10) {
                temp = "0" + temp;
            }
            buffer += temp + " " + this.level.slice(i * 7, i * 7 + 7) + "\n";
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
        var returnvalue = "";
        var returnvalue2 = "";
        var sanity = 0;
        while (1) {
            if (this.isfinished(local_state)) {
                break;
            }
            sanity++;
            if (sanity == 100) {
                break;
            }
            returnvalue = this.gravity(local_state);
            returnvalue2 = this.removecharacters(returnvalue.slice(0));
            if (returnvalue == returnvalue2) {
                break;
            }
            local_state = returnvalue2.slice(0);
        }
        return returnvalue2.slice(0);
    };
    MoveTheBox.prototype.gravity = function (state) {
        var local_state = state.slice(0);
        var change = true;
        var sanity = 0;
        while (change) {
            sanity++;
            if (sanity == 10000) {
                break;
            }
            change = false;
            for (var i = 0; i < 56; i++) {
                if (local_state[i] != "." && local_state[i + 7] == ".") {
                    local_state = local_state.swapStr(i + 7, i);
                    change = true;
                }
            }
        }
        return local_state;
    };
    MoveTheBox.prototype.removecharacters = function (state) {
        var local_level_o = state.slice(0);
        var local_level_h = state.slice(0);
        var local_level_v = state.slice(0);
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
                local_level_o = local_level_o.replaceAt(i, ".");
            }
            if (local_level_h[i] == "1") {
                local_level_o = local_level_o.replaceAt(i, ".");
            }
        }
        return local_level_o;
    };
    return MoveTheBox;
}(BaseGame));
