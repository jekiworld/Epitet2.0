import React from 'react'
import "./header.css"

export default function Header() {
    type Items = {
        text: string;
    }

    function Items({text} : {text: string}){
        const handleClick = function(){

        }

        return(
            <div>
                {text}
            </div>
        )
    }

    return (
        <div className='header'>
            <div className="instruments">
            <Items text = "Room" />
            <Items text = "Computer" />
            </div>
        </div>
    )
}
