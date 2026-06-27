import { useState } from "react";
import toast from "react-hot-toast";
import api from "../services/api";
import LoadingSpinner from "./LoadingSpinner";

function TranscriptPanel({ setSummary }) {
  const [transcript, setTranscript] = useState("");
  const [loading, setLoading] = useState(false);

  const generateSummary = async () => {
    if (!transcript.trim()) {
      toast.error("Please enter meeting transcript.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/summarize", {
        transcript,
      });

      setSummary(response.data);

      toast.success("Summary generated successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Unable to generate summary.");
    } finally {
      setLoading(false);
    }
  };

  const loadSample = () => {
    setTranscript(`John: Today's meeting is about Sprint Planning.

Sarah will complete the React UI by Friday.

Mike will build the backend before Monday.

We decided to launch Version 1 next Friday.`);
  };

  const clearAll = () => {
    setTranscript("");
    setSummary(null);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-5">
        📝 Meeting Transcript
      </h2>

      <textarea
        className="w-full h-80 border-2 border-gray-200 rounded-xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Paste your meeting transcript here..."
        value={transcript}
        onChange={(e) => setTranscript(e.target.value)}
      />

      <div className="flex justify-between items-center mt-3">

        <p className="text-sm text-gray-500">
          Characters: {transcript.length} / 10000
        </p>

        {loading && (
          <span className="text-blue-600 font-semibold">
            Processing...
          </span>
        )}

      </div>

      <div className="flex flex-wrap gap-3 mt-6">

        <button
          onClick={clearAll}
          className="bg-gray-600 hover:bg-gray-700 text-white px-5 py-3 rounded-xl transition"
        >
          🧹 Clear
        </button>

        <button
          onClick={loadSample}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl transition"
        >
          📄 Load Sample
        </button>

        <button
          onClick={generateSummary}
          disabled={loading}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-xl shadow-lg transition"
        >
          ✨ Generate Summary
        </button>

      </div>

      {loading && <LoadingSpinner />}

    </div>
  );
}

export default TranscriptPanel;