<script lang="ts">
    import AnimatedTitle from "$lib/components/animated-title.svelte";
    import { Badge } from "$lib/components/ui/badge";
    import { blogs } from "$lib/data-content";
    import Icon from "@iconify/svelte";
    import { goto } from "$app/navigation";
    import DelayContent from "$lib/components/delay-content.svelte";
    import {incrementBlogViews} from "$lib/microcms";

    function getRandomBlog() {
        const randomId = $blogs[Math.floor((Math.random() * $blogs.length))].id;
        goto(`/blogs/${randomId}`)
    }
</script>

<div class="flex justify-center w-full h-screen font-writer-regular mb-[5rem] sm:mb-0">
    <div class="w-full md:w-max">
        <div class="text-center mt-[7rem] md:mt-[12rem] flex flex-col items-center leading-[2.1rem]">
            <DelayContent delay={0}>
                <AnimatedTitle class="text-[30px] font-googlesans-medium">Blogs</AnimatedTitle>
            </DelayContent>
            <DelayContent delay={80}>
                <p class="text-primary text-opacity-40 text-[12px] md:text-[13px]">What I wrote and experienced.</p>
            </DelayContent>
            <DelayContent delay={160}>
                <div class="cursor-pointer mt-1 group flex items-center gap-1.5 w-max border-[1px] text-primary text-opacity-80 bg-primary bg-opacity-[8%] border-border transition-all duration-200 hover:bg-blue-500 hover:bg-opacity-25 hover:border-blue-500 px-3 h-8 rounded-[3px] text-[14px]">
                    <p class="mt-[4px]" on:click={() => getRandomBlog()}>Random View</p>
                    <Icon icon="lucide:move-right" class="transition-all ml-0 group-hover:ml-1"/>
                </div>
            </DelayContent>
        </div>
        <div class="grid grid-cols-1 w-full px-4 md:px-0 md:grid-cols-2 md:w-[45rem] lg:grid-cols-3 lg:w-[55rem] xl:grid-cols-4 gap-4 mt-6 xl:w-[70rem]" style="grid-template-rows: repeat(auto-fill, auto)">
            {#each $blogs as blog, index}
                <DelayContent delay={160+index*50} href="./blogs/{blog.id}" class="border-[1px] border-border rounded-[5px] py-3 px-3 leading-[16px] cursor-pointer transition-all duration-150 hover:border-blue-500 hover:bg-blue-500 hover:bg-opacity-20 group">
                    <div class="flex items-center justify-between">
                        <p class="text-[15px] whitespace-nowrap overflow-hidden text-ellipsis pr-8">{blog.title}</p>
                        <div class="flex items-center justify-center gap-1 text-primary text-opacity-30 mr-0.5">
                            <Icon icon="fluent:eye-16-regular"/>
                            <p class="text-[11px]">{blog.view}</p>
                        </div>
                    </div>
                    <p class="text-[11px] text-primary text-opacity-40 whitespace-nowrap overflow-hidden text-ellipsis">{blog.description}</p>
                    <div class="flex items-center gap-1 mt-[1px]">
                        {#each (blog.tags.split(",")) as tag}
                            <Badge class="px-1.5 rounded-[3px] py-0 text-[10px]">{tag}</Badge>
                        {/each}
                    </div>
                </DelayContent>
            {/each}
        </div>
    </div>
</div>