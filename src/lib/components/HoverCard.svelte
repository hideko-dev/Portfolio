<script lang="ts">
    import { Calendar } from "radix-icons-svelte"
    import * as Avatar from "$lib/components/ui/avatar"
    import * as HoverCard from "$lib/components/ui/hover-card"
    export let href = "https://hideko-dev.com"
    export let title = "@hideko-dev"
    export let date = "September 2023"
    export let description = "Hello from Portfolio."
    export let avatar = ""
</script>

<HoverCard.Root>
    <HoverCard.Trigger
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            class="rounded-[20px] focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black text-black dark:text-white"
    ><p class="before:bg-black before:dark:bg-white">{title}</p>
    </HoverCard.Trigger>
    <HoverCard.Content class="w-80">
        <div class="flex justify-between space-x-4">
            {#if avatar}
                <Avatar.Root>
                    <Avatar.Image src={avatar}/>
                    <Avatar.Fallback>..</Avatar.Fallback>
                </Avatar.Root>
            {/if}
            <div class="space-y-1">
                <h4 class="text-sm font-semibold">{title}</h4>
                <p class="text-sm">{description}</p>
                <div class="flex items-center pt-2">
                    <Calendar class="mr-2 h-4 w-4 opacity-70" />{" "}
                    <span class="text-xs text-muted-foreground">
                        {date}
          </span>
                </div>
            </div>
        </div>
    </HoverCard.Content>
</HoverCard.Root>

<style>
    p {
        position: relative;
    }
    p::before {
        position: absolute;
        content: "";
        right: 0;
        bottom: 0;
        width: 0;
        height: 1px;
        transition: all 0.3s;
    }
    p:hover::before {
        width: 100%;
        left: 0;
    }
</style>