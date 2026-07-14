import { useState } from "react";
import Button from "./Button"

function AddNoteForm({ onAddNote, darkMode }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState("orange");

  const formInputStyles = {
    backgroundColor: "rgb(66, 66, 66)",
    color: "white",
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (!content || !title) return;

    const note = {
      id: crypto.randomUUID(),
      title,
      content,
      color,
    };

    onAddNote(note);

    setTitle("");
    setContent("");
    setColor("orange");

    // console.log(note);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add new note</h2>
      <label className="form-title">title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title..."
        className="title"
        style={darkMode ? formInputStyles : {}}
      />
      <label className="form-content">Content</label>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter content..."
        className="content"
        style={darkMode ? formInputStyles : {}}
      ></textarea>

      <article className="radio-button-container">
        <label>Note Colour</label>
        <label>
          <input
            type="radio"
            name="color"
            value="yellow"
            checked={color === "yellow"}
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
          Yellow
        </label>
        <label>
          <input
            type="radio"
            name="color"
            value="orange"
            checked={color === "orange"}
            onChange={(e) => {
              setColor(e.target.value);
            }}
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
  );
}

export default AddNoteForm;