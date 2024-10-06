<script lang="ts">
    import AnimatedTitle from "$lib/components/animated-title.svelte";
    import { Badge } from "$lib/components/ui/badge";
    import { extensions } from "$lib/data-content";
    import DelayContent from "$lib/components/delay-content.svelte"
    import Icon from "@iconify/svelte";
</script>

<div class="flex justify-center w-full h-screen font-writer-regular">
    <div class="w-full md:w-max">
        <div class="text-center mt-[7rem] md:mt-[12rem] flex flex-col items-center leading-[2.1rem]">
            <DelayContent delay={0}>
                <AnimatedTitle class="text-[30px] font-googlesans-medium">Extensions</AnimatedTitle>
            </DelayContent>
            <DelayContent delay={80}>
                <p class="text-primary text-opacity-40 text-[12px] md:text-[13px]">Projects that I created or maintaing.</p>
            </DelayContent>
            <DelayContent delay={160}>
                <a href="https://github.com/hideko-dev?tab=repositories" class="mt-1 group flex items-center gap-1.5 w-max border-[1px] text-primary text-opacity-80 bg-primary bg-opacity-[8%] border-border transition-all duration-200 hover:bg-blue-500 hover:bg-opacity-25 hover:border-blue-500 px-3 h-8 rounded-[3px] text-[14px]">
                    <p class="mt-[4px]">Repositories</p>
                    <Icon icon="lucide:move-right" class="transition-all ml-0 group-hover:ml-1"/>
                </a>
            </DelayContent>
        </div>
        <div class="grid grid-cols-1 w-full px-4 md:px-0 md:grid-cols-2 md:w-[45rem] lg:grid-cols-3 lg:w-[55rem] xl:grid-cols-4 gap-4 mt-6 xl:w-[70rem]" style="grid-template-rows: repeat(auto-fill, auto)">
            {#each $extensions as ext, index}
                <DelayContent delay={160+index*50} href={ext.url} class="border-[1px] border-border rounded-[5px] py-3 px-3 leading-[16px] cursor-pointer transition-all duration-150 hover:border-blue-500 hover:bg-blue-500 hover:bg-opacity-20 group">
                    <p class="text-[15px] whitespace-nowrap overflow-hidden text-ellipsis pr-8">{ext.title}</p>
                    <p class="text-[11px] text-primary text-opacity-40 whitespace-nowrap overflow-hidden text-ellipsis">{ext.description}</p>
                    <div class="flex items-center gap-1 mt-[1px]">
                        {#each (ext.tags.split(",")) as tag}
                            <Badge class="px-1.5 rounded-[3px] py-0 text-[10px]">{tag}</Badge>
                        {/each}
                    </div>
                </DelayContent>
            {/each}
        </div>
    </div>
</div>