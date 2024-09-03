<script lang="ts">
    import { page } from "$app/stores";
    import { blogs } from "$lib/data-content";
    import { dateConverter } from "$lib/utils";
    import Icon from "@iconify/svelte";
    import MarkdownViewer from "$lib/components/markdown-viewer.svelte";
    import { mediaQuery } from "svelte-legos";
    import { Badge } from "$lib/components/ui/badge";
    const isDesktop = mediaQuery("(min-width: 768px)");

    const id = $page.params.blog_id;
    const data = blogs.find(blog => blog.id === id);
</script>

<div class="h-screen w-full flex justify-center font-writer-regular">
    {#if data}
        <div class="w-full px-6 md:px-0 md:w-[35rem] mt-[8rem] sm:mt-[10rem]">
            <div class="leading-[1.5rem]">
                <a href="/blogs" class="mb-4 group w-max flex items-center gap-1 text-blue-400 relative after:absolute after:bottom-[2px] after:transition-all after:duration-200 after:right-0 hover:after:left-0 after:w-[0%] hover:after:w-[100%] after:h-[1px] after:bg-blue-500 cursor-pointer">
                    <Icon icon="bi:arrow-left"/>
                    <p class="text-[12px]">Back to Blogs</p>
                </a>
                <p class="text-[25px] font-googlesans-bold">{data.title}</p>
                <p class="text-primary text-opacity-50">{data.description}</p>
                <div class="flex items-center gap-1 mt-1">
                    {#each data.tags as tag}
                        <Badge class="px-1.5 rounded-[3px] py-0 text-[10px] h-5">{tag}</Badge>
                    {/each}
                </div>
                <div class="mt-5 leading-[1rem]">
                    <p class="text-[13px]">by Hideko</p>
                    <p class="text-primary text-opacity-50 text-[11px]">{dateConverter(data.createdAt)}</p>
                </div>
            </div>
            <div class="w-full h-[1px] bg-border my-6"/>
            <MarkdownViewer body={data.body}/>
        </div>
    {:else}
        <p>aaespa</p>
    {/if}
</div>