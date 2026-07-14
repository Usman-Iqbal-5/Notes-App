import { useState } from "react";
import Button from "./Button"

function EditForm({ note, onUpdatingEditedNote, darkMode }) {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const [color, setColor] = useState(note.color);

  function handleSubmit(e) {
    e.preventDefault();

    if (!content || !title) return;

    const updatedNote = {
      id: note.id,
      title,
      content,
      color,
    };

    console.log(note.content);

    onUpdatingEditedNote(updatedNote);

    setTitle("");
    setContent("");
    setColor("");
  }

  const formInputStyles = {
    backgroundColor: "rgb(66, 66, 66)",
    color: "white",
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Edit note</h2>
        <label className="form-title">title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title..."
          style={darkMode ? formInputStyles : {}}
        />
        <label className="form-content">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter content..."
          style={darkMode ? formInputStyles : {}}
        ></textarea>
        <article className="radio-button-container">
          <label>Note Colour</label>
          <label>
            <input
              type="radio"
              value="yellow"
              name="color"
              checked={color === "yellow"}
              onChange={(e) => setColor(e.target.value)}
            />
            Yellow
          </label>
          <label>
            <input
              type="radio"
              value="orange"
              name="color"
              checked={color === "orange"}
              onChange={(e) => setColor(e.target.value)}
            />
            Orange
          </label>
          <label>
            <input
              type="radio"
              name="color"
              value="chartreuse"
              checked={color === "chartreuse"}
              onChange={(e) => {
                setColor(e.target.value);
              }}
            />
            Green
          </label>
        </article>

        <Button>Save</Button>
      </form>
    </>
  );
}

export default EditForm;