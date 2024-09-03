import type { BlogType } from "$lib/types/blogs.types";
import type { ExtensionType } from "$lib/types/extensions.types";

const blogs: BlogType[] = [
    {id: "kustom-ui", body: "# No Walls\naaes\n![test](https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg)\n![aets](https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_640.jpg)", title: "Kustom UI", createdAt: new Date(), description: "Bindings for SvelteKit Users.", tags: ["SvelteKit"]},
    {id: "kustomlabs", body: "# My Lab", title: "Kustom UI Aespaaaaaaaa", createdAt: new Date(), description: "Bindings for SvelteKit Users.", tags: ["All Ground", "BLACK"]},
    {id: "ae-ui", body: "# No Walls", title: "Kustom UI", createdAt: new Date(), description: "Bindings for SvelteKit Users.", tags: ["YU Like"]},
    {id: "ha-ui", body: "# No Walls", title: "Kustom UI", createdAt: new Date(), description: "Bindings for SvelteKit Users.", tags: ["Mosuse", "Tna"]},
    {id: "n-ui", body: "# No Walls", title: "Kustom UI", createdAt: new Date(), description: "Bindings for SvelteKit Users.", tags: ["Esta"]},
    {id: "hxda-ui", body: "# No Walls", title: "Kustom UI", createdAt: new Date(), description: "Bindings for SvelteKit Users.", tags: ["SvelteKit"]},
]

const extensions: ExtensionType[] = [
    {id: "kustom-ui", title: "Kustom UI", createdAt: new Date(), description: "Bindings for SvelteKit Users.", tags: ["SvelteKit"]},
    {id: "kustom-ui", title: "Kustom UI Aespaaaaaaaa", createdAt: new Date(), description: "Bindings for SvelteKit Users.", tags: ["All Ground", "BLACK"]},
    {id: "kustom-ui", title: "Kustom UI", createdAt: new Date(), description: "Bindings for SvelteKit Users.", tags: ["YU Like"]},
    {id: "kustom-ui", title: "Kustom UI", createdAt: new Date(), description: "Bindings for SvelteKit Users.", tags: ["Mosuse", "Tna"]},
    {id: "kustom-ui", title: "Kustom UI", createdAt: new Date(), description: "Bindings for SvelteKit Users.", tags: ["Esta"]},
    {id: "kustom-ui", title: "Kustom UI", createdAt: new Date(), description: "Bindings for SvelteKit Users.", tags: ["SvelteKit"]},
]

export {
    blogs,
    extensions
}