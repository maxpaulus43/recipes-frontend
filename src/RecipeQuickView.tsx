import { Link } from "react-router-dom";
import Recipe from "./model/Recipe";

interface RecipeQuickViewProps {
  recipe: Recipe;
  onClick?: () => void;
}

const RecipeQuickView: React.FC<RecipeQuickViewProps> = ({
  recipe: { id, name, activeTime }, onClick
}) => {
  return (
    <Link to={`/recipes/${id}`} onClick={onClick}>
      <div className="flex flex-row justify-between gap-3 p-2 rounded-md hover:bg-gray-100">
        <div>
          <span className="font-bold">{name}</span>
        </div>
        <div className="w-0 border-2" />
        <div>
          <span>Cook Time: {activeTime}min</span>
        </div>
      </div>
    </Link>
  );
};

export default RecipeQuickView;
