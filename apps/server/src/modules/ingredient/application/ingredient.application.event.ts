export namespace IngredientApplicationEvent {
  export namespace IngredientCreated {
    export const key = 'ingredient.application.ingredient.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
