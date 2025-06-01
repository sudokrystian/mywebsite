import React, { useEffect, useState, useRef } from "react";
import "./SnakeGame.scss";

interface Position {
  x: number;
  y: number;
}

const boardSize = 20; // 20×20 grid
const initialSnake: Position[] = [{ x: 10, y: 10 }];
const initialDirection: Position = { x: 0, y: 1 };

const getRandomFoodPosition = (snake: Position[]): Position => {
  let newFood: Position;
  while (true) {
    newFood = {
      x: Math.floor(Math.random() * boardSize),
      y: Math.floor(Math.random() * boardSize),
    };
    if (!snake.some(seg => seg.x === newFood.x && seg.y === newFood.y)) break;
  }
  return newFood;
};

const SnakeGame: React.FC = () => {
  const [snake, setSnake] = useState<Position[]>(initialSnake);
  const [direction, setDirection] = useState<Position>(initialDirection);
  const [food, setFood] = useState<Position>(getRandomFoodPosition(initialSnake));
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);

  const moveInterval = useRef<number>();
  const timerInterval = useRef<number>();

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" && direction.y !== 1) setDirection({ x: 0, y: -1 });
      if (e.key === "ArrowDown" && direction.y !== -1) setDirection({ x: 0, y: 1 });
      if (e.key === "ArrowLeft" && direction.x !== 1) setDirection({ x: -1, y: 0 });
      if (e.key === "ArrowRight" && direction.x !== -1) setDirection({ x: 1, y: 0 });
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction]);

  // Game loop + timer
  useEffect(() => {
    if (gameOver) {
      clearInterval(moveInterval.current);
      clearInterval(timerInterval.current);
      return;
    }

    moveInterval.current = window.setInterval(() => {
      setSnake(prev => {
        const newHead = { x: prev[0].x + direction.x, y: prev[0].y + direction.y };

        // collision with walls
        if (
          newHead.x < 0 ||
          newHead.x >= boardSize ||
          newHead.y < 0 ||
          newHead.y >= boardSize
        ) {
          setGameOver(true);
          return prev;
        }

        // collision with self
        if (prev.some(seg => seg.x === newHead.x && seg.y === newHead.y)) {
          setGameOver(true);
          return prev;
        }

        const newSnake = [newHead, ...prev];
        // eating food
        if (newHead.x === food.x && newHead.y === food.y) {
          setFood(getRandomFoodPosition(newSnake));
          setScore(s => s + 1);
        } else {
          newSnake.pop();
        }
        return newSnake;
      });
    }, 200);

    timerInterval.current = window.setInterval(() => {
      setTimeElapsed(t => t + 1);
    }, 1000);

    return () => {
      clearInterval(moveInterval.current);
      clearInterval(timerInterval.current);
    };
  }, [direction, food, gameOver]);

  const restartGame = () => {
    setSnake(initialSnake);
    setDirection(initialDirection);
    setFood(getRandomFoodPosition(initialSnake));
    setGameOver(false);
    setScore(0);
    setTimeElapsed(0);
  };

  const goBack = () => {
    window.history.back();
  };

  const renderCells = () => {
    const cells = [];
    for (let y = 0; y < boardSize; y++) {
      for (let x = 0; x < boardSize; x++) {
        const isSnake = snake.some(seg => seg.x === x && seg.y === y);
        const isHead = snake[0].x === x && snake[0].y === y;
        const isFood = food.x === x && food.y === y;
        cells.push(
          <div
            key={`${x}-${y}`}
            className={`cell ${isSnake ? "snake" : ""} ${isHead ? "head" : ""} ${isFood ? "food" : ""}`}
            style={{ gridRowStart: y + 1, gridColumnStart: x + 1 }}
          />
        );
      }
    }
    return cells;
  };

  return (
    <div className="snake-game-container">
      <div className="title">
        <button onClick={goBack}>Back</button>
        <h2>Snake Game</h2>
      </div>
      <div className="scoreboard">
        <div>🍎 Score: {score}</div>
        <div>⏱️ Time: {timeElapsed}s</div>
      </div>
      <div className="board">{renderCells()}</div>
      {gameOver && (
        <div className="game-over">
          <h2>Game Over</h2>
          <p>Final Score: {score}</p>
          <p>Time: {timeElapsed} seconds</p>
          <button onClick={restartGame}>Restart</button>
        </div>
      )}
    </div>
  );
};

export default SnakeGame;
