export namespace SavedRecipeApplicationEvent {
  export namespace SavedRecipeCreated {
    export const key = 'savedRecipe.application.savedRecipe.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
