<script lang="ts">
	import { Button } from "$lib/components/ui/button"
	import * as Drawer from "$lib/components/ui/drawer";
    import {toggleMode, userPrefersMode} from "mode-watcher";
    import { Switch } from "$lib/components/ui/switch";
    import Contact from "$lib/components/contact/Contact.svelte";
    import Icon from "@iconify/svelte"
    import Nkznk from "$lib/assets/nekozouneko.gif"
    import HoverCard from "./_components/HoverCard.svelte";
    import {Rocket} from "radix-icons-svelte";
    import * as Alert from "$lib/components/ui/alert";
</script>

<div class="flex justify-center items-center min-h-[100vh]">
    <div class="w-[80%] lg:w-[50rem]">
        <p class="font-cal text-[40px] tracking-[1px]">Hideko</p>
        <div class="font-body font-[400] explain text-neutral-500 dark:text-neutral-400">
            <Alert.Root>
                <Rocket class="h-4 w-4" />
                <Alert.Title class="font-[500]">Hello everyone!</Alert.Title>
                <Alert.Description class="text-neutral-500 dark:text-neutral-400"
                >I am Hideko, a fanatical open sourceror.</Alert.Description
                >
            </Alert.Root>
            <br>
            <div><p>Creater of </p><HoverCard href="https://thundis.hideko-dev.com" title="Thundis" description="Early Rest API to get information about Discord users." date="November 2023"/></div>
            <div><p>Working at</p><HoverCard title="Team Nekozouneko Dev" description="Nekozouneko Server Development Team" date=" Joined December 2023" avatar={Nkznk}/></div>
            <br>
            <div><p>Dreaming up ideas and making them come true is where my passion lies. You can find my full projects list here. I also do some generative-art, compform, interactivity experiments on 100.antfu.me.</p></div>
            <div><p>Outside of programming, I enjoy doing photography and traveling. Some of my photos can be found on Instagram. If you happen to be in the same city I live (currently in Paris), maybe we can hang out and take some photos or code together.</p></div>
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

<!--<style>-->

<!--    .explain div {-->
<!--        display: flex;-->
<!--        align-items: center;-->
<!--    }-->

<!--    .explain div p {-->
<!--        opacity: 0.5;-->
<!--        transition: opacity 0.3s;-->
<!--        cursor: pointer;-->
<!--    }-->

<!--    .explain div:hover p {-->
<!--        opacity: 1;-->
<!--    }-->
<!--</style>-->