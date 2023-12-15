import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import { FontSize } from './textStyleExtensions';
// import { IncreaseFontSize, DecreaseFontSize } from './textStyleExtensions';
import {
    FaBold,
    FaHeading,
    FaItalic,
    FaListOl,
    FaListUl,
    FaQuoteLeft,
    FaRedo,
    FaStrikethrough,
    FaUnderline,
    FaUndo,
    FaTextHeight, // Adjust the icon
    FaTextWidth,  // Adjust the icon
} from 'react-icons/fa';
import '../CSS/Tiptap.css';

const MenuBar = ({ editor }) => {
    if (!editor) {
        return null;
    }

    return (
        <div className="menuBar">
            <div>
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={editor.isActive("bold") ? "is_active" : ""}
                >
                    <FaBold/>
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={editor.isActive("italic") ? "is_active" : ""}
                >
                    <FaItalic/>
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    className={editor.isActive("underline") ? "is_active" : ""}
                >
                    <FaUnderline/>
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={editor.isActive("strike") ? "is_active" : ""}
                >
                    <FaStrikethrough/>
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={editor.isActive("bulletList") ? "is_active" : ""}
                >
                    <FaListUl/>
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={editor.isActive("orderedList") ? "is_active" : ""}
                >
                    <FaListOl/>
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={editor.isActive("blockquote") ? "is_active" : ""}
                >
                    <FaQuoteLeft/>
                </button>
            </div>
            <div>
                <button onClick={() => editor.chain().focus().undo().run()}>
                    <FaUndo/>
                </button>
                <button onClick={() => editor.chain().focus().redo().run()}>
                    <FaRedo/>
                </button>


            </div>
        </div>
    );
};

export const Tiptap = ({ setDescription }) => {
    const editor = useEditor({
        extensions: [StarterKit, Underline, FontSize],
        content: ``,
        onUpdate: ({ editor }) => {
            const html = editor.getHTML();
            setDescription(html);
        },
    });

    return (
        <div className="textEditor">
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
        </div>
    );
};