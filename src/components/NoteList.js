import React from 'react';

const NoteList = ({ notes, onDeleteNote, onEditNote }) => {
    return (
      <div className="note-list-container">
        <ul className="note-list">
          {notes.length === 0 && (
            <li className="empty-note">No notes yet. Add a new note!</li>
          )}
          {notes.map((note, index) => (
            <li className="note-item" key={index}>
              <div className="note-content">
                <h3 className="note-title">{note.title}</h3>
                <p className="note-text">{note.content}</p>
                <p className="note-date"><small>Created on: {note.date}</small></p>
              </div>
              <div className="note-buttons">
                <button className="edit-button" onClick={() => onEditNote(note)}>Edit</button>
                <button className="delete-button" onClick={() => onDeleteNote(note)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default NoteList;
