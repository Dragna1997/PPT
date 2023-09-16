import React from 'react';
import { determineWinner, setPlayerScore, setPcScore, playerScore, pcScore } from './App';

function GameOptions({ handlePlayerChoice }) {
    const options = ['rock', 'paper', 'scissors'];

    const generateRandomChoice = () => {
        const randomIndex = Math.floor(Math.random() * options.length);
        return options[randomIndex];
    };

    const handlePlayerClick = (choice) => {
        handlePlayerChoice(choice);
    };

    return ( <
        div className = "game-options" > {
            options.map((option) => ( <
                button key = { option }
                onClick = {
                    () => handlePlayerClick(option)
                } > { option.charAt(0).toUpperCase() + option.slice(1) } <
                /button>
            ))
        } <
        /div>
    );
}

export default GameOptions;