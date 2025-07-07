
const Toolbar = () => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 mb-4 px-2 sm:px-0">
      {/* Left Side Buttons */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => console.log("Share clicked")}
          className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 hover:shadow-sm transition"
        >
           Share
        </button>
        <button
          onClick={() => console.log("Filters clicked")}
          className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 text-sm font-medium hover:bg-gray-200 hover:shadow-sm transition"
        >
           Filters
        </button>
      </div>

      {/* Right Side Button */}
      <button
        onClick={() => console.log("Add Row clicked")}
        className="px-4 py-2 rounded-md bg-green-600 text-white text-sm font-medium hover:bg-green-700 hover:shadow-sm transition"
      >
        ➕ Add Row
      </button>
    </div>
  );
};

export default Toolbar;
