import { Ingredient } from "../model/Ingredient"
import Recipe from "../model/Recipe"

const endpoint = "http://192.168.0.149:8082"

function parseRecipesJson(json: any): Recipe[] {
  return json["recipes"].map((obj) => ({
    id: obj["recipeId"],
    name: obj["name"],
    totalTime: obj["total_time"],
    activeTime: obj["active_time"],
    tags: obj["tags"],
    ingredients: parseIngredientsJson(obj["ingredients"]),
    instructions: obj["instructions"],
  }))
}

function parseIngredientsJson(json: { k: string; val: any }): Ingredient[] {
  return Object.entries(json)
    .map(([k, v]): Ingredient => {
      return {
        seq: v["seq"],
        label: k,
        amount: v["amount"],
        prep: v["prep"],
      }
    })
    .sort((a, b) => a.seq - b.seq)
}

async function getAllRecipes(): Promise<Recipe[]> {
  return fetch(`${endpoint}/recipes`)
    .then((res) => res.json())
    .then(parseRecipesJson)
}

interface searchOptions {
  name?: string
  tags?: string
}
async function searchRecipesByArgs(opts: searchOptions): Promise<Recipe[]> {
  const queryParams = Object.keys(opts).reduce((prevKey, currKey) => {
    return (
      prevKey +
      `${encodeURIComponent(currKey)}=${encodeURIComponent(opts[currKey])}`
    )
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
