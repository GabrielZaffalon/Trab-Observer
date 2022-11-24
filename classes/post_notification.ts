import ISubject from "../interfaces/isubject.ts"
import IObserver from "../interfaces/iobserver.ts"
import Post from "../classes/post.ts"

export default class PostNotification implements ISubject {
    private observers: IObserver[] = []

    constructor(public readonly post: Post) {}

    follow(sub: IObserver): void {
        this.observers.push(sub)
    }

    unfollow(sub: IObserver): void {
        this.observers = this.observers.filter(
            (element: IObserver) => element !== sub
        )
    }

    unfollowAll() {
        this.observers = []
    }

    notify(sub: IObserver): void {
        sub.update(this.post)
    }

    notifyAll(): void {
        this.observers.forEach((sub) => this.notify(sub))
    }
}
