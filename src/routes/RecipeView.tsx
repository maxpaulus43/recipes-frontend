import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Tag from "../components/Tag"
import data from "../data.json"
import Recipe from "../model/Recipe"

interface RecipeViewProps {}

const RecipeView: React.FC<RecipeViewProps> = () => {
  const { recipeId } = useParams()
  const [recipe, setRecipe] = useState<Recipe | null>()
  useEffect(() => {
    const foundRecipe = data.find((d) => `${d.id}` === recipeId)
    setRecipe(foundRecipe ?? null)
  }, [recipeId])

  return recipe === undefined ? (
    <div>Loading...</div>
  ) : recipe === null ? (
    <div>Recipe not found</div>
  ) : (
    <div className="w-full max-w-xl">
      <h1 className="text-center text-2xl">{recipe.name}</h1>
      <div className="flex flex-col items-center">
        <div>Active Cook Time: {recipe.activeTime}min</div>
        <div>Total Cook Time: {recipe.totalTime}min</div>
        {recipe.tags && (
          <>
            <div className="flex flex-row gap-2">
              {recipe.tags.map((t) => {
                return <Tag label={t} key={t} />
              })}
            </div>
          </>
        )}
        {recipe.ingredients && (
          <div>
            <br />
            <h2>Ingredients</h2>
            <ul className="list-disc">
              {recipe.ingredients.map((i) => {
                return (
                  <li key={i.label}>
                    <span>
                      {i.label} ({i.quantity} {i.unit})
                    </span>
                    {i.prep && <span>, {i.prep}</span>}
                  </li>
                )
              })}
            </ul>
          </div>
        )}
        {recipe.instructions && (
          <div>
            <br />
            <h3>Instructions</h3>
            <ol className="list-decimal">
              {recipe.instructions.map((i, idx) => {
                return <li key={i}>{i}</li>
              })}
            </ol>
          </div>
        )}
      </div>
    </div>
  )
}

export default RecipeView
