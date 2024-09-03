<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import Icon from "@iconify/svelte";
    import { goto } from "$app/navigation";
    const dispatcher = createEventDispatcher();
    function click() {
        dispatcher("click", {})
    }
    export let icon: string
    export let href: string = ""
</script>

<div on:click={click} class="flex items-center gap-0.5 bg-primary bg-opacity-0 transition-all duration-200 hover:bg-opacity-[8%] rounded-[5px] hover:dark:bg-opacity-10 px-2 py-1 cursor-pointer group" on:click={() => goto(href)}>
    <Icon icon={icon} class="text-[18px] mr-[5px] text-blue-500"/>
    <p class="text-[13px] mt-[2px]"><slot/></p>
    <Icon icon="mingcute:right-fill" class="ml-auto text-blue-400 transition-all duration-200 text-opacity-60 group-hover:text-opacity-100"/>
</div>