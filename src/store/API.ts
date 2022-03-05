import { Ingredient } from "../model/Ingredient"
import Recipe from "../model/Recipe"

const endpoint = "http://127.0.0.1:5000"

function parseRecipesJson(json: any): Recipe[] {
  return json["recipes"].map((obj) => ({
    id: obj["recipeId"],
    name: obj["name"],
    totalTime: parseInt(obj["total_time"]),
    activeTime: parseInt(obj["active_time"]),
    tags: obj["tags"],
    ingredients: (obj["ingredients"] as any[]).map(parseIngredientJson),
    instructions: obj["instructions"],
  }))
}

function parseIngredientJson(json: any): Ingredient {
  return {
    label: json["name"],
    quantity: json["amount"],
    unit: "todo",
    prep: json["prep"],
  }
}

async function getAllRecipes(): Promise<Recipe[]> {
  return fetch(`${endpoint}/recipes`)
    .then((res) => res.json())
    .then(parseRecipesJson)
}

interface searchOptions {
  name?: string
}
async function searchRecipesByArgs(opts: searchOptions): Promise<Recipe[]> {
  const queryParams = Object.keys(opts).reduce((prevKey, currKey) => {
    return prevKey + `${encodeURIComponent(currKey)}=${encodeURIComponent(opts[currKey])}`
  }, "")

  console.log(`fetching: ${`${endpoint}/recipes?${queryParams}`}`)
  return fetch(`${endpoint}/recipes?${queryParams}`)
    .then((res) => res.json())
    .then(parseRecipesJson)
}

async function getAllTags(): Promise<string[]> {
  return fetch(`${endpoint}/recipes/tags`)
    .then((val) => val.json())
    .then((json) => json["tags"])
}

async function createNewRecipe(): Promise<Recipe> {
  return Promise.resolve({ id: 1, activeTime: 1, totalTime: 1, name: "blah" }) // TODO
}

async function updateRecipe(): Promise<Recipe> {
  return Promise.resolve({ id: 1, activeTime: 1, totalTime: 1, name: "blah" }) // TODO
}

export default {
  getAllRecipes,
  searchRecipesByArgs,
  getAllTags,
  createNewRecipe,
  updateRecipe,
}
