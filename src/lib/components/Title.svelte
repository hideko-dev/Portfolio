<script lang="ts">
    import { onMount, onDestroy } from "svelte"
    import { writable } from 'svelte/store'
    import Vis from "../../routes/stack/_components/Vis.svelte"
    import { fly } from "svelte/transition";

    const gradientWStore = writable(0);

    onMount(() => {
        setTimeout(() => {
            gradientWStore.set(100);
        }, 400)
    });

    onDestroy(() => {
        gradientWStore.set(0);
    });
</script>

<div class="hidden"><Vis title="Vis"/></div>
<p class="font-cal text-[40px] tracking-[1px] title" style="background-position-x: {$gradientWStore}%"><slot/></p>

<style>
    .title {
        background: linear-gradient(to right, transparent 20%, mediumpurple, cyan, lightgreen, orange, palevioletred, var(--prime) 80%);
        background-size: 500%;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        transition: all 1s;
        width: max-content;
    }
</style>