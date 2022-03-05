import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App"
import "./index.css"
import RecipeView from "./routes/RecipeView"
import ResultsView from "./routes/ResultsView"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="recipe/:recipeName" element={<RecipeView />} />
          <Route path="recipes" element={<ResultsView />} />
          <Route path="*" element={<div>Page Not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
)
