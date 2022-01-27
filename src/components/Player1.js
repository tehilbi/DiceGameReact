import '../App.css';

function Player1(props) {
    return (
        <div
            className={`playerWrapper ${
                props.activePlayer === 1 && props.winnerPlayer === null
                    ? 'active'
                    : ''
            } ${props.winnerPlayer === 1 ? 'winnerPlayer' : ''}`}
        >
            <div className='playerName'>{props.namePlayer1}</div>
            <div className='playerScore'>{props.scorePlayer1}</div>
            <div className='playerCurrentWrapper'>
                <div className='playerCurrentLabel'>Current</div>
                <div className='playerCurrentScore'>{props.currentPlayer1}</div>
            </div>
        </div>
    );
}

export default Player1;
