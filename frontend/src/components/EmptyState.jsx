import { FaRobot } from "react-icons/fa";

function EmptyState() {

    return (

        <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center justify-center min-h-[600px]">

            <FaRobot
                size={70}
                className="text-blue-600 mb-6"
            />

            <h2 className="text-3xl font-bold">

                AI Generated Summary

            </h2>

            <p className="text-gray-500 text-center mt-5">

                Paste a meeting transcript

                <br />

                and click

                <br />

                <span className="font-semibold text-blue-600">

                    Generate Summary

                </span>

            </p>

        </div>

    );

}

export default EmptyState;