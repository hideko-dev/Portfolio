<script>
    import { toggleMode, userPrefersMode } from "mode-watcher"
    import Contact from "$lib/components/contact/Contact.svelte"
    import Icon from "@iconify/svelte"
    import { Switch } from "$lib/components/ui/switch"
    import NavigationMenu from "./NavigationMenu.svelte"
    import { location } from "$lib/location"

    const hrefs = [
        {href: "https://github.com/Hideko-Dev", icon: "mingcute:github-line"},
        {href: "https://instagram.com/hideko.cat", icon: "mdi:instagram"},
    ]

    const links = [
        {href: "/works", title: "Works"},
        {href: "/stack", title: "Stack"},
        {href: "/contact", title: "Contact"},
        {href: "/blacklabs", title: "BlackLabs"}
    ]
</script>

<div class="fixed flex justify-end items-center w-full h-[4.5rem]">
    <div class="flex justify-end items-center mr-[2rem] gap-[15px] sm:gap-[10px] font-body text-[15px] font-[500]">
        <div class="hidden sm:flex items-center gap-[10px]">
<!--            <a href="/works" class="opacity-40 hover:opacity-80 transition-all">Works</a>-->
<!--            <a href="/stack" class="opacity-40 hover:opacity-80 transition-all">Stack</a>-->
            {#each links as link}
                <a href={link.href} class="link opacity-40 transition-all" class:active={$location === link.href}>{link.title}</a>
            {/each}
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

<style>
    .link {
        position: relative;
    }
    .link:before {
        position: absolute;
        content: "";
        right: 0;
        bottom: -2px;
        height: 1px;
        width: 0;
        background: var(--prime);
        transition: all 0.3s;
    }
    .link:hover:before,
    .active:before {
        left: 0;
        width: 100%;
    }
</style>