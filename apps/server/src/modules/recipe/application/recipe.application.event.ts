export namespace RecipeApplicationEvent {
  export namespace RecipeCreated {
    export const key = 'recipe.application.recipe.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
