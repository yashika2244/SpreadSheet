
import { Bell } from "lucide-react";
import { CiSearch } from "react-icons/ci";
const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200 px-4 sm:px-6 py-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Top Row: Title */}
        <div className="text-sm text-gray-600">
          <span className="font-medium">Workspace</span> ▸ Folder 2 ▸{" "}
          <span className="font-semibold text-black">Spreadsheet 3</span>
        </div>

        {/* Bottom Row: Controls */}
        <div className="flex sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <div className="relative w-full sm:w-[240px]">
      <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
      <input
        type="text"
        placeholder="Search within sheet"
        className="w-full pl-10 pr-4 py-2 text-sm rounded-md bg-gray-100  outline-none focus:ring-1 focus:ring-gray-300"
      />
    </div>

          {/* Notification Icon with Badge */}
          <div className="relative">
            <button
              aria-label="Notifications"
              className="p-2 rounded-full hover:bg-gray-100 transition relative"
              onClick={() => console.log("Notifications clicked")}
            >
              <Bell size={20} className="text-gray-600" />
            </button>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-semibold px-1.5 py-[1px] rounded-full shadow">
              2
            </span>
          </div>

          {/* User Avatar */}
          <img
            src="/d.webp"
            alt="User Avatar"
            className="w-8 h-8 rounded-full border border-gray-300 object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
