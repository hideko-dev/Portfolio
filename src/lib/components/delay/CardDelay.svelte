<script lang="ts">
    import { fade, fly } from "svelte/transition"
    import {onMount} from "svelte"
    let tmp: boolean = false
    onMount(() => {
        tmp = true
    })
    export let delay = 0
</script>

{#key tmp}
    <div in:fly={{ duration: 1000, y: 10, delay }} class="shadow-based rounded-[15px] font-body hover:shadow-based-up transition-all duration-300 cursor-pointer border-neutral-800 dark:border-[1px] dark:hover:bg-neutral-900">
        <slot/>
    </div>
{/key}