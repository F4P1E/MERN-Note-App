import { useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [noteToEdit, setNoteToEdit] = useState(null); // State for note to edit

  const addNote = (newNote) => {
    setNotes([newNote, ...notes]);
  };

  const handleDelete = (noteToDelete) => {
    setNotes(notes.filter((note) => note !== noteToDelete));
  };

  // Handle search term change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter notes based on search term
  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle editing of notes
  const handleEditNote = (noteToEdit) => {
    setNoteToEdit(noteToEdit);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Note Taking App</h1>
      </header>

      <div className="search-bar-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search notes..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="note-form-container">
        <NoteForm onAddNote={addNote} noteToEdit={noteToEdit} onUpdateNote={addNote} />
      </div>

      <div className="note-list-container">
        <h2>Your Notes</h2>
        {filteredNotes.length === 0 ? (
          <p>No notes found. Try creating a new note!</p>
        ) : (
          <NoteList notes={filteredNotes} onDeleteNote={handleDelete} onEditNote={handleEditNote} />
        )}
      </div>
    </div>
  );
};

export default App;
