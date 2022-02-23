import { Outlet } from "react-router-dom";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="flex flex-col items-center lg:justify-center gap-2 h-screen bg-slate-300 p-5">
      <div className="relative w-full lg:w-1/2">
        <SearchBar />
      </div>
      <Outlet />
    </div>
  );
}

export default App;
