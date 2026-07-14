import html2pdf from "html2pdf.js"

function downloadPDF() {
  const element = document.getElementById("pdf")

    const options = {
    margin: 10,
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
  }

  html2pdf().from(element).set(options).save("notes.pdf")
}
export default downloadPDF;