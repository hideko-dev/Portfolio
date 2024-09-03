<script lang="ts">
    import { onDestroy, onMount } from "svelte"

    let className: string = ""
    export { className as class }

    let gradient = 0
    onMount(() => {
        setTimeout(() => {
            gradient = 100
        }, 200)
    })
    onDestroy(() => gradient = 0)
</script>

<p class="text-[25px] {className} title" style="background-position-x: {gradient}%"><slot/></p>

<style>
    .title {
        background: linear-gradient(to right, deepskyblue, cornflowerblue, rgb(59, 130, 246), var(--primary-16) 80%);
        background-size: 800%;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        transition: all 1s;
    }
</style>
