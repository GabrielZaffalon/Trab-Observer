import Post from "./classes/post.ts"
import Feed from "./classes/feed.ts"
import follower from "./classes/follower.ts"
import PostNotification from "./classes/post_notification.ts"

const post = new Post(
    "0Eub-aQs-44",
    "O dia ta tão lindo para um passeio no parque",
    "minha foto no parque",
    "https://www.instagram.com/p/CSSYMZJJcck/"
)

const postNotification = new PostNotification(post)

// Observers
const gabriel = new follower(1, "Gabriel Zaffalon")
const thomas = new follower(2, "Thomas Blanco")
const camila = new follower(3, "Camila Garcia")
const feedYoutube = new Feed("UCFuIUoyHB12qpYa8Jpxoxow")

postNotification.follow(gabriel)
postNotification.follow(thomas)
postNotification.follow(camila)
postNotification.follow(feedYoutube)

console.log("\nNotificando os observers...")
postNotification.notifyAll()

// Unfollow camila
postNotification.unfollow(camila)

// Notify again
console.log("\nNotificando os observers...")
postNotification.notifyAll()
