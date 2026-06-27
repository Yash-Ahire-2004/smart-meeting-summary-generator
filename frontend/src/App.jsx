import { useState } from "react";
import Header from "./components/Header";
import TranscriptPanel from "./components/TranscriptPanel";
import SummaryPanel from "./components/SummaryPanel";

function App() {

  const [summary, setSummary] = useState(null);

  return (

    <div className="min-h-screen bg-slate-100">

      <div className="max-w-7xl mx-auto p-6">

        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">

          <TranscriptPanel
            setSummary={setSummary}
          />

          <SummaryPanel
            summary={summary}
          />

        </div>

      </div>

    </div>

  );

}

export default App;