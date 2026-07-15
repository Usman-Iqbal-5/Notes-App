import EditIcon from "./EditIcon";
import DeleteIcon from "./DeleteIcon";

function Note({ note, onSelectFullNote, onSelectEditNote, onDeleteNote }) {
  const previewContentLength = 8;
  const previewContent = note.content
    .split(" ")
    .slice(0, previewContentLength)
    .join(" ");
  const previewTitle = note.title.split(" ").slice(0, 1).join(" ");

  function handleDeleteNote() {
    onDeleteNote(note);
  }

  function handleEditNote(){
    onSelectEditNote(note)
  }

  return (
    <li style={{ backgroundColor: note.color }} className="note">
      <div className="title-container">
        <div>
          {note.title.split(" ").length > 1
            ? `${previewTitle} ...`
            : previewTitle}
        </div>
        <div className="icon-container">
          <EditIcon onHandleEditNote={handleEditNote} />
          <DeleteIcon onHandleDeleteNote={handleDeleteNote} />
        </div>
      </div>
      <div>
        {note.content.split(" ").length > previewContentLength
          ? `${previewContent} ...`
          : previewContent}
      </div>
      <p
        className="read-more"
        onClick={() => {
          onSelectFullNote(note);
        }}
      >
        Read More
      </p>
    </li>
  );
}

export default Note;