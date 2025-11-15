import React, { useEffect, useState, useRef } from 'react';

const MatrixBackground = () => {
  const [columns, setColumns] = useState([]);
  const [particles, setParticles] = useState([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Enhanced Matrix Characters including algorithms and tech symbols
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン{}[]()<>=+-*/&|^~#@$%!?:;.,abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const algorithmSymbols = ['∑', '∏', '∫', '∂', '∇', '∞', '≈', '≠', '≤', '≥', '∈', '∉', '∪', '∩', '⊂', '⊃', '∀', '∃', '∧', '∨', '¬', '→', '↔', '⟨', '⟩', '⌊', '⌋', '⌈', '⌉'];
    const techSymbols = ['◆', '◇', '◈', '◉', '◎', '●', '○', '◐', '◑', '◒', '◓', '▲', '△', '▼', '▽', '◀', '◁', '▶', '▷', '■', '□', '▪', '▫', '▬', '▭', '▮', '▯'];
    
    const allChars = chars + algorithmSymbols.join('') + techSymbols.join('');
    const newColumns = [];
    
    // Create more columns for denser effect
    for (let i = 0; i < 80; i++) {
      newColumns.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 30,
        speed: 0.5 + Math.random() * 1.5,
        chars: Array.from({ length: 30 }, () => allChars[Math.floor(Math.random() * allChars.length)]),
        color: Math.random() > 0.7 ? '#ff0080' : Math.random() > 0.5 ? '#8000ff' : '#00f5ff'
      });
    }
    setColumns(newColumns);

    // Create floating algorithm particles
    const newParticles = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 20,
        symbol: algorithmSymbols[Math.floor(Math.random() * algorithmSymbols.length)],
        color: ['#00f5ff', '#ff0080', '#8000ff', '#00ff41'][Math.floor(Math.random() * 4)]
      });
    }
    setParticles(newParticles);
  }, []);

  // Canvas-based neural network visualization
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const nodes = [];
    const connections = [];

    // Create neural network nodes
    for (let i = 0; i < 30; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: 2 + Math.random() * 3
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw nodes
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#00f5ff';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#00f5ff';
        ctx.fill();

        // Draw connections to nearby nodes
        nodes.forEach((otherNode, j) => {
          if (i !== j) {
            const dx = node.x - otherNode.x;
            const dy = node.y - otherNode.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(otherNode.x, otherNode.y);
              ctx.strokeStyle = `rgba(0, 245, 255, ${1 - distance / 150})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Algorithm Tech Space Background */}
      <div className="algorithm-bg"></div>
      
      {/* Neural Network Canvas */}
      <canvas 
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
        style={{ zIndex: -1, opacity: 0.3 }}
      />

      {/* Enhanced Matrix Background */}
      <div className="matrix-bg">
        {columns.map(column => (
          <div
            key={column.id}
            className="matrix-column"
            style={{
              left: `${column.left}%`,
              animationDelay: `${column.delay}s`,
              animationDuration: `${20 + column.speed * 10}s`,
              color: column.color,
              fontSize: `${14 + Math.random() * 8}px`
            }}
          >
            {column.chars.map((char, index) => (
              <div 
                key={index} 
                className="block"
                style={{
                  opacity: Math.max(0.1, 1 - (index / column.chars.length)),
                  textShadow: `0 0 ${5 + Math.random() * 10}px currentColor`
                }}
              >
                {char}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Algorithm Particles */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
        {particles.map(particle => (
          <div
            key={particle.id}
            className="algorithm-particle absolute text-2xl font-bold"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              color: particle.color,
              animationDelay: `${particle.delay}s`,
              textShadow: `0 0 15px ${particle.color}`,
              fontSize: `${16 + Math.random() * 12}px`
            }}
          >
            {particle.symbol}
          </div>
        ))}
      </div>

      {/* Floating Tech Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -1 }}>
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${15 + Math.random() * 10}s infinite linear`,
              animationDelay: `${Math.random() * 10}s`
            }}
          >
            <div 
              className="w-8 h-8 border-2 border-cyan-400 rotate-45"
              style={{
                boxShadow: '0 0 20px rgba(0, 245, 255, 0.5)',
                animation: `spin ${5 + Math.random() * 5}s linear infinite`
              }}
            ></div>
          </div>
        ))}
      </div>

      {/* Data Stream Lines */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30"
            style={{
              top: `${10 + i * 12}%`,
              left: '0%',
              right: '0%',
              animation: `dataFlow ${3 + Math.random() * 2}s infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default MatrixBackground;