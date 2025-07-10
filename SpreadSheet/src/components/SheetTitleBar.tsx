

const SheetTitleBar = () => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 px-4 sm:px-6 py-3 border-b border-gray-200 bg-white text-sm font-medium text-gray-800">
      {/* Left Section: Title */}
      <div className="flex items-center gap-2 text-gray-700 whitespace-nowrap">
        <span>📄</span>
        <span className="font-medium">Q3 Financial Overview</span>
        <span className="text-orange-500">⚡</span>
      </div>

      {/* Right Section: Tabs */}
      <div className="flex flex-wrap gap-2 text-xs text-gray-700">
        {/* ABC */}
        <div className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-800 rounded-md border border-green-300 whitespace-nowrap">
          <span>🔤</span>
          <span className="font-medium">ABC</span>
        </div>

        {/* Answer a question */}
        <div className="flex items-center gap-1 px-2 py-1 bg-purple-100 text-purple-800 rounded-md border border-purple-300 whitespace-nowrap">
          <span>💬</span>
          <span className="font-medium">Answer a question</span>
        </div>

        {/* Extract */}
        <div className="flex items-center gap-1 px-2 py-1 bg-orange-100 text-orange-800 rounded-md border border-orange-300 whitespace-nowrap">
          <span>📤</span>
          <span className="font-medium">Extract</span>
        </div>

        {/* Plus icon */}
        <button className="w-6 h-6 flex items-center justify-center text-white bg-gray-800 rounded-md hover:bg-gray-700">
          +
        </button>
      </div>
    </div>
  );
};

export default SheetTitleBar;
