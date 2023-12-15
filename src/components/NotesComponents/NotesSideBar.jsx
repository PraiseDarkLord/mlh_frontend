import React from 'react'
import "../CSS/NotesSideBar.css"
import NotesTitle from './NotesTitle'

function NotesSideBar() {
    return (
        <div className='sideBar-warapper'>
            
            <div className="note-btns">
                <button className="newNote">
                    Summerize
                </button>
                <button className="newNote">
                    Translate
                </button>
                <button className="newNote">
                    New Note +
                </button>
            </div>

            <NotesTitle />
            <NotesTitle />
            <NotesTitle />
        </div>
    )
}

export default NotesSideBar