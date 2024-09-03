<script lang="ts">
    import { fly } from "svelte/transition"
    import { onMount } from "svelte"

    export let delay = 0
    export let className: string = ""
    export let href: string = ""
    export { className as class }
    let tmp: boolean = false
    onMount(() => tmp = true)
</script>

{#key tmp}
    <a class={className} href={href===''?null:href} in:fly={{ duration: 1200, y: 5, delay }}>
        <slot/>
    </a>
{/key}