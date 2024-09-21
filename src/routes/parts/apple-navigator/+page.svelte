<script lang="ts">
    import { mode } from "mode-watcher";

    let height = 12
    function onHover(type: string) {
        height = 12
    }
    function onUnhover() {
        height = 0
    }
</script>

<div class="h-screen w-full flex items-center justify-center pt-[11rem]">

    <div class="h-screen w-full relative">
        <div class="flex items-center font-inter-variable font-[200] text-[13px] gap-5 w-full pl-[6rem] z-20">
            <img src="https://cdn-icons-png.flaticon.com/512/0/747.png" alt="" class="{$mode === 'dark' ? 'invert' : 'invert-0'} w-4 mb-[5px] mr-1">
            <p class="transition-all opacity-85 hover:opacity-100 cursor-pointer" on:mouseenter={() => onHover("store")} on:mouseleave={onUnhover}>Store</p>
            <p class="transition-all opacity-85 hover:opacity-100 cursor-pointer">iPhone</p>
            <p class="transition-all opacity-85 hover:opacity-100 cursor-pointer">Android</p>
            <p class="transition-all opacity-85 hover:opacity-100 cursor-pointer">Hideko</p>
        </div>
        <div class="overflow-hidden absolute transition-all duration-[0.5s] left-0 top-0 px-[6.5rem] w-full mt-5 pt-4" style="height: {height}rem">
            <div class="transition-all duration-500 {height === 12 ? 'delay-[0.3s]' : 'delay-0'}" style="opacity: {height === 12 ? 100 : 0}">
                <div class="space-y-0.5">
                    <p class="text-[12px] text-primary text-opacity-60 mb-1.5">Shopping</p>
                    <p class="font-inter-variable font-[600] text-[25px]">Store</p>
                    <p class="font-inter-variable font-[600] text-[25px]">iPhone</p>
                    <p class="font-inter-variable font-[600] text-[25px]">Android</p>
                    <p class="font-inter-variable font-[600] text-[25px]">Hideko</p>
                </div>
            </div>
        </div>
    </div>

</div>