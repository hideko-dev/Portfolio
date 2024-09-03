<script lang="ts">
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
    import Icon from "@iconify/svelte"

    let open = false
    export let title: string
</script>

<DropdownMenu.Root bind:open>
    <DropdownMenu.Trigger class="flex items-center gap-0.5 bg-primary transition-all duration-200 px-2.5 py-1 rounded-[5px] cursor-pointer {open?'bg-opacity-5 dark:bg-opacity-10':'bg-opacity-0'} hover:bg-opacity-5 hover:dark:bg-opacity-10">
        <p class="mt-[2px] text-[13px]">{title}</p>
        <Icon icon="iconamoon:arrow-down-2" class="transition-all duration-200" style="rotate: {open ? 180 : 0}deg"/>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content class="font-writer-medium">
        <DropdownMenu.Group>
            <slot/>
        </DropdownMenu.Group>
    </DropdownMenu.Content>
</DropdownMenu.Root>