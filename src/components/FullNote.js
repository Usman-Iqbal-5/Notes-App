function FullNote({ selectedFullNote }) {
  return (
    <>
      <h2 className="title">{selectedFullNote.title}</h2>
      <p className="content">{selectedFullNote.content}</p>
    </>
  );
}

export default FullNote;