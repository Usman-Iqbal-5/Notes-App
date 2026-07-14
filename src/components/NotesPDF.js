// presentational component
function NotesPDF({ notes }) {
  return (
    <div id="pdf">
      <h1>My Notes</h1>

      {notes.map((note) => (
        <div key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
}

export default NotesPDF;
