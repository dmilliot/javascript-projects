const rps = require('../RPS.js');

describe('whoWon', function() {

    test("should return 'TIE!' when the players choose the same.", function() {
        let output = rps.whoWon('rock', 'rock');
        expect(output).toEqual('TIE!');
    });
    test("should return 'Player 2 wins!' if player 1 = rock & player 2 = paper", function() {
        let output = rps.whoWon('rock', 'paper');
        expect(output).toBe("Player 2 wins!");
    });
    test("should return 'Player 2 wins!' if player = paper & player 2 = scissors", function() {
        let output = rps.whoWon('paper', 'scissors');
        expect(output).toBe("Player 2 wins");
    })
})