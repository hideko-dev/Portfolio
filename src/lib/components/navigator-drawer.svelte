<script lang="ts">
    import * as Drawer from "$lib/components/ui/drawer";
    import NavigatorDrawerLine from "./navigator-drawer-line.svelte";
    import NavigatorDrawerHref from "./navigator-drawer-href.svelte";
    import { toggleMode } from "mode-watcher";
    import { navigatorDrawerStore } from "$lib/stores/navigator-drawer.store";
    import { emailDrawerStore } from "$lib/stores/email-drawer.store";
</script>

<Drawer.Root bind:open={$navigatorDrawerStore} shouldScaleBackground>
    <Drawer.Content class="font-writer-regular">
        <div class="px-6 pt-2">
            <NavigatorDrawerHref icon="lucide:home" href="/">Go to the home page</NavigatorDrawerHref>
            <NavigatorDrawerLine>Posts</NavigatorDrawerLine>
            <NavigatorDrawerHref icon="icon-park-outline:dolphin" href="/blogs">Blogs</NavigatorDrawerHref>
            <NavigatorDrawerHref icon="lucide-lab:elephant-face" href="/extensions">Extensions</NavigatorDrawerHref>
            <NavigatorDrawerLine>Links</NavigatorDrawerLine>
            <NavigatorDrawerHref icon="mingcute:at-line" on:click={() => emailDrawerStore.set(true)}>Email</NavigatorDrawerHref>
            <NavigatorDrawerHref icon="mingcute:github-line" href="https://github.com/hideko-dev">Github</NavigatorDrawerHref>
            <NavigatorDrawerHref icon="ic:baseline-discord" href="https://discord.com/users/1103253246807650344">Discord</NavigatorDrawerHref>
            <NavigatorDrawerLine>Labs</NavigatorDrawerLine>
            <NavigatorDrawerHref icon="mdi:about-circle-outline">About</NavigatorDrawerHref>
            <NavigatorDrawerHref icon="ic:outline-people-alt">Team</NavigatorDrawerHref>
            <NavigatorDrawerHref icon="ic:twotone-work-outline">Jobs</NavigatorDrawerHref>
        </div>
        <Drawer.Footer class="px-6 text-[13px] mb-2">
            <div class="bg-blue-100 dark:bg-blue-400 dark:bg-opacity-15 hover:bg-blue-200 hover:dark:bg-opacity-20 transition-all duration-200 py-1 rounded-[5px] text-center cursor-pointer" on:click={() => toggleMode()}>Switch Theme</div>
            <Drawer.Close class="bg-blue-50 dark:bg-blue-300 dark:bg-opacity-10 hover:bg-blue-100 hover:dark:bg-opacity-15 transition-all duration-200 py-1 rounded-[5px]">Cancel</Drawer.Close>
        </Drawer.Footer>
    </Drawer.Content>
</Drawer.Root>