import './drawpad.css'
import Sidebar from './components/Sidebar';
import Drawing from './components/Drawing';


export default function DrawPad() {
  return (
    <main>
      <Sidebar/>
      <div className="draw-zone">
        <Drawing/>
      </div>   
    </main>
  )
}
