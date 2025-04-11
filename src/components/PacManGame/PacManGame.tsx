import React, { useEffect, useRef, useState, useCallback } from 'react';
import './PacManGame.scss';

interface Position {
  x: number;
  y: number;
}

interface Ghost {
  position: Position;
  velocity: Position;
}

const CANVAS_SIZE = 500;
const PACMAN_RADIUS = 20;
const PACMAN_SPEED = 5;
const GHOST_RADIUS = 20;
const GHOST_SPEED = 2;
const DOT_RADIUS = 5;
const DOT_SPACING = 40;

const PacManGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Game states
  const [pacmanPos, setPacmanPos] = useState<Position>({ x: 50, y: 50 });
  const [direction, setDirection] = useState<'up' | 'down' | 'left' | 'right'>('right');
  const [ghosts, setGhosts] = useState<Ghost[]>([]);
  const [dots, setDots] = useState<Position[]>([]);
  const [gameOver, setGameOver] = useState<boolean>(false);

  // Initialize ghosts and dots only once
  useEffect(() => {
    // Initialize ghosts in different corners with random velocities.
    const initialGhosts: Ghost[] = [
      { position: { x: 100, y: 100 }, velocity: { x: GHOST_SPEED, y: GHOST_SPEED } },
      { position: { x: CANVAS_SIZE - 100, y: 100 }, velocity: { x: -GHOST_SPEED, y: GHOST_SPEED } },
      { position: { x: 100, y: CANVAS_SIZE - 100 }, velocity: { x: GHOST_SPEED, y: -GHOST_SPEED } },
      { position: { x: CANVAS_SIZE - 100, y: CANVAS_SIZE - 100 }, velocity: { x: -GHOST_SPEED, y: -GHOST_SPEED } }
    ];
    setGhosts(initialGhosts);

    // Create a grid of dots (pellets)
    const newDots: Position[] = [];
    for (let x = DOT_SPACING; x < CANVAS_SIZE; x += DOT_SPACING) {
      for (let y = DOT_SPACING; y < CANVAS_SIZE; y += DOT_SPACING) {
        newDots.push({ x, y });
      }
    }
    setDots(newDots);
  }, []);

  // Collision detection utility between two circles.
  const isCollision = (pos1: Position, r1: number, pos2: Position, r2: number): boolean => {
    const dx = pos1.x - pos2.x;
    const dy = pos1.y - pos2.y;
    return Math.sqrt(dx * dx + dy * dy) < (r1 + r2);
  };

  // Main game loop for updating ghosts, collisions, and redrawing on canvas.
  const updateGame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    // Clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw dots (pellets)
    dots.forEach(dot => {
      context.beginPath();
      context.arc(dot.x, dot.y, DOT_RADIUS, 0, 2 * Math.PI);
      context.fillStyle = 'white';
      context.fill();
    });

    // Update and draw ghosts
    setGhosts(prevGhosts => {
      const updatedGhosts = prevGhosts.map(ghost => {
        let { x, y } = ghost.position;
        let { x: vx, y: vy } = ghost.velocity;

        x += vx;
        y += vy;

        // Bounce off canvas boundaries.
        if (x <= GHOST_RADIUS || x >= canvas.width - GHOST_RADIUS) {
          vx = -vx;
          x = Math.max(GHOST_RADIUS, Math.min(x, canvas.width - GHOST_RADIUS));
        }
        if (y <= GHOST_RADIUS || y >= canvas.height - GHOST_RADIUS) {
          vy = -vy;
          y = Math.max(GHOST_RADIUS, Math.min(y, canvas.height - GHOST_RADIUS));
        }

        // Draw ghost
        context.beginPath();
        context.arc(x, y, GHOST_RADIUS, 0, 2 * Math.PI);
        context.fillStyle = 'red';
        context.fill();

        return { position: { x, y }, velocity: { x: vx, y: vy } };
      });
      return updatedGhosts;
    });

    // Draw PacMan with mouth open according to direction
    let startAngle = 0;
    let endAngle = 0;
    switch (direction) {
      case 'right':
        startAngle = 0.25 * Math.PI;
        endAngle = 1.75 * Math.PI;
        break;
      case 'left':
        startAngle = 1.25 * Math.PI;
        endAngle = 0.75 * Math.PI;
        break;
      case 'up':
        startAngle = 1.75 * Math.PI;
        endAngle = 1.25 * Math.PI;
        break;
      case 'down':
        startAngle = 0.75 * Math.PI;
        endAngle = 0.25 * Math.PI;
        break;
      default:
        startAngle = 0.25 * Math.PI;
        endAngle = 1.75 * Math.PI;
    }
    context.beginPath();
    context.moveTo(pacmanPos.x, pacmanPos.y);
    context.arc(pacmanPos.x, pacmanPos.y, PACMAN_RADIUS, startAngle, endAngle);
    context.closePath();
    context.fillStyle = 'yellow';
    context.fill();

    // Collision detection for pellets: Remove dot if PacMan touches it.
    setDots(prevDots => prevDots.filter(dot => !isCollision(pacmanPos, PACMAN_RADIUS, dot, DOT_RADIUS)));

    // Collision detection for ghosts: If PacMan touches a ghost, game over.
    for (const ghost of ghosts) {
      if (isCollision(pacmanPos, PACMAN_RADIUS, ghost.position, GHOST_RADIUS)) {
        setGameOver(true);
        break;
      }
    }
  }, [pacmanPos, direction, dots, ghosts]);

  // Use requestAnimationFrame loop.
  useEffect(() => {
    if (gameOver) return;
    const animate = () => {
      updateGame();
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [updateGame, gameOver]);

  // Handle keyboard events for PacMan movement.
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameOver) return;
      let newX = pacmanPos.x;
      let newY = pacmanPos.y;
      let newDirection: 'up' | 'down' | 'left' | 'right' = direction;

      if (e.key === 'ArrowRight') {
        newX += PACMAN_SPEED;
        newDirection = 'right';
      } else if (e.key === 'ArrowLeft') {
        newX -= PACMAN_SPEED;
        newDirection = 'left';
      } else if (e.key === 'ArrowUp') {
        newY -= PACMAN_SPEED;
        newDirection = 'up';
      } else if (e.key === 'ArrowDown') {
        newY += PACMAN_SPEED;
        newDirection = 'down';
      }

      // Keep PacMan inside the boundaries.
      newX = Math.max(PACMAN_RADIUS, Math.min(newX, CANVAS_SIZE - PACMAN_RADIUS));
      newY = Math.max(PACMAN_RADIUS, Math.min(newY, CANVAS_SIZE - PACMAN_RADIUS));

      setPacmanPos({ x: newX, y: newY });
      setDirection(newDirection);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [pacmanPos, direction, gameOver]);

  return (
    <div className="pacman-game">
      {gameOver && <div className="game-over">Game Over</div>}
      <canvas ref={canvasRef} width={CANVAS_SIZE} height={CANVAS_SIZE} />
    </div>
  );
};

export default PacManGame;
