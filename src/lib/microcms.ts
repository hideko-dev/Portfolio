import { createClient } from "microcms-js-sdk";
import {blogs} from "$lib/data-content";

export const client = createClient({
    serviceDomain: import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN,
    apiKey: import.meta.env.VITE_MICROCMS_API_KEY,
})

export async function incrementBlogViews(id: string) {
    blogs.update(items => {
        return items.map(item => {
            if (item.id === id) {
                return { ...item, data: item.view+1 };
            }
            return item;
        });
    });
    const data = (await client.getAllContents({endpoint: "blogs"})).find(a => a.id === id)
    await client.update({
        endpoint: "blogs",
        contentId: "kustom-ui",
        content: {
            view: data.view+1
        }
    })
}