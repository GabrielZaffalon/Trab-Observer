import IObserver from "../interfaces/iobserver.ts"
import Post from "./post.ts"

export default class Feed implements IObserver {
    public url: string
    constructor(public readonly profileId: string) {
        this.url = `https://www.instagram.com/feed/profile_id=${this.profileId}`
    }

    update(post: Post) {
        console.log(`\nNew post added in Feed RSS: "${post.title}"`)
        console.log(`\nCheck this out : "${this.url}"`)
    }
}
