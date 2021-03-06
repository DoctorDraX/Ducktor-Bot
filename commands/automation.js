exports.commands = {
    resetroom: function(arg, by, room, cmd) {
        if (cmd) return false;
        if (hangmanON[room]) {
            clearInterval(hangmanInterval[room]);
            delete hangmanON[room];
            ok('Reset hangman game in ' + room)
        }
        if (triviaON[room]) {
            clearInterval(triviaTimer[room]);
            delete triviaON[room];
            ok('Reset trivia game in ' + room)

        }
        if (anagramON[room]) {
            clearInterval(anagramInterval[room])
            delete anagramON[room];
            ok('Reset anagrams game in ' + room)

        }
        if (gameStatus[room] && gameStatus[room] !== 'off') {
            delete gameStatus[room];
            clearInterval(blackJack[room]);
            ok('Reset blackjack game in ' + room)

        }
        if (crazyeight.gameStatus[room] && crazyeight.gameStatus[room] !== 'off') {
            delete crazyeight.gameStatus[room];
            clearInterval(crazyeight.interval[room]);
            ok('Reset crazyeights game in ' + room)

        }
        if (Bot.repeatON[room]) {
            delete Bot.repeatON[room];
            clearInterval(Bot.repeatText[room]);
            ok('Reset repeat in ' + room)
        }
    },
    clearstatus: function(arg, by, room, cmd) {
        if (cmd) return false;
        for (var tarRoom in triviaON) {
            if (triviaON[tarRoom]) {
                clearInterval(triviaTimer[room]);
                delete triviaON[tarRoom];
                ok('Reset trivia game in ' + tarRoom)
            }
        }
        for (var tarRoom in hangmanON) {
            if (hangmanON[tarRoom]) {
                clearInterval(hangmanInterval[tarRoom]);
                delete hangmanON[tarRoom];
                ok('Reset hangman game in ' + tarRoom)
            }
        }
        for (var tarRoom in anagramON) {
            if (anagramON[tarRoom]) {
                clearInterval(anagramON[tarRoom])
                delete anagramON[tarRoom]
                ok('Reset anagram game in ' + tarRoom)
            }
        }
        for (var tarRoom in gameStatus) {
            if (gameStatus[tarRoom] !== 'off') {
                clearInterval(blackJack[tarRoom]);
                delete gameStatus[tarRoom]
                ok('Reset blackjack game in ' + tarRoom)
            }
        }
        for (var tarRoom in crazyeight.gameStatus) {
            if (crazyeight.gameStatus[tarRoom] !== 'off') {
                clearInterval(crazyeight.interval[room]);
                delete(crazyeight.gameStatus[room]);
                ok('Reset crazyeights game in ' + tarRoom)
            }
        }
        for (var tarRoom in Bot.repeatON) {
            if (Bot.repeatON[tarRoom]) {
                clearInterval(Bot.repeatText[room]);
                delete Bot.repeatON[room];
                ok('Reset repeat in ' + tarRoom)
            }
        }
    },
};