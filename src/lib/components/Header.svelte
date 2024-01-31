<script>
    import {toggleMode, userPrefersMode} from "mode-watcher";
    import Contact from "$lib/components/contact/Contact.svelte";
    import Icon from "@iconify/svelte";
    import {Switch} from "$lib/components/ui/switch";

    const hrefs = [
        {href: "https://github.com/Hideko-Dev", icon: "mingcute:github-line"},
        {href: "https://instagram.com/hideko.cat", icon: "mdi:instagram"}
    ]
</script>

<div class="fixed flex justify-end items-center w-full h-[4.5rem]">
    <div class="flex justify-end items-center mr-[2rem] gap-[10px] font-body text-[15px] font-[500]">
        <a href="/works" class="opacity-40 hover:opacity-80 transition-all">Works</a>
        <Contact/>
        <div class="w-[2px] rounded-full h-[15px] bg-neutral-300 dark:bg-neutral-700 mx-[8px]"/>
        {#each hrefs as href}
            <a href={href.href}>
                <Icon icon={href.icon} class="opacity-40 hover:opacity-70 transition-all text-[20px]"/>
            </a>
        {/each}
        <div class="w-[2px] rounded-full h-[15px] bg-neutral-300 dark:bg-neutral-700 mx-[8px]"/>
        <Switch checked={$userPrefersMode === "dark"} on:click={toggleMode}/>
    </div>
</div>