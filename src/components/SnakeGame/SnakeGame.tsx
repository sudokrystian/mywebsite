import React, { useEffect, useState, useRef } from "react";
import "./SnakeGame.scss";

interface Position {
  x: number;
  y: number;
}

const boardSize = 40; // Defines a 20 x 20 board
const initialSnake: Position[] = [{ x: 10, y: 10 }];
const initialDirection: Position = { x: 0, y: 1 };

// Helper function to generate a random food position not on the snake
const getRandomFoodPosition = (snake: Position[]): Position => {
  let newFood: Position;
  while (true) {
    newFood = {
      x: Math.floor(Math.random() * boardSize),
      y: Math.floor(Math.random() * boardSize),
    };
    const collision = snake.some(
      (segment) => segment.x === newFood.x && segment.y === newFood.y
    );
    if (!collision) break;
  }
  return newFood;
};

const SnakeGame: React.FC = () => {
  const [snake, setSnake] = useState<Position[]>(initialSnake);
  const [direction, setDirection] = useState<Position>(initialDirection);
  const [food, setFood] = useState<Position>(getRandomFoodPosition(initialSnake));
  const [gameOver, setGameOver] = useState<boolean>(false);
  const moveInterval = useRef<number | undefined>(undefined);

  // Handle keyboard input to change the snake's direction
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          if (direction.y !== 1) setDirection({ x: 0, y: -1 });
          break;
        case "ArrowDown":
          if (direction.y !== -1) setDirection({ x: 0, y: 1 });
          break;
        case "ArrowLeft":
          if (direction.x !== 1) setDirection({ x: -1, y: 0 });
          break;
        case "ArrowRight":
          if (direction.x !== -1) setDirection({ x: 1, y: 0 });
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction]);

  // Main game loop to update the snake's position
  useEffect(() => {
    if (gameOver) {
      if (moveInterval.current) clearInterval(moveInterval.current);
      return;
    }

    moveInterval.current = window.setInterval(() => {
      setSnake((prevSnake) => {
        const newHead: Position = {
          x: prevSnake[0].x + direction.x,
          y: prevSnake[0].y + direction.y,
        };

        // Check collision with walls
        if (
          newHead.x < 0 ||
          newHead.x >= boardSize ||
          newHead.y < 0 ||
          newHead.y >= boardSize
        ) {
          setGameOver(true);
          return prevSnake;
        }

        // Check collision with self
        if (prevSnake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)) {
          setGameOver(true);
          return prevSnake;
        }

        let newSnake = [newHead, ...prevSnake];

        // Check if food is eaten
        if (newHead.x === food.x && newHead.y === food.y) {
          setFood(getRandomFoodPosition(newSnake));
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, 200); // adjust the speed (milliseconds)

    return () => {
      if (moveInterval.current) clearInterval(moveInterval.current);
    };
  }, [direction, food, gameOver]);

  // Restart the game by reinitializing state
  const restartGame = () => {
    setSnake(initialSnake);
    setDirection(initialDirection);
    setFood(getRandomFoodPosition(initialSnake));
    setGameOver(false);
  };

  // Render board cells
  const renderCells = () => {
    const cells = [];
    for (let y = 0; y < boardSize; y++) {
      for (let x = 0; x < boardSize; x++) {
        const isSnake = snake.some((segment) => segment.x === x && segment.y === y);
        const isFood = food.x === x && food.y === y;
        cells.push(
          <div
            key={`${x}-${y}`}
            className={`cell ${isSnake ? "snake" : ""} ${isFood ? "food" : ""}`}
            style={{ gridRowStart: y + 1, gridColumnStart: x + 1 }}
          ></div>
        );
      }
    }
    return cells;
  };

  return (
    <div className="snake-game-container">
      <h1>Snake Game</h1>
      <div className="board">{renderCells()}</div>
      {gameOver && (
        <div className="game-over">
          <h2>Game Over</h2>
          <button onClick={restartGame}>Restart</button>
        </div>
      )}
    </div>
  );
};

export default SnakeGame;
