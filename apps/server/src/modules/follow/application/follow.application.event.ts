export namespace FollowApplicationEvent {
  export namespace FollowCreated {
    export const key = 'follow.application.follow.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
