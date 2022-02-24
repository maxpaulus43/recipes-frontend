import { useEffect, useState } from "react";
import data from "../data.json";
import RecipeQuickView from "./RecipeQuickView";
import Fuse from "fuse.js";
import React from "react";

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  const [input, setInput] = useState("");
  const fuse = new Fuse(data, {
    keys: ["name", "tags", "activeTime"],
  });
  const searchResults = fuse.search(input.trim());

  useEffect(() => {
    function handleEscapeKey({ key }: KeyboardEvent) {
      if (key === "Escape") {
        setInput("");
      }
    }
    document.addEventListener("keydown", handleEscapeKey, false);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey, false);
    };
  }, []);

  return (
    <div>
      <input
        className="p-2 border-2 rounded-md w-full"
        type="text"
        value={input}
        placeholder="search for recipe"
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
      {input && searchResults.length > 0 && (
        <div
          onClick={() => setInput("")}
          className="flex flex-col gap-2 items-stretch 
                        absolute 
                        bg-white 
                        max-h-64 p-2 rounded-md w-full overflow-auto shadow-md"
        >
          {searchResults.map(({ item: r }) => {
            return <RecipeQuickView recipe={r} key={r.id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
