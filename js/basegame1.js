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
        this.output = "Not implemented";
        this.output2 = "Not implemented";
        this.output3 = "Not implemented";
        this.movesdenominator = 2;
        this.sanitylevel = 1000;
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
    BaseGame.prototype.solve = function (removemethod) {
        var t0 = performance.now();
        var currstate = "";
        var currmoves = "";
        var done = false;
        var sanity = 0;
        this.output = "";
        this.output2 = "";
        this.output3 = "";
        var donestate = "";
        var donemoves = [];
        if (this.isfinished(this.level)) {
            donestate = this.states.pop();
            done = true;
        }
        while (this.states.length > 0) {
            sanity++;
            if (sanity == this.sanitylevel) {
                this.output = "something wrong with the algorithm\n\n";
                break;
            }
            if (removemethod == 1) {
                currstate = this.states.pop();
                currmoves = this.moves.pop();
            }
            if (removemethod == 2) {
                currstate = this.states.shift();
                currmoves = this.moves.shift();
            }
            if (this.isfinished(currstate)) {
                done = true;
                break;
            }
            var newmoves = this.findmoves(currstate);
            if (newmoves.length == 0) {
                continue;
            }
            for (var i = 0; i < newmoves.length; i++) {
                var newstate = this.makemove(currstate, newmoves[i]);
                if (this.isfinished(newstate)) {
                    done = true;
                    donestate = newstate;
                    donemoves = currmoves + " " + newmoves[i];
                    break;
                }
                if (this.usedstates.indexOf(newstate) !== -1) {
                    continue;
                }
                this.usedstates.push(newstate);
                this.states.push(newstate);
                var newmove = currmoves + " " + newmoves[i];
                this.moves.push(newmove);
            }
            if (done) {
                break;
            }
        }
        if (done) {
            this.output = "Game finished!\n\n";
            this.output += this.display(donestate) + "\n\n";
            this.output2 = "Moves:" + donemoves + "\n\n";
            this.output2 += "# moves: " + donemoves.length / this.movesdenominator + "\n\n";
            this.output2 += "# used states: " + this.usedstates.length + "\n\n";
        }
        else {
            this.output = "Unsolvable?\n\n";
            this.output += this.display(donestate) + "\n\n";
            this.output2 = "# used states: " + this.usedstates.length + "\n\n";
        }
        var t1 = performance.now();
        var diff = Math.round(((t1 - t0) + Number.EPSILON) * 100) / 100000;
        this.output += "\n\nsolve() tok " + diff + " seconds to complete.";
    };
    return BaseGame;
}());
