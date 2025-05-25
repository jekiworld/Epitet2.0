import './App.css'
import { Routes, Route } from 'react-router-dom';
import DrawPad from './pages/DrawPad/DrawPad';

function App() {

  return (
    <>
      <div className='App'>
        <Routes>
          <Route path="/" element={<DrawPad />} />
        </Routes>
      </div>
    </>
  )
}

export default App
