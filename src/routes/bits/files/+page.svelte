<script lang="ts">
    import AnimatedTitle from "$lib/components/animated-title.svelte";
    import Icon from "@iconify/svelte";
    import DelayContent from "$lib/components/delay-content.svelte";
</script>

<div class="flex justify-center w-full h-screen font-writer-regular mb-[5rem] sm:mb-0">
    <div class="w-full md:w-max h-full flex flex-col">
        <div class="text-center mt-[7rem] md:mt-[12rem] flex flex-col items-center leading-[2.1rem]">
            <DelayContent delay={0} class="flex items-center gap-2">
                <AnimatedTitle class="text-[30px] font-googlesans-medium">Bits</AnimatedTitle>
                <p class="border-[1px] border-border px-2.5 rounded-[10px] font-[400] bg-primary bg-opacity-[8%] text-primary text-opacity-50 text-[20px] font-googlesans-medium">Files</p>
            </DelayContent>
            <DelayContent delay={80}>
                <p class="text-primary text-opacity-40 text-[12px] md:text-[13px]">A file upload system that makes it simple.</p>
            </DelayContent>
        </div>

        <div class="mt-5 w-full px-4 md:px-0 md:w-[45rem] lg:w-[55rem] xl:w-[70rem] border-[1px] border-border border-opacity-80 bg-primary bg-opacity-5 rounded-[10px] flex-grow mb-10 relative">
            <p>aa</p>
        </div>

    </div>
</div>
