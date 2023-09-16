import React, { useState } from 'react';
import './App.css';
import PlayerNameInput from './PlayerNameInput';
import GameOptions from './GameOptions';
import GameResult from './GameResult';
import ResetButton from './ResetButton';

function App() {
    const [playerName, setPlayerName] = useState('');
    const [playerScore, setPlayerScore] = useState(0);
    const [pcScore, setPcScore] = useState(0);
    const [gameInProgress, setGameInProgress] = useState(true);
    const [attempts, setAttempts] = useState(0);

    const maxRounds = 5;

    const handlePlayerChoice = (playerChoice) => {
        const pcChoice = generateRandomChoice();
        const winner = determineWinner(playerChoice, pcChoice);

        if (winner === 'player') {
            setPlayerScore(playerScore + 1);
        } else if (winner === 'pc') {
            setPcScore(pcScore + 1);
        }

        const newAttempts = attempts + 1;
        setAttempts(newAttempts);

        if (newAttempts === maxRounds) {
            setGameInProgress(false);
        }
    };

    const handleReset = () => {
        setPlayerScore(0);
        setPcScore(0);
        setAttempts(0);
        setGameInProgress(true);
    };

    const generateRandomChoice = () => {
        const options = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * options.length);
        return options[randomIndex];
    };

    const determineWinner = (playerChoice, pcChoice) => {
        if (playerChoice === pcChoice) {
            return 'tie';
        } else if (
            (playerChoice === 'rock' && pcChoice === 'scissors') ||
            (playerChoice === 'paper' && pcChoice === 'rock') ||
            (playerChoice === 'scissors' && pcChoice === 'paper')
        ) {
            return 'player';
        } else {
            return 'pc';
        }
    };

    return ( <
            div className = "App" >
            <
            h1 > Piedra, Papel o Tijera < /h1> <
            PlayerNameInput playerName = { playerName }
            setPlayerName = { setPlayerName }
            /> {
            gameInProgress ? ( <
                >
                <
                GameOptions handlePlayerChoice = { handlePlayerChoice }
                /> <div className = "score" > <
                p > Jugador: < span id = "playerScore" > { playerScore } < /span></p >
                <
                p > PC: < span id = "pcScore" > { pcScore } < /span></p >
                <
                /div> < / >
            ) : ( <
                GameResult playerScore = { playerScore }
                pcScore = { pcScore }
                playerName = { playerName }
                />
            )
        } <
        ResetButton handleReset = { handleReset }
    /> </div >
);
}

export default App;