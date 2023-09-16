import React from 'react';

function GameResult({ playerScore, pcScore, playerName }) {
    const winnerMessage =
        playerScore > pcScore ?
        `${playerName} gana el juego.` :
        playerScore < pcScore ?
        'La PC gana el juego.' :
        'El juego termina en empate.';

    return ( <
        div className = "game-result" >
        <
        p > { winnerMessage } < /p> <
        /div>
    );
}

export default GameResult;