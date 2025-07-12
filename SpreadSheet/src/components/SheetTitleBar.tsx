const SheetTitleBar = () => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-4 sm:px-6 py-1 border-b border-gray-200 bg-white text-sm font-medium text-gray-800">
      
      {/* Left Section: Sheet Title */}
      <div className="flex items-center gap-2 text-gray-700 whitespace-nowrap">
        <span role="img" aria-label="document">📄</span>
        <span className="text-sm sm:text-sm font-semibold bg-gray-100 md:w-[500px] rounded-sm py-1 px-1">Q3 Financial Overview    <span className="text-orange-500" role="img" aria-label="lightning">⚡</span></span>
     
      </div>

      {/* Right Section: Action Tabs */}
      <div className="flex flex-wrap items-center gap-2 text-xs text-gray-700">
        
        {/* ABC Tag */}
        <div className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-800 rounded-full border border-green-300 hover:bg-green-200 transition">
          <span role="img" aria-label="abc">🔤</span>
          <span className="font-medium">ABC</span>
        </div>

        {/* Answer a Question */}
        <div className="flex items-center gap-1 px-2 py-1 bg-purple-100 text-purple-800 rounded-full border border-purple-300 hover:bg-purple-200 transition">
          <span role="img" aria-label="chat">💬</span>
          <span className="font-medium">Answer a question</span>
        </div>

        {/* Extract Tag */}
        <div className="flex items-center gap-1 px-2 py-1 bg-orange-100 text-orange-800 rounded-full border border-orange-300 hover:bg-orange-200 transition">
          <span role="img" aria-label="extract">📤</span>
          <span className="font-medium">Extract</span>
        </div>

        {/* Plus Icon Button */}
        <button
          className="w-7 h-7 flex items-center justify-center text-white bg-gray-800 rounded-md hover:bg-gray-700 transition"
          aria-label="Add new tab"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default SheetTitleBar;
