import React, { useState, useEffect } from 'react';

//import components
import Player1 from './components/Player1';
import Player2 from './components/Player2';
import './App.css';

function App() {
    const [namePlayer1, setName1] = useState('Player 1');
    const [scorePlayer1, setScore1] = useState(0);
    const [currentPlayer1, setCurrent1] = useState(0);

    const [namePlayer2, setName2] = useState('Player 2');
    const [scorePlayer2, setScore2] = useState(0);
    const [currentPlayer2, setCurrent2] = useState(0);

    const [diceOne, setDiceOne] = useState(null);
    const [diceTwo, setDiceTwo] = useState(null);
    const [gamePlay, setGamePlay] = useState(true);

    const [winnerPlayer, setWinnerPlayer] = useState(null);
    const [finalScore, setFinalScore] = useState(100);
    const [activePlayer, setActivePlayer] = useState(1);

    const init = () => {
        setName1('Player 1');
        setScore1(0);
        setCurrent1(0);

        setName2('Player 2');
        setScore2(0);
        setCurrent2(0);

        setDiceOne(null);
        setDiceTwo(null);
        setWinnerPlayer(null);
        setActivePlayer(1);
        setFinalScore(100);
        setGamePlay(true);
    };

    const handleRollDice = () => {
        if (gamePlay) {
            setDiceOne(Math.floor(Math.random() * 6) + 1);
            setDiceTwo(Math.floor(Math.random() * 6) + 1);
        }
    };

    useEffect(() => {
        if (activePlayer === 1) {
            setCurrent1(currentPlayer1 + diceOne + diceTwo);
        } else {
            setCurrent2(currentPlayer2 + diceOne + diceTwo);
        }

        if (diceOne === 6 && diceTwo === 6) {
            if (activePlayer === 1) {
                setScore1(0);
            } else {
                setScore2(0);
            }
            nextPlayer();
        }
    }, [diceOne, diceTwo]);

    const nextPlayer = () => {
        activePlayer === 1 ? setActivePlayer(2) : setActivePlayer(1);

        setDiceOne(null);
        setDiceTwo(null);
        setCurrent1(0);
        setCurrent2(0);
    };

    const handleHold = () => {
        if (gamePlay) {
            if (activePlayer === 1) {
                setScore1(scorePlayer1 + currentPlayer1);
                setCurrent1(0);
                nextPlayer();
            } else {
                setScore2(scorePlayer2 + currentPlayer2);
                setCurrent2(0);
                nextPlayer();
            }

            if (
                activePlayer === 1 &&
                scorePlayer1 + currentPlayer1 >= finalScore
            ) {
                setName1('Winner!');
                setDiceOne(null);
                setDiceTwo(null);
                setWinnerPlayer(1);
                setGamePlay(false);
            } else if (
                activePlayer === 2 &&
                scorePlayer2 + currentPlayer2 >= finalScore
            ) {
                setName2('Winner!');
                setDiceOne(null);
                setDiceTwo(null);
                setWinnerPlayer(2);
                setGamePlay(false);
            }
        }
    };

    return (
        <div className='wrapper'>
            <Player1
                activePlayer={activePlayer}
                winnerPlayer={winnerPlayer}
                namePlayer1={namePlayer1}
                scorePlayer1={scorePlayer1}
                currentPlayer1={currentPlayer1}
            />
            <Player2
                activePlayer={activePlayer}
                winnerPlayer={winnerPlayer}
                namePlayer2={namePlayer2}
                scorePlayer2={scorePlayer2}
                currentPlayer2={currentPlayer2}
            />
            <button onClick={init}>New game</button>
            <button className='rollBtn' onClick={handleRollDice}>
                Roll dice
            </button>
            <button className='holdBtn' onClick={handleHold}>
                Hold
            </button>

            <input
                type='text'
                id='winningScore'
                placeholder='Final Score'
                onChange={(e) => setFinalScore(e.target.value)}
            />
            {diceOne && (
                <img
                    src={`../assets/dice-${diceOne}.png`}
                    alt='Dice'
                    className='dice'
                    id='dice1'
                />
            )}
            {diceTwo && (
                <img
                    src={`../assets/dice-${diceTwo}.png`}
                    alt='Dice'
                    className='dice'
                    id='dice2'
                />
            )}
        </div>
    );
}

export default App;
