import type { BlogType } from "$lib/types/blogs.types";
import type { ExtensionType } from "$lib/types/extensions.types";
import { writable } from "svelte/store";

const blogs = writable<BlogType[]>([])
const extensions = writable<ExtensionType[]>([])

export {
    blogs,
    extensions
}