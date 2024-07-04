export namespace RecipeIngredientApplicationEvent {
  export namespace RecipeIngredientCreated {
    export const key = 'recipeIngredient.application.recipeIngredient.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
