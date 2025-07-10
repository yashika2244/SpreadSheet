
// import {
//   SlidersHorizontal,
//   Filter,
//   SortAsc,
//   LayoutGrid,
//   Import,
//   UploadCloud,
//   Plus,
//   ExternalLink,
// } from "lucide-react";

// const Toolbar = () => {
//   return (
//     <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 sm:px-6 py-3 border-b border-gray-200 bg-white gap-3 sm:gap-0">
//       {/* Left Buttons */}
//       <div className="flex flex-wrap gap-2 text-sm">
//         <button
//           onClick={() => console.log("Toolbar clicked")}
//           className="flex items-center gap-1 px-3 py-1.5 border rounded-md border-gray-300 hover:bg-gray-100"
//         >
//           <SlidersHorizontal size={14} />
//           Tool bar
//         </button>
//         <button
//           onClick={() => console.log("Hide Fields clicked")}
//           className="flex items-center gap-1 px-3 py-1.5 border rounded-md border-gray-300 hover:bg-gray-100"
//         >
//           <LayoutGrid size={14} />
//           Hide fields
//         </button>
//         <button
//           onClick={() => console.log("Sort clicked")}
//           className="flex items-center gap-1 px-3 py-1.5 border rounded-md border-gray-300 hover:bg-gray-100"
//         >
//           <SortAsc size={14} />
//           Sort
//         </button>
//         <button
//           onClick={() => console.log("Filter clicked")}
//           className="flex items-center gap-1 px-3 py-1.5 border rounded-md border-gray-300 hover:bg-gray-100"
//         >
//           <Filter size={14} />
//           Filter
//         </button>
//         <button
//           onClick={() => console.log("Group clicked")}
//           className="flex items-center gap-1 px-3 py-1.5 border rounded-md border-gray-300 hover:bg-gray-100"
//         >
//           <LayoutGrid size={14} />
//           Group
//         </button>
//       </div>

//       {/* Right Buttons */}
//       <div className="flex flex-wrap gap-2 text-sm">
//         <button
//           onClick={() => console.log("Import clicked")}
//           className="flex items-center gap-1 px-3 py-1.5 border rounded-md border-gray-300 hover:bg-gray-100"
//         >
//           <Import size={14} />
//           Import
//         </button>
//         <button
//           onClick={() => console.log("Export clicked")}
//           className="flex items-center gap-1 px-3 py-1.5 border rounded-md border-gray-300 hover:bg-gray-100"
//         >
//           <UploadCloud size={14} />
//           Export
//         </button>
//         {/* NEW: Share Button */}
//         <button
//           onClick={() => console.log("Share clicked")}
//           className="flex items-center gap-1 px-3 py-1.5 border rounded-md border-gray-300 hover:bg-gray-100"
//         >
//           <ExternalLink  size={14} />
//           Share
//         </button>
//         <button
//           onClick={() => console.log("New Action clicked")}
//           className="flex items-center gap-1 px-4 py-1.5 bg-green-500 text-white rounded-md hover:bg-green-600"
//         >
//           <Plus size={14} />
//           New Action
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Toolbar;


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
    <div className="flex flex-col sm:flex-row sm:items-center justify-between px-3 sm:px-6 py-2 sm:py-3 border-b border-gray-200 bg-white gap-3 sm:gap-0">
      {/* Left Buttons */}
      <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
        <button
          onClick={() => console.log("Toolbar clicked")}
          className="flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1.5 border rounded-md border-gray-300 hover:bg-gray-100"
        >
          <SlidersHorizontal size={14} />
          Tool bar
        </button>
        <button
          onClick={() => console.log("Hide Fields clicked")}
          className="flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1.5 border rounded-md border-gray-300 hover:bg-gray-100"
        >
          <LayoutGrid size={14} />
          Hide fields
        </button>
        <button
          onClick={() => console.log("Sort clicked")}
          className="flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1.5 border rounded-md border-gray-300 hover:bg-gray-100"
        >
          <SortAsc size={14} />
          Sort
        </button>
        <button
          onClick={() => console.log("Filter clicked")}
          className="flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1.5 border rounded-md border-gray-300 hover:bg-gray-100"
        >
          <Filter size={14} />
          Filter
        </button>
        <button
          onClick={() => console.log("Group clicked")}
          className="flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1.5 border rounded-md border-gray-300 hover:bg-gray-100"
        >
          <LayoutGrid size={14} />
          Group
        </button>
      </div>

      {/* Right Buttons */}
      <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
        <button
          onClick={() => console.log("Import clicked")}
          className="flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1.5 border rounded-md border-gray-300 hover:bg-gray-100"
        >
          <Import size={14} />
          Import
        </button>
        <button
          onClick={() => console.log("Export clicked")}
          className="flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1.5 border rounded-md border-gray-300 hover:bg-gray-100"
        >
          <UploadCloud size={14} />
          Export
        </button>
        <button
          onClick={() => console.log("Share clicked")}
          className="flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1.5 border rounded-md border-gray-300 hover:bg-gray-100"
        >
          <ExternalLink size={14} />
          Share
        </button>
        <button
          onClick={() => console.log("New Action clicked")}
          className="flex items-center gap-1 px-3 py-1 sm:px-4 sm:py-1.5 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          <Plus size={14} />
          New Action
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
