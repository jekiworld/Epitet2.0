import { useEffect, useState } from 'react';
import './drawpad.css'
import Coordinates from './components/Coordinates';


interface Room {
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
      <Coordinates/>

      
    </div>
  )
}
