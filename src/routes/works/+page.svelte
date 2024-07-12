<script lang="ts">
    import Icon from "@iconify/svelte";
    import { fade } from "svelte/transition";
    import { onMount } from "svelte";
    import Title from "$lib/components/Title.svelte";
    import CardDelay from "$lib/components/delay/CardDelay.svelte";
    import { supabase } from "$lib/database/supabase";
    import type { Database } from "$lib/types/supabase.types";
    import type { PostgrestResponse } from "@supabase/supabase-js";

    type WorkRow = Database['public']['Tables']['works']['Row'];
    let worksData: WorkRow[] = [];

    onMount(async () => {
        const { data, error }: PostgrestResponse<WorkRow> = await supabase.from("works").select("*")
        worksData = data ?? []
    });

    const incrementClicks = async (id: string) => {
        const { data, error }: PostgrestResponse<WorkRow> = await supabase.from("works").select("*").eq("id", id)
        if(data != null) {
            const currentClicks = data[0].clicks
            if(currentClicks != null) {
                await supabase.from("works").update({ clicks: currentClicks+1 }).eq("id", id)
            }
        }
    }
</script>

<svelte:head>
    <title>Works - Hideko</title>
</svelte:head>

<div class="min-h-[100vh] mb-[10rem]">
    <a href="/" class="h-[4.5rem] w-max flex items-center text-[30px] ml-[20px] opacity-60 transition-all hover:opacity-100 cursor-pointer">
        <Icon icon="mingcute:left-line"/>
    </a>
    <div class="w-full mt-[5rem] px-[10%]">
        <Title>Works</Title>
        <p class="opacity-60">The projects I have created and the results of my contributions</p>
        <div class="w-full h-[1px] rounded-full bg-neutral-200 dark:bg-neutral-800 mt-[3rem]"/>
    </div>
    {#key worksData}
        <div in:fade={{ duration: 200 }} out:fade={{ duration: 200 }} class="w-full">
            {#if worksData.length === 0}
                <div class="absolute w-full flex justify-center items-center h-[65vh] text-[50px]">
                    <Icon icon="eos-icons:loading"/>
                </div>
            {:else}
                <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 px-[10%] gap-4 mt-[2rem]" style="grid-template-rows: repeat(auto-fill, auto)">
                    {#each worksData as c, index}
                        <CardDelay delay={index * 100}>
                            <a href={c.url}>
                                <div class="p-6 flex flex-col justify-between h-full" on:click={() => {incrementClicks(c.id)}}>
                                    <div>
                                        <div class="flex items-center">
                                            <p class="text-neutral-200 dark:text-neutral-600 text-[14px]">{c.created_at}</p>
                                            <div class="ml-auto flex items-center justify-center gap-1 text-[16px] mr-[3px] text-neutral-200 dark:text-neutral-600 border-[1px] border-primary border-opacity-10 px-2 rounded-full">
                                                <Icon icon="mdi:eye-outline"/>
                                                <p class="text-[14px]">{c.clicks}</p>
                                            </div>
                                        </div>
                                        <p class="font-cal text-[25px] text-neutral-600 dark:text-neutral-200">{c.title}</p>
                                        <p class="text-[14px] opacity-50">{c.description}</p>
                                    </div>
                                    <div class="flex items-center mt-4 gap-1.5 font-body font-[500]">
                                        {#each (c.tags?.split(", ") || []) as tag}
                                            <p class="text-[14px] bg-primary text-primary-foreground px-2.5 py-[1px] rounded-full opacity-100 transition-all hover:opacity-80">{tag}</p>
                                        {/each}
                                    </div>
                                </div>
                            </a>
                        </CardDelay>
                    {/each}
                </div>
            {/if}
        </div>
    {/key}
</div>
