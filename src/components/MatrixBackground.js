import React from 'react';

const MatrixBackground = React.memo(() => {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,245,255,0.1),transparent_50%)] opacity-60"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,0,128,0.1),transparent_50%)] opacity-40"></div>
    </div>
  );
});

export default MatrixBackground;