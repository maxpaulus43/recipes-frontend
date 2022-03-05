import { Ingredient } from "./Ingredient";

export default interface Recipe {
  id: number
  name: string
  totalTime: number // in minutes
  activeTime: number // in minutes
  tags?: string[]
  ingredients?: Ingredient[]
  instructions?: string[]
}
