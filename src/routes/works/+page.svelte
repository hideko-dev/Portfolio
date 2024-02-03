<script lang="ts">
    import Icon from "@iconify/svelte"
    import { cms } from "$lib/cms";
    import { fade } from "svelte/transition";
    import {onDestroy, onMount} from "svelte";
    import Title from "$lib/components/Title.svelte";
    import Delay from "../_components/Delay.svelte";
    import WorksDelay from "../_components/WorksDelay.svelte";

    let data: Array<any> = []

    onMount(async() => {
        const res = await cms.get({ endpoint: "works" });
        data = res.contents;
    })
    function getDate(response: Date) {
        const date = new Date(response)
        const months = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        return `${months[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()} `
    }
</script>

<div class="min-h-[100vh]">
    <a href="/" class="h-[4.5rem] w-max flex items-center text-[30px] ml-[20px] opacity-60 transition-all hover:opacity-100 cursor-pointer"><Icon icon="mingcute:left-line"/></a>
    <div class="w-full mt-[5rem] px-[10%]">
        <Title>Works</Title>
        <p class="opacity-60">The projects I have created and the results of my contributions</p>
        <div class="w-full h-[1px] rounded-full bg-neutral-200 dark:bg-neutral-800 mt-[3rem]"/>
    </div>
    {#key data}
        <div in:fade={{ duration: 200 }} out:fade={{ duration: 200 }} class="w-full">
            {#if data.length === 0}
                <p class="absolute font-body font-[600] w-full flex justify-center items-center h-[65vh]">Loading...</p>
            {:else}
                <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 px-[10%] gap-4 mt-[2rem]">
                    {#each data as c, index}
                        <WorksDelay delay={index * 100}>
                            <a href={c.website}>
                                <div>
                                    <p class="text-neutral-200 dark:text-neutral-600">{getDate(c.publishedAt)}</p>
                                    <p class="font-cal text-[25px] text-neutral-600 dark:text-neutral-200">{c.title}</p>
                                    <p class="text-[14px] opacity-50">{c.bio}</p>
                                </div>
                            </a>
                        </WorksDelay>
                    {/each}
                </div>
            {/if}
        </div>
    {/key}
</div>