import React, {useState} from 'react';
import Board from './Board';

const GameLogic = () => {

    function defineWinner (playerPos) {

        const winCombo = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
    
        for (let i = 0; i < winCombo.length; i++) {
            const [a, b, c] = winCombo [i];
            if (playerPos [a] && playerPos [a] === playerPos [b] && playerPos [a] === playerPos [c]) {
                return playerPos [a]
            }
        }
        return null
        }

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState (true);
    const winner = defineWinner(board);

    const handleClick = (index) => {
        const boardCopy = [...board];
        // был ли клик по ячейке или гг
        if (winner || boardCopy[index]) {
            return
        }
        // определить чей ход
        boardCopy[index] = xIsNext ? 'X' : 'O';
        // обновить стейт
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    }

    const startNewGame = () => {
        return (
            <button className='start__btn' onClick={() => setBoard(Array(9).fill(null))}>Очистить поле</button>
        )
    }

    return (
        <div className='playground'>
            <p className='game__info'>
                {winner ? 'Победитель: ' + winner : 'Текущий ход: ' + (xIsNext ? 'X' : 'O')}
            </p>
            <Board squares={board} click={handleClick}/>
            {startNewGame()}
        </div>
    );
}

export default GameLogic;
