
import Header from "../components/Header";
import SheetTitleBar from "../components/SheetTitleBar";
import SpreadsheetTable from "../components/SpreadSheetTable";
import Toolbar from "../components/Toolbar";

const Layout = () => {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen flex flex-col font-sans">
      <Header />
      <Toolbar />
      <div className="flex-grow overflow-auto">
        <SheetTitleBar/>
        <SpreadsheetTable/>
      </div>
    </div>
  );
};

export default Layout;
