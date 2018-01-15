let player1 = {
    get maxScore() {
        return localStorage.getItem('score1');
    },

    get maxCoin() {
        return localStorage.getItem('score2');
    },

    get maxTime() {
        return localStorage.getItem('score3');
    },

    set maxScore(newScore) {
        localStorage.setItem('score1', newScore);
    },

    set maxCoin(newCoin) {
        localStorage.setItem('score2', newCoin);
    },

    set maxScore(newTime) {
        localStorage.setItem('score3', newTime);
    },

};

let player2 = {
    get maxScore() {
        return localStorage.getItem('score4');
    },

    get maxCoin() {
        return localStorage.getItem('score5');
    },

    get maxTime() {
        return localStorage.getItem('score6');
    },

    set maxScore(newScore) {
        localStorage.setItem('score4', newScore);
    },

    set maxCoin(newCoin) {
        localStorage.setItem('score5', newCoin);
    },

    set maxScore(newTime) {
        localStorage.setItem('score6', newTime);
    },

};

let player3 = {
    get maxScore() {
        return localStorage.getItem('score7');
    },

    get maxCoin() {
        return localStorage.getItem('score8');
    },

    get maxTime() {
        return localStorage.getItem('score9');
    },

    set maxScore(newScore) {
        localStorage.setItem('score7', newScore);
    },

    set maxCoin(newCoin) {
        localStorage.setItem('score8', newCoin);
    },

    set maxScore(newTime) {
        localStorage.setItem('score9', newTime);
    },

};

let player4 = {
    get maxScore() {
        return localStorage.getItem('score10');
    },

    get maxCoin() {
        return localStorage.getItem('score11');
    },

    get maxTime() {
        return localStorage.getItem('score12');
    },

    set maxScore(newScore) {
        localStorage.setItem('score10', newScore);
    },

    set maxCoin(newCoin) {
        localStorage.setItem('score11', newCoin);
    },

    set maxScore(newTime) {
        localStorage.setItem('score12', newTime);
    },

};

function getAllPlayerScores() {
    let arr = [];
    arr.push(player1);
    arr.push(player2);
    arr.push(player3);
    arr.push(player4);
    return arr;
}