<script lang="ts">
    import { fade, fly } from "svelte/transition";
    import {onMount} from "svelte";
    let tmp: boolean = false
    onMount(() => {
        tmp = true
    })
    export let delay = 0
</script>

{#key tmp}
    <div in:fly={{ duration: 1000, y: 10, delay }}>
        <slot/>
    </div>
{/key}