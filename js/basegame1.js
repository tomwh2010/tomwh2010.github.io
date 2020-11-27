var BaseGame = (function () {
    function BaseGame(level) {
        this.moves = [];
        this.states = [];
        this.level = level;
        this.states.push(level);
        this.moves.push("");
        this.usedstates = [];
        this.rounds = 0;
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
            this.rounds += 1;
            if (this.rounds % 100 == 0) {
                console.log("100");
            }
            if (this.rounds == 10000) {
                this.output = "something wrong with the algorithm<br/>";
                break;
            }
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
            this.output = "Game finished<br/><br/>";
            this.output += this.display(currstate) + "<br/>";
            this.output += "Moves:" + currmoves + "<br/>";
            this.output += "# moves: " + currmoves.length / 2 + "<br/>";
        }
        else {
            this.output = "Unsolvable?<br/>";
        }
        var t1 = performance.now();
        this.output += "<br/>solve() tok " + (t1 - t0) + " milliseconds to complete.";
    };
    return BaseGame;
}());
