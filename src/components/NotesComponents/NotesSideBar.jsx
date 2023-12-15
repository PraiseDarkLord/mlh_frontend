import React from 'react'
import "../CSS/NotesSideBar.css"
import NotesTitle from './NotesTitle'

function NotesSideBar() {
    return (
        <div className='sideBar-warapper'>
            <div className="new-note">
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