import { useEffect, useState } from 'react';
import './drawpad.css'
import Coordinates from './components/Coordinates';


interface Room {
  id: number;
  xStart: number;
  yStart: number;
  xEnd: number;
  yEnd: number;
}

export default function DrawPad() {
  const [drawing, setDrawing] = useState(false);
  const [room, setRoom] = useState<Room[]>([]);
  const [startPos, setStartPos] = useState<{ x: number; y: number } | null>(null);
  
  const handleMouseDown = (e:MouseEvent) => {
    setDrawing(true);
    setStartPos({x: e.clientX, y: e.clientY});
    console.log({x: e.clientX, y: e.clientY});
  }

  const handleMouseUp = (e:MouseEvent) => {
    setDrawing(false);
    if(!startPos){
      return;
    }

    setRoom(prev => [...prev, {
      id: Date.now(),
      xStart: startPos.x,
      yStart: startPos.y,
      xEnd: e.clientX,
      yEnd: e.clientY
    }]);
  }


  useEffect(() => {
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    // window.addEventListener('mousemove', handleMouseMove); 

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      // window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [drawing, startPos]);

  console.log(room);

  

  return (
    <div className='drawing'>
      {/* <Coordinates/> */}
      
      {room.map((r) => {
        const left = Math.min(r.xStart, r.xEnd);
        const top = Math.min(r.yStart, r.yEnd);
        const width = Math.abs(r.xStart - r.xEnd);
        const height = Math.abs(r.yEnd - r.yStart);

        return(
          <div 
          key={r.id} 
          className = "room" 
          style={{
            position: 'absolute',
            left: left,
            top: top,
            width: width,
            height: height,
            border: 'solid 1px',
          }}>
          </div>
        )
      })}
      
    </div>
  )
}
