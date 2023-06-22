import React, { useRef, useState } from 'react';
import logo from './logo.svg';

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [y, setY] = useState(0);
  const [x, setX] = useState(0);
  const [z, setZ] = useState(0);

  const handleScroll = (e: React.UIEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(containerRef.current?.scrollTop);
    setY(containerRef.current?.scrollTop || 0);
  }

  return (
    <div  className="App" style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      backgroundColor: 'lavender',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        left:  300 + 300 * Math.sin((y - 900) / 100),
        top: y - 900,
        width: 100,
        height: 100,
        backgroundColor: 'red',
        transform: `scale(${2 + Math.cos((y - 900) / 100)})`,
        rotate: `y ${(y - 900) / 100}rad`,
      }}>
        Hello
      </div>
      <div style={{
        position: 'absolute',
        left: 300 + 300 * Math.sin((y - 600) / 100),
        top: y - 600,
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        transform: `scale(${2 + Math.cos((y - 600) / 100)})`,
        rotate: `y ${(y - 600) / 100}rad`,
      }}>
        World
      </div>
      <div style={{
        position: 'absolute',
        left: 300 + 300 * Math.sin((y - 300) / 100),
        top: y - 300,
        width: 100,
        height: 100,
        backgroundColor: 'green',
        transform: `scale(${2 + Math.cos((y - 300) / 100)})`,
        rotate: `y ${(y - 300) / 100}rad`,
      }}>
        Goodbye
      </div>
      <div style={{
        position: 'absolute',
        left: 300 + 300 * Math.sin(y / 100),
        top: y,
        width: 100,
        height: 100,
        backgroundColor: 'yellow',
        transform: `scale(${2 +  Math.cos(y / 100)})`,
        rotate: `y ${y / 100}rad`,
      }}>
        Cruel
      </div>
      <div ref={containerRef} onScroll={handleScroll} style={{
        overflowY: 'scroll',
        position: 'fixed',
        left: 0,
        top: 0,
        height: '100%',
        width: '100%',
      }}> 
        <div style={{
          height: 5000,
          overflow: 'hidden',
        }}/>
      </div>
    </div>
  );
}

export default App;
