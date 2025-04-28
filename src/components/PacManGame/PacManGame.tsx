import React, { useEffect, useState, useCallback, useRef } from 'react';
import './PacManGame.scss';

// Define cell types.
enum CellType {
  Wall = 1,
  Dot = 2,
  Empty = 0,
}

// Define a type for grid positions.
interface Position {
  row: number;
  col: number;
}

// Hardcoded board (11 rows x 15 cols)
// 1: wall, 2: dot, 0: empty
const initialBoard: number[][] = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
  [1,2,1,1,1,2,1,1,1,2,1,1,1,2,1],
  [1,2,2,2,1,2,2,2,1,2,2,2,1,2,1],
  [1,1,1,2,1,1,1,2,1,1,1,2,1,1,1],
  [1,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
  [1,2,1,1,1,2,1,1,1,2,1,1,1,2,1],
  [1,2,2,2,1,2,2,2,1,2,2,2,1,2,1],
  [1,1,1,2,1,1,1,2,1,1,1,2,1,1,1],
  [1,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];

const GRID_ROWS = initialBoard.length;
const GRID_COLS = initialBoard[0].length;

// Directions for movement via arrow keys.
const directions: { [key: string]: Position } = {
  ArrowUp: { row: -1, col: 0 },
  ArrowDown: { row: 1, col: 0 },
  ArrowLeft: { row: 0, col: -1 },
  ArrowRight: { row: 0, col: 1 },
};

const PacmanGame: React.FC = () => {
  // State for the board, positions, score.
  const [board, setBoard] = useState<number[][]>(() =>
    initialBoard.map((row) => [...row])
  );
  const [pacmanPos, setPacmanPos] = useState<Position>({ row: 1, col: 1 });
  const [ghostPos, setGhostPos] = useState<Position>({ row: 5, col: 7 });
  const [score, setScore] = useState<number>(0);

  // Ensure we always have the latest pacmanPos and ghostPos inside callbacks.
  const pacmanPosRef = useRef<Position>(pacmanPos);
  const ghostPosRef = useRef<Position>(ghostPos);

  useEffect(() => {
    pacmanPosRef.current = pacmanPos;
  }, [pacmanPos]);

  useEffect(() => {
    ghostPosRef.current = ghostPos;
  }, [ghostPos]);

  // Check if the new position is valid (not a wall and inside the grid).
  const canMove = useCallback((pos: Position) => {
    if (
      pos.row < 0 ||
      pos.row >= GRID_ROWS ||
      pos.col < 0 ||
      pos.col >= GRID_COLS
    ) {
      return false;
    }
    return board[pos.row][pos.col] !== CellType.Wall;
  }, [board]);

  // Pacman movement via keyboard.
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!directions[e.key]) return;
    const move = directions[e.key];
    const newPos: Position = { row: pacmanPosRef.current.row + move.row, col: pacmanPosRef.current.col + move.col };

    if (canMove(newPos)) {
      // Eat a dot if it exists.
      setBoard((prevBoard) => {
        const newBoard = prevBoard.map((row) => [...row]);
        if (newBoard[newPos.row][newPos.col] === CellType.Dot) {
          newBoard[newPos.row][newPos.col] = CellType.Empty;
          setScore((prevScore) => prevScore + 10);
        }
        return newBoard;
      });
      setPacmanPos(newPos);

      // Immediately check for collision with ghost.
      if (newPos.row === ghostPosRef.current.row && newPos.col === ghostPosRef.current.col) {
        alert("Game Over! You were caught by a ghost!");
        resetGame();
      }
    }
  }, [canMove]);

  // Ghost moves continuously every 500ms.
  useEffect(() => {
    const ghostInterval = setInterval(() => {
      const possibleDirs = Object.values(directions);
      // Randomize direction order.
      const shuffled = possibleDirs.sort(() => Math.random() - 0.5);
      for (const move of shuffled) {
        const newPos: Position = { row: ghostPosRef.current.row + move.row, col: ghostPosRef.current.col + move.col };
        if (
          newPos.row >= 0 && newPos.row < GRID_ROWS &&
          newPos.col >= 0 && newPos.col < GRID_COLS &&
          board[newPos.row][newPos.col] !== CellType.Wall
        ) {
          setGhostPos(newPos);
          break;
        }
      }
      // After ghost moves, check for collision with Pacman.
      if (pacmanPosRef.current.row === ghostPosRef.current.row &&
          pacmanPosRef.current.col === ghostPosRef.current.col) {
        alert("Game Over! You were caught by a ghost!");
        resetGame();
      }
    }, 200);

    return () => clearInterval(ghostInterval);
  }, [board]);

  // Setup keydown listener once.
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Reset the game state.
  const resetGame = () => {
    setBoard(initialBoard.map((row) => [...row]));
    setPacmanPos({ row: 1, col: 1 });
    setGhostPos({ row: 5, col: 7 });
    setScore(0);
  };

  // Render the board cells.
  const renderCell = (row: number, col: number) => {
    let cellClass = "cell";
    const cellValue = board[row][col];
    if (cellValue === CellType.Wall) {
      cellClass += " wall";
    } else if (cellValue === CellType.Dot) {
      cellClass += " dot";
    } else {
      cellClass += " empty";
    }

    // Check if Pacman or ghost is in this cell.
    const isPacman = pacmanPos.row === row && pacmanPos.col === col;
    const isGhost = ghostPos.row === row && ghostPos.col === col;

    return (
      <div key={`${row}-${col}`} className={cellClass}>
        {isPacman && <div className="pacman" />}
        {isGhost && <div className="ghost" />}
      </div>
    );
  };

  return (
    <div className="pacman-game">
      <h2>Pacman Game - Score: {score}</h2>
      <div className="board">
        {board.map((rowData, row) =>
          rowData.map((_, col) => renderCell(row, col))
        )}
      </div>
    </div>
  );
};

export default PacmanGame;
