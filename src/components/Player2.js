import '../App.css';

function Player2(props) {
    return (
        <div
            className={`playerWrapper ${
                props.activePlayer === 2 && props.winnerPlayer === null
                    ? 'active'
                    : ''
            } ${props.winnerPlayer === 2 ? 'winnerPlayer' : ''}`}
        >
            <div className='playerName'>{props.namePlayer2}</div>
            <div className='playerScore'>{props.scorePlayer2}</div>
            <div className='playerCurrentWrapper'>
                <div className='playerCurrentLabel'>Current</div>
                <div className='playerCurrentScore'>{props.currentPlayer2}</div>
            </div>
        </div>
    );
}

export default Player2;
