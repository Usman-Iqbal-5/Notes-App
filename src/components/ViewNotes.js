import Note from "./Note"

function ViewNotes({
  notes,
  onSelectFullNote,
  onSelectEditNote,
  onDeleteNote,
}) {
  return notes.length !== 0 ? (
    <ul className="notes-container">
      {notes.map((note) => {
        return (
          <Note
            note={note}
            key={note.id}
            onSelectFullNote={onSelectFullNote}
            onSelectEditNote={onSelectEditNote}
            onDeleteNote={onDeleteNote}
          />
        );
      })}
    </ul>
  ) : (
    <div className="no-notes">No notes yet</div>
  );
}

export default ViewNotes;