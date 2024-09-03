export interface BlogType {
    id: string,
    description: string,
    title: string,
    body: string,
    createdAt: Date,
    tags: string[],
}