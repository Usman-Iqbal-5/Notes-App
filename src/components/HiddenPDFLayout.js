import NotesPDF from "./NotesPDF";

function HiddenPDFLayout({notes}) {
  return (
    <div style={{ position: "absolute", left: "-9999px" }}>
      <NotesPDF notes={notes} />
    </div>
  );
}

export default HiddenPDFLayout;