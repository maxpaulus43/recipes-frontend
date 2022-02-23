import { useState } from "react";
import { Outlet } from "react-router-dom";
import RecipeQuickView from "./RecipeQuickView";
import data from "./data.json";

function App() {
  const [input, setInput] = useState("");
  const searchResults = data.filter((d) => d.name.includes(input));

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-2 h-screen bg-slate-300">
        <div className="relative">
          <input
            className="p-2 border-2 rounded-md"
            type="text"
            placeholder="search for recipe"
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />
          {input.length > 0 && searchResults.length > 0 && (
            <div
              className="flex flex-col gap-2 items-center absolute bg-white max-h-64 p-2 rounded-md"
              style={{ width: "200%", left: "-50%" }}
            >
              {searchResults.map((d) => {
                return (
                  <RecipeQuickView
                    recipe={d}
                    key={d.id}
                    onClick={() => {
                      setInput("");
                    }}
                  />
                );
              })}
            </div>
          )}
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default App;
