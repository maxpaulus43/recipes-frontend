import React from "react"
import { useSearchParams } from "react-router-dom"
import RecipeQuickView from "../components/RecipeQuickView"
import { useSearchResultsForTags } from "../hooks/useSearchResults"

interface ResultsViewProps {}

const ResultsView: React.FC<ResultsViewProps> = () => {
  let [searchParams, setSearchParams] = useSearchParams()

  let tags: string[] = []
  for (const [k, v] of searchParams) {
    if (k === "tag" || k === "tags") {
      tags.push(v)
    }
  }
  const searchResults = useSearchResultsForTags(tags)

  return (
    <div className="w-full">
      {searchResults?.map((r) => {
        return <RecipeQuickView recipe={r} key={r.id}/>
      })}
    </div>
  )
}

export default ResultsView
