import React, { useState, useEffect, useRef } from 'react';

const TetrisGame = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const canvasRef = useRef(null);
  const gameState = useRef({
    grid: Array(20).fill().map(() => Array(10).fill(0)),
    currentPiece: null,
    nextPiece: null,
    position: { x: 0, y: 0 },
    gameLoop: null,
    speed: 500 // Initial speed in milliseconds
  });

  const colors = [
    '#FF0D72', // I
    '#0DC2FF', // J
    '#0DFF72', // L
    '#F538FF', // O
    '#FF8E0D', // S
    '#FFE138', // T
    '#3877FF'  // Z
  ];

  const shapes = [
    [[1, 1, 1, 1]], // I
    [[1, 0, 0], [1, 1, 1]], // J
    [[0, 0, 1], [1, 1, 1]], // L
    [[1, 1], [1, 1]], // O
    [[0, 1, 1], [1, 1, 0]], // S
    [[0, 1, 0], [1, 1, 1]], // T
    [[1, 1, 0], [0, 1, 1]]  // Z
  ];

  const createPiece = () => {
    const shapeIndex = Math.floor(Math.random() * shapes.length);
    return {
      shape: shapes[shapeIndex],
      color: colors[shapeIndex],
      position: { x: 4, y: 0 }
    };
  };

  const draw = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const blockSize = 30;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw grid
    gameState.current.grid.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value) {
          ctx.fillStyle = colors[value - 1];
          ctx.fillRect(x * blockSize, y * blockSize, blockSize - 1, blockSize - 1);
        }
      });
    });

    // Draw current piece
    if (gameState.current.currentPiece) {
      const { shape, color, position } = gameState.current.currentPiece;
      ctx.fillStyle = color;
      shape.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value) {
            ctx.fillRect(
              (position.x + x) * blockSize,
              (position.y + y) * blockSize,
              blockSize - 1,
              blockSize - 1
            );
          }
        });
      });
    }
  };

  const moveDown = () => {
    if (!gameState.current.currentPiece) return;
    
    const newY = gameState.current.currentPiece.position.y + 1;
    if (isValidMove(gameState.current.currentPiece.shape, gameState.current.currentPiece.position.x, newY)) {
      gameState.current.currentPiece.position.y = newY;
    } else {
      placePiece();
      checkLines();
      gameState.current.currentPiece = createPiece();
      if (!isValidMove(gameState.current.currentPiece.shape, gameState.current.currentPiece.position.x, gameState.current.currentPiece.position.y)) {
        setGameOver(true);
        clearInterval(gameState.current.gameLoop);
      }
    }
    draw();
  };

  const moveSideways = (direction) => {
    if (!gameState.current.currentPiece) return;
    
    const newX = gameState.current.currentPiece.position.x + direction;
    if (isValidMove(gameState.current.currentPiece.shape, newX, gameState.current.currentPiece.position.y)) {
      gameState.current.currentPiece.position.x = newX;
      draw();
    }
  };

  const rotate = () => {
    if (!gameState.current.currentPiece) return;
    
    const shape = gameState.current.currentPiece.shape;
    const N = shape.length;
    const M = shape[0].length;
    const rotated = Array(M).fill().map(() => Array(N).fill(0));
    
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        rotated[j][N-1-i] = shape[i][j];
      }
    }
    
    if (isValidMove(rotated, gameState.current.currentPiece.position.x, gameState.current.currentPiece.position.y)) {
      gameState.current.currentPiece.shape = rotated;
      draw();
    }
  };

  const isValidMove = (shape, x, y) => {
    return shape.every((row, dy) => {
      return row.every((value, dx) => {
        const newX = x + dx;
        const newY = y + dy;
        return (
          value === 0 ||
          (newX >= 0 &&
           newX < 10 &&
           newY < 20 &&
           (newY < 0 || gameState.current.grid[newY][newX] === 0))
        );
      });
    });
  };

  const placePiece = () => {
    const { shape, color, position } = gameState.current.currentPiece;
    shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value) {
          const gridY = position.y + y;
          if (gridY >= 0) {
            gameState.current.grid[gridY][position.x + x] = colors.indexOf(color) + 1;
          }
        }
      });
    });
  };

  const checkLines = () => {
    let linesCleared = 0;
    for (let y = gameState.current.grid.length - 1; y >= 0; y--) {
      if (gameState.current.grid[y].every(cell => cell !== 0)) {
        gameState.current.grid.splice(y, 1);
        gameState.current.grid.unshift(Array(10).fill(0));
        linesCleared++;
        y++;
      }
    }
    if (linesCleared > 0) {
      setScore(prev => prev + linesCleared * 100);
      // Increase speed based on score
      gameState.current.speed = Math.max(100, 500 - Math.floor(score / 1000) * 50);
      clearInterval(gameState.current.gameLoop);
      gameState.current.gameLoop = setInterval(moveDown, gameState.current.speed);
    }
  };

  const startGame = () => {
    gameState.current.grid = Array(20).fill().map(() => Array(10).fill(0));
    gameState.current.currentPiece = createPiece();
    setGameOver(false);
    setScore(0);
    gameState.current.speed = 500; // Reset speed
    clearInterval(gameState.current.gameLoop);
    gameState.current.gameLoop = setInterval(moveDown, gameState.current.speed);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isVisible || gameOver) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          moveSideways(-1);
          break;
        case 'ArrowRight':
          moveSideways(1);
          break;
        case 'ArrowDown':
          moveDown();
          break;
        case 'ArrowUp':
          rotate();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVisible, gameOver]);

  return (
    <section className="section">
      <h2 className="section-title">Play Tetris</h2>
      <div 
        className="tetris-game"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px'
        }}
      >
        <div style={{ position: 'relative' }}>
          <canvas
            ref={canvasRef}
            width={300}
            height={600}
            style={{
              border: '2px solid #2c3e50',
              borderRadius: '4px',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              filter: isVisible ? 'none' : 'blur(5px)',
              transition: 'filter 0.3s ease'
            }}
            onClick={() => setIsVisible(!isVisible)}
          />
          {gameOver && (
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              textAlign: 'center'
            }}>
              <h3>Game Over!</h3>
              <p>Score: {score}</p>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  startGame();
                }}
                style={{
                  padding: '8px 16px',
                  marginTop: '10px',
                  cursor: 'pointer'
                }}
              >
                Play Again
              </button>
            </div>
          )}
          <div style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            color: 'white',
            fontSize: '14px'
          }}>
            Score: {score}
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p>Controls:</p>
          <p>← → : Move | ↑ : Rotate | ↓ : Drop Faster</p>
          <button 
            onClick={startGame}
            style={{
              padding: '8px 16px',
              marginTop: '10px',
              cursor: 'pointer'
            }}
          >
            Start Game
          </button>
        </div>
      </div>
    </section>
  );
};

export default TetrisGame; 