import {
  SlidersHorizontal,
  Filter,
  SortAsc,
  LayoutGrid,
  Import,
  UploadCloud,
  Plus,
  ExternalLink,
} from "lucide-react";

const Toolbar = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 sm:px-6 py-3 border-b border-gray-200 bg-white gap-3 sm:gap-0">
      
      {/* Left Controls */}
      <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-gray-700">
        {[
          { icon: <SlidersHorizontal size={14} />, label: "Tool bar" },
          { icon: <LayoutGrid size={14} />, label: "Hide fields" },
          { icon: <SortAsc size={14} />, label: "Sort" },
          { icon: <Filter size={14} />, label: "Filter" },
          { icon: <LayoutGrid size={14} />, label: "Group" },
        ].map(({ icon, label }) => (
          <button
            key={label}
            className="flex items-center gap-1 px-3 py-1.5 border border-gray-200 rounded-md bg-white hover:bg-gray-100 transition"
          >
            {icon}
            {label}
          </button>
        ))}
      </div>

      {/* Right Controls */}
      <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium">
        <button
          className="flex items-center gap-1 px-3 py-1.5 border border-gray-200 rounded-md bg-white text-gray-700 hover:bg-gray-100 transition"
        >
          <Import size={14} />
          Import
        </button>

        <button
          className="flex items-center gap-1 px-3 py-1.5 border border-gray-200 rounded-md bg-white text-gray-700 hover:bg-gray-100 transition"
        >
          <UploadCloud size={14} />
          Export
        </button>

        <button
          className="flex items-center gap-1 px-3 py-1.5 border border-gray-200 rounded-md bg-white text-gray-700 hover:bg-gray-100 transition"
        >
          <ExternalLink size={14} />
          Share
        </button>

        <button
          className="flex items-center gap-1 px-4 py-1.5 rounded-md bg-green-500 text-white hover:bg-green-600 transition"
        >
          <Plus size={14} />
          New Action
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
