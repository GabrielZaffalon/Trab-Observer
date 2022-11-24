import IObserver from "../interfaces/iobserver.ts"
import Post from "./post.ts"

export default class follower implements IObserver {
    constructor(public readonly id: number, public readonly name: string) {}

    update(post: Post) {
        console.log(`\n${this.name} has been notified about ${post.photo}`)
    }
}
