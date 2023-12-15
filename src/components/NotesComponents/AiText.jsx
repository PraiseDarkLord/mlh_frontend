import React from 'react'
import "../CSS/AiText.css"

function AiText() {
    return (
        <div className="aitxt">

            <h1>Ai Text</h1>
            <textarea
                className='aiText'
                placeholder='Genrated Text Goes Here'
                name="aitext"
                id="aitext"
            />
        </div>
    )
}

export default AiText