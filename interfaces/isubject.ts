import IObserver from "./iobserver.ts"

export default interface ISubject {
    follow(observer: IObserver): void
    unfollow(observer: IObserver): void
    unfollowAll(): void
    notify(observer: IObserver): void
    notifyAll(): void
}
