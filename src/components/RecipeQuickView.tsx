import { Link } from "react-router-dom";
import Recipe from "../model/Recipe";
import Tag from "./Tag";

interface RecipeQuickViewProps {
  recipe: Recipe;
}

const RecipeQuickView: React.FC<RecipeQuickViewProps> = ({
  recipe: { id, name, activeTime, tags },
}) => {
  return (
    <Link to={`/recipes/${id}` }>
      <div className="flex flex-row gap-3 p-2 rounded-md hover:bg-gray-100">
        <div className="w-1/5">
          <span className="font-bold">{name}</span>
        </div>
        <div className="w-0 border-2" />
        <div className="flex-grow">
          <div className="">
            <span>Cook Time: {activeTime}min</span>
          </div>
          {tags && tags.length > 0 && (
            <div className="flex-row gap-1 flex-wrap flex w-full ">
              {tags?.map((t) => {
                return <Tag label={t} key={t} small />;
              })}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default RecipeQuickView;
