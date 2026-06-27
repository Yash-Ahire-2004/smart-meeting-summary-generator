function SummaryCard({ title, icon, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">

      <div className="flex items-center gap-3 mb-5">

        <div className="text-3xl">
          {icon}
        </div>

        <h2 className="text-2xl font-bold text-gray-800">
          {title}
        </h2>

      </div>

      {children}

    </div>
  );
}

export default SummaryCard;