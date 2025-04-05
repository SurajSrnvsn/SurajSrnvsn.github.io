import React, { useEffect, useRef } from 'react';

const TetrisBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Tetris block colors
    const colors = [
      '#FF0D72', // I
      '#0DC2FF', // J
      '#0DFF72', // L
      '#F538FF', // O
      '#FF8E0D', // S
      '#FFE138', // T
      '#3877FF'  // Z
    ];

    // Block shapes
    const shapes = [
      [[1, 1, 1, 1]], // I
      [[1, 0, 0], [1, 1, 1]], // J
      [[0, 0, 1], [1, 1, 1]], // L
      [[1, 1], [1, 1]], // O
      [[0, 1, 1], [1, 1, 0]], // S
      [[0, 1, 0], [1, 1, 1]], // T
      [[1, 1, 0], [0, 1, 1]]  // Z
    ];

    class Block {
      constructor() {
        this.shapeIndex = Math.floor(Math.random() * shapes.length);
        this.shape = shapes[this.shapeIndex];
        this.color = colors[this.shapeIndex];
        this.x = Math.random() * (canvas.width - this.shape[0].length * 30);
        this.y = -this.shape.length * 30;
        this.speed = 1 + Math.random() * 2;
        this.rotation = 0;
      }

      rotate() {
        const N = this.shape.length;
        const M = this.shape[0].length;
        const rotated = Array(M).fill().map(() => Array(N).fill(0));
        
        for (let i = 0; i < N; i++) {
          for (let j = 0; j < M; j++) {
            rotated[j][N-1-i] = this.shape[i][j];
          }
        }
        
        this.shape = rotated;
      }

      draw() {
        ctx.fillStyle = this.color;
        for (let i = 0; i < this.shape.length; i++) {
          for (let j = 0; j < this.shape[i].length; j++) {
            if (this.shape[i][j]) {
              ctx.fillRect(
                this.x + j * 30,
                this.y + i * 30,
                28,
                28
              );
            }
          }
        }
      }

      update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
          this.y = -this.shape.length * 30;
          this.x = Math.random() * (canvas.width - this.shape[0].length * 30);
          if (Math.random() < 0.3) this.rotate();
        }
      }
    }

    const blocks = Array(10).fill().map(() => new Block());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      blocks.forEach(block => {
        block.update();
        block.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        opacity: 0.1
      }}
    />
  );
};

export default TetrisBackground; 