import React, { useEffect, useState } from 'react'

interface Position{
  lat: number | null;
  lon: number | null;
}

interface InnerWidth{
  width: number;
  height: number;
}

export default function Coordinates() {
  const [position, setPosition] = useState<Position>({lat: 0,lon: 0});
  const [innerPosition, setInnerPosition] = useState<InnerWidth>({ width: 0, height: 0})  
  useEffect(() => {
  const handleMouseMove = (e: MouseEvent) => {
    setPosition({
      lat: e.clientY,
      lon: e.clientX,
    });
  };  
  const handleResize = () => {
    setInnerPosition({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  } 
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('resize', handleResize) 
  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('resize', handleResize); 
  };
   }, []);

  return (
    <div>
      <p>Широта: {position.lat}</p>
      <p>Долгота: {position.lon}</p>
      <p>width: {JSON.stringify(innerPosition)}</p>
      <p>height: {innerPosition.height}</p>
      </div>
  )
}




