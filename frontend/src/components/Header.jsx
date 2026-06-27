import { FaRobot } from "react-icons/fa";

function Header() {
  return (
    <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 rounded-2xl shadow-xl text-white p-8">

      <div className="flex justify-between items-center flex-wrap gap-5">

        <div className="flex items-center gap-5">

          <FaRobot size={45} />

          <div>

            <h1 className="text-4xl font-bold">
              Smart Meeting Summary Generator
            </h1>

            <p className="text-blue-100 mt-2">
              AI Powered by Google Gemini
            </p>

          </div>

        </div>

        <div className="bg-green-500 px-4 py-2 rounded-full font-semibold shadow">
          🟢 AI Online
        </div>

      </div>

    </div>
  );
}

export default Header;