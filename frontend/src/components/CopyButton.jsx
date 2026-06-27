import toast from "react-hot-toast";

function CopyButton({ summary }) {

    const handleCopy = () => {

        const text = `

Agenda

${summary.agenda.join("\n")}

Key Decisions

${summary.keyDecisions.join("\n")}

Action Items

${summary.actionItems
            .map(
                item =>
                    `${item.owner} | ${item.task} | ${item.dueDate}`
            )
            .join("\n")}

`;

        navigator.clipboard.writeText(text);

        toast.success("Summary copied successfully!");

    };

    return (

        <button
            onClick={handleCopy}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">

            📋 Copy Summary

        </button>

    );

}

export default CopyButton;