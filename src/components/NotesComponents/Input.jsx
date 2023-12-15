import React from 'react'
import "../CSS/Input.css"

function Input() {
    return (
        <div className='input-txt'>
            <h1 >Input Text</h1>
            <textarea
                placeholder='Enter your Text'
                type="text"
                name="inputText"
                id="inputText"
            />
        </div>
    )
}

export default Input