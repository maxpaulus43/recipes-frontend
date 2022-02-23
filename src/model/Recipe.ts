export default interface Recipe {
    id: number;
    name: string;
    totalTime: number; // in minutes
    activeTime: number; // in minutes
    tags?: string[];
    ingredients?: Ingredient[];
    instructions?: string[];
}

export interface Ingredient {
    label: string;
    quantity: number;
    unit: string;
    prep?: string;
}