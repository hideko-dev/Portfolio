<script lang="ts">
    import AnimatedTitle from "$lib/components/animated-title.svelte";
    import { Badge } from "$lib/components/ui/badge";
    import { blogs } from "$lib/data-content";
    import Icon from "@iconify/svelte";
    import DelayContent from "$lib/components/delay-content.svelte";
</script>

<div class="flex justify-center w-full h-screen font-writer-regular mb-[5rem] sm:mb-0">
    <div class="w-full md:w-max">
        <div class="text-center mt-[7rem] md:mt-[12rem] flex flex-col items-center leading-[2.1rem]">
            <DelayContent delay={0}>
                <AnimatedTitle class="text-[30px] font-googlesans-medium">Bits</AnimatedTitle>
            </DelayContent>
            <DelayContent delay={80}>
                <p class="text-primary text-opacity-40 text-[12px] md:text-[13px]">My mini services.</p>
            </DelayContent>
            <DelayContent delay={160}>
                <div class="cursor-pointer mt-1 group flex items-center gap-1.5 w-max border-[1px] text-primary text-opacity-80 bg-primary bg-opacity-[8%] border-border transition-all duration-200 hover:bg-blue-500 hover:bg-opacity-25 hover:border-blue-500 px-3 h-8 rounded-[3px] text-[14px]">
                    <p class="mt-[4px]" on:click={() => {}}>Random Bit</p>
                    <Icon icon="lucide:move-right" class="transition-all ml-0 group-hover:ml-1"/>
                </div>
            </DelayContent>
        </div>
        <div class="grid grid-cols-1 w-full px-4 md:px-0 md:grid-cols-2 md:w-[45rem] lg:grid-cols-3 lg:w-[55rem] xl:grid-cols-4 gap-4 mt-6 xl:w-[70rem]" style="grid-template-rows: repeat(auto-fill, auto)">

            <DelayContent delay={200} href="./bits/chat" class="border-[1px] border-border rounded-[5px] py-3 px-3 leading-[16px] cursor-pointer transition-all duration-150 hover:border-blue-500 hover:bg-blue-500 hover:bg-opacity-20 group">
                <div class="flex items-center gap-[3px]">
                    <Icon icon="lets-icons:chat-alt" class="text-[16px] mb-[3px] text-blue-400"/>
                    <p class="text-[15px] whitespace-nowrap overflow-hidden text-ellipsis pr-8">Chat</p>
                </div>
                <p class="text-[11px] text-primary text-opacity-40 whitespace-nowrap overflow-hidden text-ellipsis">Ae</p>
                <div class="flex items-center gap-1 mt-[1px]">
                    <Badge class="px-1.5 rounded-[3px] py-0 text-[10px]">Socket.io</Badge>
                </div>
            </DelayContent>
            <DelayContent delay={280} href="./bits/data" class="border-[1px] border-border rounded-[5px] py-3 px-3 leading-[16px] cursor-pointer transition-all duration-150 hover:border-blue-500 hover:bg-blue-500 hover:bg-opacity-20 group">
                <div class="flex items-center gap-[3px]">
                    <Icon icon="bx:data" class="text-[16px] mb-[3px] text-blue-400"/>
                    <p class="text-[15px] whitespace-nowrap overflow-hidden text-ellipsis pr-8">Data</p>
                </div>
                <p class="text-[11px] text-primary text-opacity-40 whitespace-nowrap overflow-hidden text-ellipsis">Ae</p>
                <div class="flex items-center gap-1 mt-[1px]">
                    <Badge class="px-1.5 rounded-[3px] py-0 text-[10px]">Database</Badge>
                </div>
            </DelayContent>
        </div>
    </div>
</div>