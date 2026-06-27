function ActionTable({ actionItems }) {
  if (!actionItems || actionItems.length === 0) {
    return (
      <div className="text-center py-6 text-gray-500">
        No action items found.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md">

        <thead>

          <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">

            <th className="px-4 py-3 text-left">👤 Owner</th>

            <th className="px-4 py-3 text-left">📌 Task</th>

            <th className="px-4 py-3 text-left">📅 Due Date</th>

            <th className="px-4 py-3 text-center">📍 Status</th>

          </tr>

        </thead>

        <tbody>

          {actionItems.map((item, index) => (

            <tr
              key={index}
              className="border-b hover:bg-slate-50 transition"
            >

              <td className="px-4 py-3 font-medium">
                {item.owner}
              </td>

              <td className="px-4 py-3">
                {item.task}
              </td>

              <td className="px-4 py-3">
                {item.dueDate}
              </td>

              <td className="px-4 py-3 text-center">

                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Pending
                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>
    </div>
  );
}

export default ActionTable;