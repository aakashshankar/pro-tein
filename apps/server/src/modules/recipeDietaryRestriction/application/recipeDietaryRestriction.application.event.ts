export namespace RecipeDietaryRestrictionApplicationEvent {
  export namespace RecipeDietaryRestrictionCreated {
    export const key =
      'recipeDietaryRestriction.application.recipeDietaryRestriction.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
