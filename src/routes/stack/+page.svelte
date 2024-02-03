<script>
    import Icon from "@iconify/svelte";
    import Vis from "./_components/Vis.svelte";
    import Title from "$lib/components/Title.svelte";
    import Selector from "./_components/Selector.svelte";
    import { value } from "$lib/stacks";
    import { Badge } from "$lib/components/ui/badge"

    const stacks = [
        {name: "JavaScript", type: "language"},
        {name: "PHP", type: "language"},
        {name: "Electron", type: "technology"},
        {name: "React", type: "frontend"},
        {name: "Express", type: "backend"}
    ]
</script>

<div class="min-h-[100vh]">
    <a href="/" class="h-[4.5rem] w-max flex items-center text-[30px] ml-[20px] opacity-60 transition-all hover:opacity-100 cursor-pointer"><Icon icon="mingcute:left-line"/></a>
    <div class="w-full mt-[5rem] px-[10%]">
        <Title>Stack</Title>
        <p class="opacity-60">List of my possible technology stacks.</p>
        <div class="w-full h-[1px] rounded-full bg-neutral-200 dark:bg-neutral-800 mt-[3rem]"/>
    </div>
    <div class="px-[10%]">
        <Selector/>
        <div class="inline-flex items-center flex-wrap gap-3 mt-2.5 w-full border-2 rounded-[10px] border-neutral-100 dark:border-neutral-900 p-3">
            {#if $value === ""}
                {#each stacks as stack}
                    <Badge class="p-1.5 px-3.5 rounded-[8px] text-[15px] cursor-pointer" variant="outline">{stack.name}</Badge>
                {/each}
            {:else}
                {#each stacks as stack}
                    {#if stack.type === $value}
                        <Badge class="p-1.5 px-3.5 rounded-[8px] text-[15px] cursor-pointer" variant="outline">{stack.name}</Badge>
                    {/if}
                {/each}
            {/if}
        </div>
    </div>
</div>
