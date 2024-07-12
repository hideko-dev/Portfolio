<script lang="ts">
    import { Button } from "$lib/components/ui/button"
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu"
    import Icon from "@iconify/svelte"
    import {toggleMode, userPrefersMode} from "mode-watcher"
    import {Switch} from "$lib/components/ui/switch"
    import Contact from "$lib/components/contact/Contact.svelte"

    const items = [
        {title: "Home", icon: "mynaui:home", shortcut: "⇧⌘H", href: "/"},
        {title: "Works", icon: "fluent:calendar-work-week-16-regular", shortcut: "⇧⌘W", href: "/works"},
        {title: "Blog", icon: "mage:note", shortcut: "⇧⌘B", href: "/blog",},
        {title: "Stack", icon: "ph:stack", shortcut: "⇧⌘S", href: "/stack"},
        {title: "Contact", icon: "fluent:mail-32-regular", shortcut: "⇧⌘C", href: "/contact"},
        {title: "BlackLabs", icon: "ph:fire-simple", shortcut: "⇧⌘L", href: "/blacklabs"}
    ]
</script>

<DropdownMenu.Root>
    <DropdownMenu.Trigger asChild let:builder>
        <Button builders={[builder]} variant="outline" class="w-10">
            <div class="text-[18px]">
                <Icon icon="fluent:navigation-20-filled"/>
            </div>
        </Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content class="w-56 font-body font-[500]">
        <DropdownMenu.Label>Hideko</DropdownMenu.Label>
        <DropdownMenu.Separator />
        <DropdownMenu.Group>
            {#each items as item}
                <DropdownMenu.Item class="gap-1 flex items-center" href={item.href}>
                    <div class="text-[17px] flex items-center justify-center">
                        <Icon icon={item.icon}/>
                    </div>
                    {item.title}
                    <DropdownMenu.Shortcut>{item.shortcut}</DropdownMenu.Shortcut>
                </DropdownMenu.Item>
            {/each}
        </DropdownMenu.Group>
        <DropdownMenu.Separator />
        <DropdownMenu.Group class="flex items-center justify-center text-[14px]">
            <div class="flex items-center w-full p-1 px-2">
                <div class="text-[17px] flex items-center justify-center gap-1">
                    <Icon icon="dashicons:admin-appearance"/>
                    <p class="text-[14px]">Appearance</p>
                </div>
                <Switch checked={$userPrefersMode === "dark"} on:click={toggleMode} class="scale-[0.9] ml-auto"/>
            </div>
        </DropdownMenu.Group>
    </DropdownMenu.Content>
</DropdownMenu.Root>