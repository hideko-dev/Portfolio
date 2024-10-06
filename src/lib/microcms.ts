import { createClient } from "microcms-js-sdk";
import {blogs} from "$lib/data-content";

export const client = createClient({
    serviceDomain: import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN,
    apiKey: import.meta.env.VITE_MICROCMS_API_KEY,
})

export async function incrementBlogViews(id: string) {
    blogs.update((value) => {
        return value.map(blog => {
            if (blog.id === id) {
                return {
                    ...blog,
                    view: blog.view + 1
                };
            }
            return blog;
        });
    });
    const data = await client.getAllContents({endpoint: "blogs"})
    await client.update({
        endpoint: "blogs",
        contentId: id,
        content: {
            view: data.find(a => a.id === id).view+1
        }
    })
}