import { useState, useEffect } from 'react';
import '../styles/NoteForm.css';

const NoteForm = ({ onAddNote, noteToEdit, onUpdateNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // If noteToEdit is provided, fill the form with its data
  useEffect(() => {
    if (noteToEdit) {
      setTitle(noteToEdit.title);
      setContent(noteToEdit.content);
    }
  }, [noteToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const note = { title, content, date: new Date().toLocaleString() };

    if (noteToEdit) {
      onUpdateNote(note); // Call update note if in edit mode
    } else {
      onAddNote(note); // Otherwise, add a new note
    }

    // Reset the form
    setTitle('');
    setContent('');
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <h2>{noteToEdit ? 'Edit Note' : 'Add Note'}</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">
        {noteToEdit ? 'Update Note' : 'Add Note'}
      </button>
    </form>
  );
};

export default NoteForm;
