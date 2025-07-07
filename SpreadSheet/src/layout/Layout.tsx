

import { useState } from "react";
import Tabs from "../components/Tabs";
import Toolbar from "../components/Toolbar";
import SpreadsheetTable from "../components/SpreadSheetTable";

function Layout() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 px-2 py-4 sm:px-4 md:px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md p-4 sm:p-6 space-y-4 sm:space-y-6">
        <Tabs active={activeTab} onTabChange={setActiveTab} />
        <Toolbar />
        <SpreadsheetTable />
      </div>
    </div>
  );
}

export default Layout;
