import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Recipe from "../model/Recipe";
import data from "../data.json";
import Tag from "../components/Tag";
import React from "react";

interface RecipeViewProps {}

const RecipeView: React.FC<RecipeViewProps> = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState<Recipe | null>();
  useEffect(() => {
    const foundRecipe = data.find((d) => `${d.id}` === recipeId);
    setRecipe(foundRecipe ?? null);
  }, [recipeId]);

  return recipe === undefined ? (
    <div>Loading...</div>
  ) : recipe === null ? (
    <div>Recipe not found</div>
  ) : (
    <div className="w-full max-w-xl">
      <h1>{recipe.name}</h1>
      <div>Active Cook Time: {recipe.activeTime}min</div>
      <div>Total Cook Time: {recipe.totalTime}min</div>
      <div className="flex flex-row gap-2">
        {recipe.tags?.map((t) => {
          return <Tag label={t} key={t} />;
        })}
      </div>
      <h2>Ingredients</h2>
      {recipe.ingredients?.map((i) => {
        return (
          <div key={i.label}>
            <span>
              {i.label} ({i.quantity} {i.unit})
            </span>
            {i.prep && <span>, {i.prep}</span>}
          </div>
        );
      })}
      <h3>Instructions</h3>
      {recipe.instructions?.map((i, idx) => {
        return (
          <span key={i}>
            {idx + 1}. {i}
          </span>
        );
      })}
    </div>
  );
};

export default RecipeView;
