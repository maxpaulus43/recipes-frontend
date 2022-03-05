import React, { useEffect, useState } from "react"
import useKeyEventHandler from "../hooks/useKeyEventHandler"
import useDebouncedSearchResultsForInput from "../hooks/useSearchResults"
import RecipeQuickView from "./RecipeQuickView"

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  const [input, setInput] = useState("")
  const searchResults = useDebouncedSearchResultsForInput(input)

  useKeyEventHandler("Escape", () => setInput(""))

  return (
    <div>
      <input
        className="p-2 border-2 rounded-md w-full"
        type="text"
        value={input}
        placeholder="search for recipe"
        onChange={(event) => {
          setInput(event.target.value)
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
          {searchResults.map((r) => {
            return <RecipeQuickView recipe={r} key={r.id} />
          })}
        </div>
      )}
    </div>
  )
}

export default SearchBar
