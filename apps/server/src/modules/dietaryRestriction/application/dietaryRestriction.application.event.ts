export namespace DietaryRestrictionApplicationEvent {
  export namespace DietaryRestrictionCreated {
    export const key =
      'dietaryRestriction.application.dietaryRestriction.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
