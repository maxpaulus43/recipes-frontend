import { useCallback, useEffect, useState } from "react"
import Recipe from "../model/Recipe"
import API from "../store/API"
import { debounce } from "../utils"

export default function useSearchResultsForInput(input: string) {
  const [searchResults, setSearchResults] = useState<Recipe[]>([])
  const searchRecipesByArgs = useCallback(
    debounce((opts) => {
      API.searchRecipesByArgs(opts).then((recipeResults) =>
        setSearchResults(recipeResults),
      )
    }),
    [],
  )
  useEffect(() => {
    if (input.length > 0) {
      searchRecipesByArgs({ name: input })
    }
  }, [input])
  return searchResults
}

export function useSearchResultsOnceForInput(input: string) {
  const [searchResults, setSearchResults] = useState<Recipe[]>()
  useEffect(() => {
    if (input.length > 0) {
      API.searchRecipesByArgs({ name: input }).then((recipeResults) => {
        setSearchResults(recipeResults)
      })
    }
  }, [])
  return searchResults
}
