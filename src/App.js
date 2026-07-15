import { useState, useEffect } from "react";
import downloadPDF from "./utils/exportPDF.js";
import Header from "./components/Header.js"
import ThemeToggle from "./components/ThemeToggle.js";
import Footer from "./components/Footer.js";
import FilterBar from "./components/FilterBar.js";
import HiddenPDFLayout from "./components/HiddenPDFLayout.js";
import EditForm from "./components/EditForm.js";
import Button from "./components/Button.js";
import AddNoteForm from "./components/AddNoteForm.js";
import ViewNotes from "./components/ViewNotes.js";
import Modal from "./components/Modal.js";
import FullNote from "./components/FullNote.js";

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");

    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [fullNoteOpen, setFullNoteOpen] = useState(false);
  const [editFormOpen, setEditFormOpen] = useState(false);
  const [selectedFullNote, setSelectedFullNote] = useState("");
  const [selectedEditNote, setSelectedEditNote] = useState("");
  const [newNoteFormOpen, setNewNoteFormOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme-preference");
    return saved ? JSON.parse(saved) : false;
  });

  const [filterOption, setFilterOption] = useState("all");

  const filteredNotes =
    filterOption === "all"
      ? notes
      : notes.filter((note) => note.color === filterOption);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem("theme-preference", JSON.stringify(darkMode));
  }, [darkMode]);

  function handleDeleteNote(note) {
    setNotes((prevNotes) =>
      prevNotes.filter((n) => {
        return n.id !== note.id;
      }),
    );
  }

  function handelAddingNote(note) {
    setNotes((preNotes) => [...preNotes, note]);
    setNewNoteFormOpen(false);
  }

  function handleOpenFullNote(boolean) {
    setFullNoteOpen(boolean);
    setSelectedFullNote("");
  }

  function handleOpenEditForm(boolean) {
    setEditFormOpen(boolean);
  }

  function handleSelectedEditNote(note) {
    setSelectedEditNote(note);
    setEditFormOpen(true);
  }

  function handleSelectedFullNote(note) {
    setSelectedFullNote(note);
    setFullNoteOpen(true);
  }

  function handleUpdatingEditedNote(note) {
    setNotes((prevNotes) =>
      prevNotes.map((n) => {
        return n.id === note.id ? note : n;
      }),
    );
    setEditFormOpen(false);
  }

  function handleClosingNewNoteForm(boolean) {
    setNewNoteFormOpen(boolean);
  }

  function handleOpeningNewNoteForm() {
    setNewNoteFormOpen(true);
  }

  function handleSettingTheme() {
    setDarkMode((prev) => !prev);
  }

  return (
    <div className={`app ${darkMode ? "dark-mode" : " "}`}>
      <Header>
        <Button onClick={handleOpeningNewNoteForm}>Add Note</Button>
        <ThemeToggle darkMode={darkMode} onDarkMode={handleSettingTheme} />
      </Header>
      {newNoteFormOpen && (
        <Modal
          onOpenModal={handleClosingNewNoteForm}
          bgColor="rgb(45, 45, 45)"
          color="white"
          width="35"
        >
          <AddNoteForm onAddNote={handelAddingNote} darkMode={darkMode} />
        </Modal>
      )}
      {fullNoteOpen && notes.length > 0 && (
        <Modal
          onOpenModal={handleOpenFullNote}
          bgColor={selectedFullNote.color}
          width="45"
        >
          <FullNote selectedFullNote={selectedFullNote} darkMode={darkMode} />
        </Modal>
      )}
      {editFormOpen && (
        <Modal
          onOpenModal={handleOpenEditForm}
          bgColor="rgb(45, 45, 45)"
          color="white"
          width="35"
        >
          <EditForm
            note={selectedEditNote}
            onUpdatingEditedNote={handleUpdatingEditedNote}
            darkMode={darkMode}
          />
        </Modal>
      )}
      <ViewNotes
        notes={filteredNotes}
        onSelectFullNote={handleSelectedFullNote}
        onSelectEditNote={handleSelectedEditNote}
        onDeleteNote={handleDeleteNote}
        darkMode={darkMode}
      />
      <HiddenPDFLayout notes={filteredNotes} />

      <Footer>
        <FilterBar
          filterOption={filterOption}
          onFilterOption={setFilterOption}
        />
        <Button onClick={downloadPDF}>Download PDF</Button>
      </Footer>
    </div>
  );
}


export default App;
