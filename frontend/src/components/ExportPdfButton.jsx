import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import toast from "react-hot-toast";

function ExportPdfButton({ summary }) {

  const exportPdf = () => {

    const doc = new jsPDF();

    const pageWidth = doc.internal.pageSize.getWidth();

    doc.setFillColor(41, 128, 185);
    doc.rect(0, 0, pageWidth, 30, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);

    doc.text("SMART MEETING SUMMARY", pageWidth / 2, 15, {
      align: "center",
    });

    doc.setFontSize(10);

    doc.text("AI Powered Meeting Intelligence", pageWidth / 2, 23, {
      align: "center",
    });

    let y = 40;

    doc.setTextColor(0, 0, 0);

    doc.setFontSize(12);

    doc.setFont("helvetica", "bold");

    doc.text("Report Information", 14, y);

    y += 8;

    doc.setFont("helvetica", "normal");

    doc.text(`Report ID : ${summary.reportId}`, 14, y);

    y += 7;

    doc.text(`Generated : ${summary.generatedAt}`, 14, y);

    y += 7;

    doc.text("AI Model : Google Gemini 2.5 Flash", 14, y);

    y += 12;

    doc.setFont("helvetica", "bold");

    doc.text("Meeting Analytics", 14, y);

    y += 8;

    autoTable(doc, {

      startY: y,

      head: [["Metric", "Value"]],

      body: [

        ["Agenda Items", summary.statistics.agendaCount],

        ["Key Decisions", summary.statistics.decisionCount],

        ["Action Items", summary.statistics.actionItemCount],

        ["Transcript Characters", summary.statistics.transcriptCharacters]

      ],

      theme: "grid",

      headStyles: {

        fillColor: [52, 73, 94]

      }

    });

    y = doc.lastAutoTable.finalY + 10;

    doc.setFont("helvetica", "bold");

    doc.setFontSize(15);

    doc.text("Agenda", 14, y);

    y += 8;

    doc.setFont("helvetica", "normal");

    doc.setFontSize(12);

    summary.agenda.forEach(item => {

      doc.text(`• ${item}`, 20, y);

      y += 7;

    });

    y += 5;

    doc.setFont("helvetica", "bold");

    doc.setFontSize(15);

    doc.text("Key Decisions", 14, y);

    y += 8;

    doc.setFont("helvetica", "normal");

    doc.setFontSize(12);

    summary.keyDecisions.forEach(item => {

      doc.text(`• ${item}`, 20, y);

      y += 7;

    });

    y += 8;

    autoTable(doc, {

      startY: y,

      head: [["Owner", "Task", "Due Date"]],

      body: summary.actionItems.map(item => [

        item.owner,

        item.task,
        item.dueDate

      ]),

      theme: "striped",

      headStyles: {

        fillColor: [41, 128, 185]

      },

      alternateRowStyles: {

        fillColor: [245, 245, 245]

      }

    });

    const pageHeight = doc.internal.pageSize.height;

    doc.setDrawColor(180);

    doc.line(14, pageHeight - 20, pageWidth - 14, pageHeight - 20);

    doc.setFontSize(10);

    doc.setTextColor(100);

    doc.text(

      "Generated using Smart Meeting Summary Generator",

      pageWidth / 2,

      pageHeight - 12,

      {

        align: "center"

      }

    );

    doc.text(

      "Developed by Yash Ahire",

      pageWidth / 2,

      pageHeight - 6,

      {

        align: "center"

      }

    );

    doc.save(`Meeting_Report_${summary.reportId}.pdf`);

    toast.success("PDF downloaded successfully!");

  };

  return (

    <button

      onClick={exportPdf}

      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow"

    >

      📄 Export PDF

    </button>

  );

}

export default ExportPdfButton;