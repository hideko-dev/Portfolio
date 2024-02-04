<script>
    import { toggleMode, userPrefersMode } from "mode-watcher";
    import Contact from "$lib/components/contact/Contact.svelte";
    import Icon from "@iconify/svelte";
    import { Switch } from "$lib/components/ui/switch";
    import NavigationMenu from "./NavigationMenu.svelte";

    const hrefs = [
        {href: "https://github.com/Hideko-Dev", icon: "mingcute:github-line"},
        {href: "https://instagram.com/hideko.cat", icon: "mdi:instagram"},
    ]
</script>

<div class="fixed flex justify-end items-center w-full h-[4.5rem]">
    <div class="flex justify-end items-center mr-[2rem] gap-[15px] sm:gap-[10px] font-body text-[15px] font-[500]">
        <div class="hidden sm:flex items-center gap-[10px]">
            <a href="/works" class="opacity-40 hover:opacity-80 transition-all">Works</a>
            <a href="/stack" class="opacity-40 hover:opacity-80 transition-all">Stack</a>
            <a href="/contact" class="opacity-40 hover:opacity-80 transition-all">Contact</a>
            <div class="w-[2px] rounded-full h-[15px] bg-neutral-300 dark:bg-neutral-700 mx-[5px]"/>
        </div>
        {#each hrefs as href}
            <a href={href.href}>
                <Icon icon={href.icon} class="opacity-40 hover:opacity-70 transition-all text-[20px]"/>
            </a>
        {/each}
        <div class="w-[2px] rounded-full h-[15px] bg-neutral-300 dark:bg-neutral-700 mx-[5px]"/>
        <Switch checked={$userPrefersMode === "dark"} on:click={toggleMode} class="hidden sm:flex"/>
        <div class="flex sm:hidden">
            <NavigationMenu/>
        </div>
    </div>
</div>