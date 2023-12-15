// Input.jsx
// import React, { useState } from 'react';
import "../CSS/Input.css";
import TipTap from "../TipTap/Tiptap";


function Input() {
    // const [editorContent, setEditorContent] = useState('<p>Hello World!</p>');
    //
    // const handleEditorContentChange = (content) => {
    //     setEditorContent(content);
    // };

    return (
        <div className='input-container'>
            {/*<div className='input-txt'>*/}
            {/*    <h1>Input Text</h1>*/}
            {/*    <textarea*/}
            {/*        placeholder='Enter your Text'*/}
            {/*        type="text"*/}
            {/*        name="inputText"*/}
            {/*        id="inputText"*/}
            {/*        value={editorContent}*/}
            {/*        readOnly*/}
            {/*    />*/}
            {/*</div>*/}
            <div className='tiptap-container'>
             <TipTap/>
            </div>
        </div>
    );
}

export default Input;
