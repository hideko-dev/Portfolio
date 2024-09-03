<script lang="ts">
    import * as HoverCard from "$lib/components/ui/hover-card";
    export let description: string = "";
    export let href: string = "";
</script>

<HoverCard.Root openDelay={0} closeDelay={0}>
    <HoverCard.Trigger href={href} class="relative after:absolute after:bottom-[2px] after:transition-all after:duration-200 after:right-0 hover:after:left-0 after:w-[0%] hover:after:w-[100%] after:h-[1px] after:bg-primary after:bg-opacity-70">
        <slot/>
    </HoverCard.Trigger>
    <HoverCard.Content class="bg-transparent backdrop-blur-2xl rounded-[4px] p-3 pb-2.5 px-3.5 font-writer-regular">
        <div class="text-[13px] leading-[16px]">
            <slot/>
            <p class="text-primary text-opacity-40 text-[11px]">{description}</p>
        </div>
    </HoverCard.Content>
</HoverCard.Root>