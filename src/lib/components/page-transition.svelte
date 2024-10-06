<script>
    import { fly } from 'svelte/transition'
    export let pathname = ''

    const between = 200
</script>


{#key pathname}
    <div in:fly={{ y: 3, duration: between, delay: between }} out:fly={{ y: 3, duration: between }} class="h-max">
        <slot />
    </div>
{/key}