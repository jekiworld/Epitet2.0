import React from 'react'
import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="createRoom">
            Создать комнату
        </div>
        <div className="addPc">
            Добавить компьютер
        </div>
    </div>
  )
}
