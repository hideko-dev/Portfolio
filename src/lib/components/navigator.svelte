<script lang="ts">
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
    import DropdownContext from "$lib/components/dropdown-context.svelte";
    import Icon from "@iconify/svelte";
    import { navigatorDrawerStore } from "$lib/stores/navigator-drawer.store";
    import { toggleMode, mode } from "mode-watcher";
    import { pagenationStore } from "$lib/stores/pagenation.store";
    import {emailDrawerStore} from "$lib/stores/email-drawer.store";
</script>

<div class="fixed w-full left-0 top-0 p-3 font-writer-regular z-20 backdrop-blur-[15px]">
    <div class="text-blue-500 border-[1px] w-max ml-auto flex md:hidden items-center gap-0.5 bg-primary transition-all duration-200 py-[0.4rem] px-[0.4rem] text-[17px] rounded-[4px] cursor-pointer bg-opacity-0 hover:bg-opacity-5 hover:dark:bg-opacity-10" on:click={() => navigatorDrawerStore.set(true)}>
        <Icon icon="charm:menu-hamburger"/>
    </div>

    <div class="hidden md:flex items-center gap-0.5 w-full">
        {#if $pagenationStore !== "/"}
            <a href="/" class="absolute flex items-center justify-center ml-[1px] text-[25px] text-primary text-opacity-40">
                <Icon icon="mingcute:left-line"/>
            </a>
        {/if}
        <div class="ml-auto w-max flex items-center gap-0.5 text-primary text-opacity-80">
            <a href="/blogs" class="flex items-center gap-0.5 bg-primary transition-all duration-200 px-2.5 py-1 rounded-[5px] cursor-pointer {$pagenationStore.split('/')[1]==='blogs'?'bg-opacity-5 dark:bg-opacity-10':'bg-opacity-0'} hover:bg-opacity-5 hover:dark:bg-opacity-10">
                <p class="mt-[2px] text-[13px]">Blogs</p>
            </a>
            <a href="/extensions" class="flex items-center gap-0.5 bg-primary transition-all duration-200 px-2.5 py-1 rounded-[5px] cursor-pointer {$pagenationStore==='/extensions'?'bg-opacity-5 dark:bg-opacity-10':'bg-opacity-0'} hover:bg-opacity-5 hover:dark:bg-opacity-10">
                <p class="mt-[2px] text-[13px]">Extensions</p>
            </a>
            <DropdownContext title="Link">
                <DropdownMenu.Item on:click={() => emailDrawerStore.set(true)}>
                    <Icon icon="mingcute:at-line" class="text-[18px] mb-[2px] mr-[5px] text-blue-500"/>
                    <p class="text-[13px] mt-[2px]">Email</p>
                </DropdownMenu.Item>
                <DropdownMenu.Item href="https://github.com/hideko-dev">
                    <Icon icon="mingcute:github-line" class="text-[18px] mb-[2px] mr-[5px] text-blue-500"/>
                    <p class="text-[13px] mt-[2px]">GitHub</p>
                </DropdownMenu.Item>
                <DropdownMenu.Item href="https://discord.com/users/1103253246807650344">
                    <Icon icon="ic:baseline-discord" class="text-[18px] mb-[2px] mr-[5px] text-blue-500"/>
                    <p class="text-[13px] mt-[2px]">Discord</p>
                </DropdownMenu.Item>
            </DropdownContext>
<!--            <DropdownContext title="Bits">-->
<!--                <DropdownMenu.Item href="/bits">-->
<!--                    <Icon icon="mdi:about-circle-outline" class="text-[18px] mb-[2px] mr-[5px] text-blue-500"/>-->
<!--                    <p class="text-[13px] mt-[2px]">Home</p>-->
<!--                </DropdownMenu.Item>-->
<!--                <DropdownMenu.Item>-->
<!--                    <Icon icon="ic:outline-people-alt" class="text-[18px] mb-[2px] mr-[5px] text-blue-500"/>-->
<!--                    <p class="text-[13px] mt-[2px]">Chat</p>-->
<!--                </DropdownMenu.Item>-->
<!--                <DropdownMenu.Item>-->
<!--                    <Icon icon="ic:twotone-work-outline" class="text-[18px] mb-[2px] mr-[5px] text-blue-500"/>-->
<!--                    <p class="text-[13px] mt-[2px]">Upload</p>-->
<!--                </DropdownMenu.Item>-->
<!--            </DropdownContext>-->
            <div class="flex items-center gap-0.5 bg-primary bg-opacity-0 transition-all duration-200 px-2.5 h-[2rem] rounded-[5px] cursor-pointer hover:bg-opacity-5 hover:dark:bg-opacity-10" on:click={() => toggleMode()}>
                {#if $mode === "dark"}
                    <Icon icon="ph:moon-bold"/>
                {:else}
                    <Icon icon="mi:sun"/>
                {/if}
            </div>
        </div>
    </div>
</div>


