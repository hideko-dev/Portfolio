<script lang="ts">
    import Nkznk from "$lib/assets/nekozouneko.gif"
    import HoverCard from "$lib/components/HoverCard.svelte";
    import { Rocket } from "radix-icons-svelte";
    import * as Alert from "$lib/components/ui/alert";
    import Delay from "$lib/components/delay/Delay.svelte";
    import Title from "$lib/components/Title.svelte";
    import Vis from "./stack/_components/Vis.svelte";
</script>

<svelte:head>
    <title>Home - Hideko</title>
</svelte:head>

<div class="flex justify-center items-center min-h-[100vh]">
    <div class="w-[80%] lg:w-[50rem]">
        <Title>Hideko</Title>
        <div class="font-body font-[400] text-[13px] sm:text-[16px] explain text-neutral-500 dark:text-neutral-400">
            <Delay delay={100}>
                <Alert.Root>
                    <Rocket class="h-4 w-4" />
                    <Alert.Title class="font-[500]">Hello everyone!</Alert.Title>
                    <Alert.Description class="text-neutral-500 dark:text-neutral-400">I am Hideko, a fanatical open sourceror.</Alert.Description>
                </Alert.Root>
            </Delay>
            <br>
            <Delay delay={200}>
                <div><p>Creater of </p>
                    <HoverCard href="https://thundis.hideko-dev.com" title="Thundis" description="Early Rest API to get information about Discord users." date="November 2023"/>,
                    <HoverCard href="https://www.npmjs.com/package/svelte-scroller" title="svelte-scroller" description="Scroll detection library available in Svelte." date="Aug 2023"/>,
                    <HoverCard href="https://github.com/hideko-dev/Mod-Us" title="Mod-Us" description="AmongUs Mod Management Tool." date="Dec 2022"/>
                </div>
            </Delay>
            <Delay delay={300}>
                <div><p>Working at</p><HoverCard href="/blacklabs" title="Black Labs" description="My Development Team" date=" Joined February 2024"/></div>
            </Delay>
            <Delay delay={400}>
                <div><p>Worked before at</p><HoverCard href="https://group.nekozouneko.com" title="Team Nekozouneko Dev" description="Nekozouneko Server Development Team" date=" Joined December 2023" avatar={Nkznk}/>,</div>
            </Delay>
            <br>
            <Delay delay={500}>
                <div><p>Hello, I am a full stack engineer. I am a full stack engineer. I am mainly good at front-end development. But of course I am also good at backend and have touched various stacks. I have been exposed to various technologies, various designs, and have worked with people from many countries.</p></div>
            </Delay>
        </div>
    </div>
</div>

<style>
    .explain div {
        display: flex;
        align-items: center;
        gap: 5px;
    }
    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        position: relative;
    }

    a:before {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        width: 0;
        height: 1px;
        background: white;
        transition: all 0.3s;
    }

    a:hover::before {
        width: 100%;
        left: 0;
    }
</style>
