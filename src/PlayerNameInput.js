import React from 'react';

function PlayerNameInput({ playerName, setPlayerName }) {
    const handleNameChange = (event) => {
        setPlayerName(event.target.value);
    };

    return ( < div >
        <
        label > Ingresa tu nombre: < /label> <
        input type = "text"
        value = { playerName }
        onChange = { handleNameChange }
        /> </div >
    );
}

export default PlayerNameInput;