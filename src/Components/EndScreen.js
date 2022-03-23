import React from 'react'

//Component for screen at the end of game
//Functional component used instead of class
function EndScreen({ restartGame, playerWon }) {
    return (
        <div className='winner'>
            <div className='end-text'>
                {
                    playerWon === "No One"
                        ?<h3>Aw! We have a tie</h3>
                        : <h3 className='end-text'> Congratulations! <br/> We have a winner: {playerWon}</h3>
                }
            </div>
            <button onClick={restartGame}>
                Restart
            </button>
        </div>
    )
}

export default EndScreen;