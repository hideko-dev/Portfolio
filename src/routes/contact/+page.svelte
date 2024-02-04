<script>
    import Title from "$lib/components/Title.svelte"
    import Icon from "@iconify/svelte"
</script>

<svelte:head>
    <title>Contact - Hideko</title>
</svelte:head>

<div class="min-h-[100vh]">
    <a href="/" class="h-[4.5rem] w-max flex items-center text-[30px] ml-[20px] opacity-60 transition-all hover:opacity-100 cursor-pointer"><Icon icon="mingcute:left-line"/></a>
    <div class="w-full mt-[5rem] px-[10%]">
        <Title>Contact</Title>
        <p class="opacity-60">This will display a list of contacts to contact me</p>
        <div class="w-full h-[1px] rounded-full bg-neutral-200 dark:bg-neutral-800 mt-[3rem]"/>
    </div>
    <div class="px-[10%]">
        <p>Contender</p>
    </div>
</div>