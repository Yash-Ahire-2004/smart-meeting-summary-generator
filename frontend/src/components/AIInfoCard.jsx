function AIInfoCard({ summary }) {

  if (!summary) return null;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-5">

      <h2 className="text-xl font-bold mb-4">
        🤖 AI Information
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <div className="bg-green-50 rounded-lg p-4">
          <p className="text-sm text-gray-500">Status</p>
          <p className="font-bold text-green-700">
            🟢 Online
          </p>
        </div>

        <div className="bg-blue-50 rounded-lg p-4">
          <p className="text-sm text-gray-500">Model</p>
          <p className="font-bold">
            Gemini 2.5 Flash
          </p>
        </div>

        <div className="bg-yellow-50 rounded-lg p-4">
          <p className="text-sm text-gray-500">Report ID</p>
          <p className="font-bold text-sm break-all">
            {summary.reportId}
          </p>
        </div>

        <div className="bg-purple-50 rounded-lg p-4">
          <p className="text-sm text-gray-500">Generated</p>
          <p className="font-bold text-sm">
            {summary.generatedAt}
          </p>
        </div>

      </div>

    </div>
  );
}

export default AIInfoCard;