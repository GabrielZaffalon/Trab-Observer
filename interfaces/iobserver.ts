import Post from "../classes/post.ts"
export default interface IObserver {
    update(post: Post): void
}
