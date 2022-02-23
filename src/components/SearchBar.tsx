import { useEffect, useRef, useState } from "react";
import data from "../data.json";
import RecipeQuickView from "./RecipeQuickView";
import Fuse from "fuse.js";

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  const [input, setInput] = useState("");
  const fuse = new Fuse(data, { keys: ["name", "tags"], includeMatches: true });
  const searchResults = fuse.search(input);
  useEffect(() => {
    function handleKeyDown({ key }: KeyboardEvent) {
      if (key === "Escape") {
        setInput("");
      }
    }
    document.addEventListener("keydown", handleKeyDown, false);
    return () => {
      document.removeEventListener("keydown", handleKeyDown, false);
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
          setInput((event.target.value as string).trim());
        }}
      />
      {input.length > 0 && searchResults.length > 0 && (
        <div
          className="flex flex-col gap-2 items-center 
                        absolute 
                        bg-white 
                        max-h-64 p-2 rounded-md w-full overflow-auto shadow-md"
        >
          {searchResults.map(({ item: r }) => {
            return (
              <RecipeQuickView
                recipe={r}
                key={r.id}
                onClick={() => setInput("")}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
