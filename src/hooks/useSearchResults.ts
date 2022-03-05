import { useCallback, useEffect, useState } from "react"
import Recipe from "../model/Recipe"
import API from "../store/API"
import { debounce } from "../utils"

export default function useDebouncedSearchResultsForInput(input: string) {
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

export function useSearchResultsForTags(tags: string[]) {
  const [searchResults, setSearchResults] = useState<Recipe[]>()
  useEffect(() => {
    if (tags.length > 0) {
      const tagsConcatenated = tags.reduce(
        (prevTag, currTag, idx) => `${prevTag}${idx > 0 ? ",": ""}${currTag}`,
        "",
      )
      API.searchRecipesByArgs({ tags: tagsConcatenated }).then(
        (recipeResults) => {
          setSearchResults(recipeResults)
        },
      )
    }
  }, tags)
  return searchResults
}

export function useSearchResultsForInput(input: string) {
  const [searchResults, setSearchResults] = useState<Recipe[]>()
  useEffect(() => {
    if (input.length > 0) {
      API.searchRecipesByArgs({ name: input }).then((recipeResults) => {
        setSearchResults(recipeResults)
      })
    }
  }, [input])
  return searchResults
}
