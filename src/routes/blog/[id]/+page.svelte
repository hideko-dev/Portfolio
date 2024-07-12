<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from "svelte";
    import { supabase } from "$lib/database/supabase";
    import type { Database } from "$lib/types/supabase.types";
    import type { PostgrestSingleResponse } from "@supabase/supabase-js";
    import { get } from 'svelte/store';
    import Icon from "@iconify/svelte";
    import { marked } from "marked";

    type BlogRow = Database['public']['Tables']['blogs']['Row'];
    let blogData: BlogRow | null = null;

    let id: string = ''
    $: id = get(page).params.id

    onMount(async () => {
        const { data, error }: PostgrestSingleResponse<BlogRow> = await supabase
            .from("blogs")
            .select("*")
            .eq("id", id)
            .single()
        blogData = data as BlogRow
        console.log(blogData)
    });

    const source = `
  # This is a header

This is a paragraph.

* This is a list
* With two items
  1. And a sublist
  2. That is ordered
    * With another
    * Sublist inside
`
</script>

<div class="min-h-screen mb-[10rem] font-body">
    <a href="/" class="h-[4.5rem] w-max flex items-center text-[30px] ml-[20px] opacity-60 transition-all hover:opacity-100 cursor-pointer">
        <Icon icon="mingcute:left-line"/>
    </a>
    <div class="flex justify-center px-8">
        <div class="mt-[4rem] w-[35rem]">
            {#if blogData}
                <div class="block md:flex items-center">
                    <p class="font-[700] text-[30px]">{blogData.title}</p>
                    <div class="flex items-center justify-center gap-3 w-max md:ml-auto">
                        <p class="text-neutral-200 dark:text-neutral-600">{blogData.created_at}</p>
                        <div class="flex items-center justify-center w-max gap-1 text-[16px] md:mr-[3px] text-neutral-200 dark:text-neutral-600 border-[1px] border-primary border-opacity-10 px-2 rounded-full">
                            <Icon icon="mdi:eye-outline"/>
                            <p class="text-[14px]">{blogData.clicks}</p>
                        </div>
                    </div>
                </div>
                <p class="text-neutral-500 dark:text-neutral-400">{blogData.description}</p>
                <div class="flex items-center gap-2 mt-4">
                    {#each (blogData.tags?.split(", ") || []) as tag}
                        <p class="w-max text-[14px] bg-primary text-primary-foreground px-2.5 py-[1px] rounded-full opacity-100 transition-all hover:opacity-80">{tag}</p>
                    {/each}
                </div>
                <div class="mt-5 w-full h-[2px] bg-neutral-200 dark:bg-neutral-800"/>
                <div class="preview">{@html marked(blogData.markdown || "")}</div>
            {/if}
        </div>
    </div>
</div>

<style>
    :global(.preview) {
        padding: 1rem 0.8rem 0.8rem;
    }

    :global(.preview h1) {
        font-size: 30px;
        font-weight: 600;
    }

    :global(.preview h2) {
        font-size: 27px;
        font-weight: 600;
    }

    :global(.preview h3) {
        font-size: 25px;
        font-weight: 600;
    }

    :global(.preview h3) {
        font-size: 23px;
        font-weight: 600;
        margin-left: 2px;
    }

    :global(.preview h4) {
        font-size: 20px;
        font-weight: 600;
        margin-left: 4px;
    }

    :global(.preview p) {
        margin-left: 5px;
    }

    :global(.preview pre) {
        border: 1px solid rgba(var(--prime-code), 0.1);
        padding: 20px 5px 5px;
        padding-inline: 13px;
        border-radius: 10px;
        position: relative;
        margin-block: 10px;
    }

    :global(.preview pre):after {
        position: absolute;
        content: "Code";
        font-size: 14px;
        left: 12px;
        top: 3px;
        opacity: 0.2;
    }
</style>
