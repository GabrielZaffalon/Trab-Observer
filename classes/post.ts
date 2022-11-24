export default class Post {
    constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly photo: string,
        public readonly link: string
    ) {}
}
