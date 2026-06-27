function MeetingAnalytics({ summary }) {

  if (!summary || !summary.statistics) return null;

  const cards = [
    {
      title: "Agenda",
      value: summary.statistics.agendaCount,
      icon: "📋",
      color: "bg-blue-100 text-blue-700"
    },
    {
      title: "Decisions",
      value: summary.statistics.decisionCount,
      icon: "🎯",
      color: "bg-green-100 text-green-700"
    },
    {
      title: "Tasks",
      value: summary.statistics.actionItemCount,
      icon: "✅",
      color: "bg-yellow-100 text-yellow-700"
    },
    {
      title: "Characters",
      value: summary.statistics.transcriptCharacters,
      icon: "📝",
      color: "bg-purple-100 text-purple-700"
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

      {cards.map((card, index) => (

        <div
          key={index}
          className={`rounded-xl shadow-md p-4 text-center ${card.color}`}
        >

          <div className="text-3xl">
            {card.icon}
          </div>

          <h3 className="font-semibold mt-2">
            {card.title}
          </h3>

          <p className="text-2xl font-bold mt-1">
            {card.value}
          </p>

        </div>

      ))}

    </div>
  );
}

export default MeetingAnalytics;