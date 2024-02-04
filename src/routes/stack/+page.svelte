<script lang="ts">
    import Icon from "@iconify/svelte";
    import Vis from "./_components/Vis.svelte";
    import Title from "$lib/components/Title.svelte";
    import Selector from "./_components/Selector.svelte";
    import { value } from "$lib/stacks";
    import { Badge } from "$lib/components/ui/badge"
    import {onMount} from "svelte";
    import {cms} from "$lib/cms.js";
    import Delay from "../_components/Delay.svelte";

    let stacks: Array<any> = []

    onMount(async() => {
        const res = await cms.get({ endpoint: "stack" });
        stacks = res.contents;
    })
</script>

<svelte:head>
    <title>Stack - Hideko</title>
</svelte:head>

<div class="min-h-[100vh]">
    <a href="/" class="h-[4.5rem] w-max flex items-center text-[30px] ml-[20px] opacity-60 transition-all hover:opacity-100 cursor-pointer"><Icon icon="mingcute:left-line"/></a>
    <div class="w-full mt-[5rem] px-[10%]">
        <Title>Stack</Title>
        <p class="opacity-60">List of my possible technology stacks.</p>
        <div class="w-full h-[1px] rounded-full bg-neutral-200 dark:bg-neutral-800 mt-[3rem]"/>
    </div>
    <div class="px-[10%]">
        <Selector/>
        {#key stacks}
            <div class="inline-flex items-center flex-wrap gap-3 mt-2.5 w-full border-2 rounded-[10px] border-neutral-100 dark:border-neutral-900 p-3">
                    {#if $value === ""}
                        {#each stacks as stack, index}
                            <Delay delay={index*100}>
                                <Badge class="p-1.5 px-3.5 rounded-[8px] text-[15px] cursor-pointer" variant="outline">{stack.name}</Badge>
                            </Delay>
                        {/each}
                    {:else}
                        {#each stacks as stack, index}
                            {#if stack.type[0] === $value}
                                <Delay delay={index*100}>
                                    <Badge class="p-1.5 px-3.5 rounded-[8px] text-[15px] cursor-pointer" variant="outline">{stack.name}</Badge>
                                </Delay>
                            {/if}
                        {/each}
                    {/if}
            </div>
        {/key}
    </div>
</div>
