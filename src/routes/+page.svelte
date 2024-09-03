<script lang="ts">
    import Icon from "@iconify/svelte"
    import HovercardAny from "$lib/components/hovercard-any.svelte";
    import AnimatedTitle from "$lib/components/animated-title.svelte"
    import DelayContent from "$lib/components/delay-content.svelte";
    import { onDestroy } from "svelte";
</script>

<div class="font-writer-regular tracking-tight flex items-center justify-center h-screen relative">
    <a href="/labs" class="fixed top-14 left-0 w-full flex items-center justify-center h-8 bg-gradient-to-r from-transparent via-[rgba(62,165,255,0.2)] to-transparent transition-all duration-200 hover:bg-[rgba(62,165,255,0.1)] border-[1px] border-dashed border-blue-400 border-opacity-15 cursor-pointer">
        <div class="flex items-center gap-1 text-blue-400">
            <Icon icon="mingcute:ai-line" class="text-[17px] mb-[1px]"/>
            <p class="text-[13px] mt-[2px]">KustomLabs is here. Learn more →</p>
        </div>
    </a>
    <div>
        <div class="w-full px-[8%] md:w-[35rem]">
            <AnimatedTitle class="font-googlesans-medium">Hideko</AnimatedTitle>
            <div class="w-full flex items-center justify-center h-8 rounded-[2px] bg-gradient-to-r from-transparent via-[rgba(62,165,255,0.2)] to-transparent border-[1px] border-dashed border-blue-400 border-opacity-15">
                <div class="flex items-center gap-1.5 text-blue-400">
                    <Icon icon="mingcute:ai-line" class="text-[16px] sm:text-[17px]"/>
                    <p class="text-[11.5px] sm:text-[13px] mt-[5px] sm:mt-[3px]">I am Hideko, a fanatical open sourceror.</p>
                </div>
            </div>
            <div class="mt-3.5 text-[13px]">
                <DelayContent delay={0}>
                    <div class="flex items-center gap-2">
                        <p class="text-primary text-opacity-70 dark:text-opacity-45">Working at</p>
                        <HovercardAny description="This is my team." href="/lab">BlackLabs</HovercardAny>
                    </div>
                </DelayContent>
                <DelayContent delay={50}>
                    <div class="flex items-center">
                        <p class="text-primary text-opacity-70 dark:text-opacity-45 mr-1.5">Creator of</p>
                        <HovercardAny description="Simple and customized note app." href="https://k.hideko.rest">Kustom</HovercardAny>
                        <p class="mr-1.5 text-primary text-opacity-45">,</p>
                        <HovercardAny description="NMS Kotlin utility library." href="https://github.com/hideko-dev/Zero">Zero</HovercardAny>
                        <p class="mr-1.5 text-primary text-opacity-45">,</p>
                        <HovercardAny description="Discord User Rest API." href="https://github.com/hideko-dev/Thundis">Thundis</HovercardAny>
                        <p class="mr-1.5 text-primary text-opacity-45">,</p>
                        <HovercardAny description="AmongUs Mod Manager." href="https://github.com/hideko-dev/Mod-Us">ModUs</HovercardAny>
                    </div>
                </DelayContent>
                <DelayContent delay={100}>
                    <div class="flex items-center gap-2">
                        <p class="text-primary text-opacity-70 dark:text-opacity-45">Working before at</p>
                        <HovercardAny description="Minecraft-centered teams." href="https://group.nekozouneko.com">Nekozouneko Group</HovercardAny>
                    </div>
                </DelayContent>
            </div>
            <div class="mt-3.5 text-[13px] text-primary text-opacity-70 dark:text-opacity-30 flex flex-col">
                <DelayContent delay={150}>
                    <p>Hello, I am a full stack engineer.</p>
                </DelayContent>
                <DelayContent delay={200}>
                    <p>I am mainly good at front-end development, But of course I am also good at backend and have touched various stacks.</p>
                </DelayContent>
                <DelayContent delay={200}>
                    <p>I have been exposed to various technologies, various designs, and have worked with people from many countries.</p>
                </DelayContent>
            </div>
        </div>
    </div>
</div>