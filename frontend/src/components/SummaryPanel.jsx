import SummaryCard from "./SummaryCard";
import ActionTable from "./ActionTable";
import EmptyState from "./EmptyState";
import CopyButton from "./CopyButton";
import ExportPdfButton from "./ExportPdfButton";
import MeetingAnalytics from "./MeetingAnalytics";
import AIInfoCard from "./AIInfoCard";

function SummaryPanel({ summary }) {
  if (!summary) {
    return <EmptyState />;
  }

  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex justify-between items-center flex-wrap gap-3">
          <h2 className="text-3xl font-bold">🤖 AI Generated Summary</h2>

          <div className="flex gap-3">
            <CopyButton summary={summary} />

            <ExportPdfButton summary={summary} />
          </div>
        </div>
      </div>

      {/* Report Information */}

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Report ID</p>

            <p className="font-semibold text-lg">{summary.reportId}</p>
          </div>

          <div>
            <p className="text-sm text-gray-600">Generated At</p>

            <p className="font-semibold text-lg">{summary.generatedAt}</p>
          </div>
        </div>
      </div>

      <MeetingAnalytics summary={summary} />

      <AIInfoCard summary={summary} />

      <SummaryCard title="Agenda" icon="📋">
        <ul className="list-disc ml-6 space-y-2">
          {summary.agenda.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </SummaryCard>

      {/* Key Decisions */}

      <SummaryCard title="Key Decisions" icon="🎯">
        <ul className="list-disc ml-6 space-y-2">
          {summary.keyDecisions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </SummaryCard>

      {/* Action Items */}

      <SummaryCard title="Action Items" icon="✅">
        <ActionTable actionItems={summary.actionItems} />
      </SummaryCard>
    </div>
  );
}

export default SummaryPanel;
