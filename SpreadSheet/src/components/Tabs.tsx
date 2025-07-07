

interface TabsProps {
  active: string;
  onTabChange: (tab: string) => void;
}

const tabList = ["All", "Favorites", "Recently Updated", "Archived"];

const Tabs = ({ active, onTabChange }: TabsProps) => {
  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-start gap-2 sm:gap-3 px-2 sm:px-4 py-2">
        {tabList.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-200 border ${
              active === tab
                ? "bg-blue-600 text-white border-transparent shadow"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
