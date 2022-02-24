import React from "react";
import { Outlet } from "react-router-dom";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="flex flex-col items-center lg:justify-center bg-slate-300 gap-2 h-screen p-5">
      <div className="relative w-full lg:w-1/2">
        <SearchBar />
      </div>
      <Outlet />
    </div>
  );
}

export default App;
