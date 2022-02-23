import { Link } from "react-router-dom";
import Recipe from "../model/Recipe";
import Tag from "./Tag";

interface RecipeQuickViewProps {
  recipe: Recipe;
  onClick?: () => void;
}

const RecipeQuickView: React.FC<RecipeQuickViewProps> = ({
  recipe: { id, name, activeTime, tags },
  onClick,
}) => {
  return (
    <Link to={`/recipes/${id}`} onClick={onClick}>
      <div className="flex flex-row justify-between gap-3 p-2 rounded-md hover:bg-gray-100">
        <div className="flex-1">
          <span className="font-bold">{name}</span>
        </div>
        <div className="w-0 border-2" />
        <div className="flex-1">
          <span>Cook Time: {activeTime}min</span>
        </div>
        {tags && tags.length > 0 && (
          <div className="flex-row gap-1 items-center flex-wrap w-60 hidden lg:flex">
            {tags?.map((t) => {
              return <Tag label={t} key={t} small />;
            })}
          </div>
        )}
      </div>
    </Link>
  );
};

export default RecipeQuickView;
