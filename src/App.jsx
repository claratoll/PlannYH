import './App.css';
import Note from './Component/Note';
import Navbar from './Component/Navbar';
import { useState } from 'react';
import Sidebar from './Component/Sidebar';
function App() {
  const [notes, setNotes] = useState([]); // State to store the list of notes

  function handleClick() {
    // Create a new array of notes by adding a new Note component to the existing array
    setNotes([...notes, <Note key={notes.length} />]);
  }

  return (
    <div className='app-container'>
      <header>
        <Navbar title='Brainstorm view' />
      </header>
      <main>
        <Sidebar />
        <section className='canvas'>
          {notes.map((note, index) => (
            <div key={index}>{note}</div>
          ))}
        </section>
        <button className='add-note-button' onClick={handleClick}>
          +
        </button>
      </main>
    </div>
  );
}

export default App;
