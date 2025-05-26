import React from 'react'
import "./sidebar.css"

export default function Sidebar() {
  return (
    <aside  className='sidebar'>
        <button  className="create">
            Создать комнату
        </button >
        <button  className="create">
            Добавить компьютер
        </button >
    </aside >
  )
}
