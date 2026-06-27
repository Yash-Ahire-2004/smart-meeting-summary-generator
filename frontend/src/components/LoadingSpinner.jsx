function LoadingSpinner() {

    return (

        <div className="flex flex-col items-center py-8">

            <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-600"></div>

            <p className="mt-4 text-blue-600 font-semibold">

                🤖 AI is analyzing your meeting...

            </p>

        </div>

    );

}

export default LoadingSpinner;