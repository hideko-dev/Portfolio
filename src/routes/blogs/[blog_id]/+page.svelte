<script lang="ts">
    import { page } from "$app/stores";
    import { blogs } from "$lib/data-content";
    import { dateConverter } from "$lib/utils";
    import Icon from "@iconify/svelte";
    import MarkdownViewer from "$lib/components/markdown-viewer.svelte";
    import { mediaQuery } from "svelte-legos";
    import { Skeleton } from "$lib/components/ui/skeleton";
    import { Badge } from "$lib/components/ui/badge";
    import { onMount } from "svelte";
    import { incrementBlogViews } from "$lib/microcms";


    const id = $page.params.blog_id;
    let data = $blogs.find(blog => blog.id === id);

    $: if($blogs) {
        if($blogs.length !== 0) {
            data = $blogs.find(blog => blog.id === id);
        }
    }

    onMount(async() => {
        if(data) await incrementBlogViews(data.id)
    })
</script>

<div class="min-h-screen max-h-max pb-8 w-full flex justify-center font-writer-regular">
    {#if data}
        <div class="w-full px-6 md:px-0 md:w-[35rem] mt-[8rem] sm:mt-[10rem]">
            <div class="leading-[1.5rem]">
                <a href="/blogs" class="mb-4 group w-max flex items-center gap-1 text-blue-400 relative after:absolute after:bottom-[2px] after:transition-all after:duration-200 after:right-0 hover:after:left-0 after:w-[0%] hover:after:w-[100%] after:h-[1px] after:bg-blue-500 cursor-pointer">
                    <Icon icon="bi:arrow-left"/>
                    <p class="text-[12px]">Back to Blogs</p>
                </a>
                <div class="flex items-center justify-between">
                    <p class="text-[25px] font-googlesans-bold">{data.title}</p>
                    <div class="flex items-center justify-center gap-1 text-primary text-opacity-30 mr-0.5 h-[1.4rem] pt-[1px] px-2 pr-[0.6rem] rounded-full bg-primary bg-opacity-5 border-primary border-opacity-10 border-[1px]">
                        <Icon icon="fluent:eye-16-regular"/>
                        <p class="text-[11px]">{data.view}</p>
                    </div>
                </div>
                <p class="text-primary text-opacity-50">{data.description}</p>
                <div class="flex items-center gap-1 mt-1">
                    {#each (data.tags.split(",")) as tag}
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
        <div class="w-full px-6 md:px-0 md:w-[35rem] mt-[8rem] sm:mt-[10rem]">
            <div class="leading-[1.5rem]">
                <a href="/blogs" class="mb-4 group w-max flex items-center gap-1 text-blue-400 relative after:absolute after:bottom-[2px] after:transition-all after:duration-200 after:right-0 hover:after:left-0 after:w-[0%] hover:after:w-[100%] after:h-[1px] after:bg-blue-500 cursor-pointer">
                    <Icon icon="bi:arrow-left"/>
                    <p class="text-[12px]">Back to Blogs</p>
                </a>
                <Skeleton class="h-8 w-[250px]" />
                <Skeleton class="h-4 mt-1 w-[300px]" />
                <div class="flex items-center gap-1 mt-1">
                    <Skeleton class="w-12 h-5" />
                </div>
                <div class="mt-5 leading-[1rem]">
                    <Skeleton class="w-[4.5rem] h-5" />
                    <Skeleton class="w-[7rem] h-4 mt-[3px]" />
                </div>
            </div>
            <div class="w-full h-[1px] bg-border my-6"/>
<!--            <MarkdownViewer body={data.body}/>-->
        </div>
    {/if}
</div>