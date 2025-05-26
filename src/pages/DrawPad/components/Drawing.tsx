import { useEffect, useRef, useState } from 'react';

interface Room {
  id: number;
  xStart: number;
  yStart: number;
  xEnd: number;
  yEnd: number;
}

export default function Drawing() {
    const [drawing, setDrawing] = useState(false);
    const [room, setRoom] = useState<Room[]>([]);
    const [startPos, setStartPos] = useState<{ x: number; y: number } | null>(null);
    const drawZoneRef = useRef<HTMLDivElement | null>(null);
    const coordinate = useRef<{x: number | null; y: number | null}>(null);


    const handleMouseMove = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {

    }

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setDrawing(true);
        setStartPos({x: e.clientX, y: e.clientY});
        

        const rect = drawZoneRef.current?.getBoundingClientRect();
        if(!rect) return

       
        coordinate.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };

        console.log(coordinate.current)
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
        window.addEventListener('mousemove', handleMouseMove); 

        return () => {
        window.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mouseup', handleMouseUp);
        window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [drawing, startPos]);

    // console.log(room);

  

  return (
    <div style={{width: "100%", height: "100%", border: "1px solid black"}} ref={drawZoneRef}>
        <p>{coordinate.current?.x}</p>
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
