import React from "react";
import { Outlet } from "react-router-dom";

interface RecipesProps {}

const Recipes: React.FC<RecipesProps> = () => {
  return <div>
    <div>Here are my recipes</div>
    <Outlet />
  </div>;
};

export default Recipes;
