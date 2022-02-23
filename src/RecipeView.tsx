import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Recipe from "./model/Recipe";
import data from "./data.json";

interface RecipeViewProps {}

const RecipeView: React.FC<RecipeViewProps> = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState<Recipe>();
  useEffect(() => {
      setTimeout(() => {
          setRecipe(data.find(d => `${d.id}` === recipeId))
      }, 300)
  }, [recipeId]);

  return recipe === undefined ? (
    <div>Loading...</div>
  ) : (
    <div>
      <h1>{recipe.name}</h1>
      <div>{recipe.activeTime}</div>
      <div>{recipe.totalTime}</div>
      {recipe.tags?.map((t) => {
        return (
          <div>
            <Link to={`/tags/${t}`}>{t}</Link>
          </div>
        );
      })}
      {recipe.ingredients?.map((i) => {
        return (
          <div>
            <span>
              {i.label} ({i.quantity} {i.unit})
            </span>
            <span></span>, <span>{i.prep}</span>
          </div>
        );
      })}
      {recipe.instructions?.map((i, idx) => {
        return (
          <span>
            {idx + 1}. {i}
          </span>
        );
      })}
    </div>
  );
};

export default RecipeView;
