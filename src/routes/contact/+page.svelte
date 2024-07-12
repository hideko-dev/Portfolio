<script>
    import Title from "$lib/components/Title.svelte"
    import Icon from "@iconify/svelte"
    import Delay from "$lib/components/delay/Delay.svelte"
    import Contact from "$lib/components/contact/Contact.svelte"
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
    <div class="px-[10%] grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-8">

        <Delay delay={100}>
            <div class="shadow-based p-6 rounded-[15px] font-body hover:shadow-based-up transition-all duration-300 cursor-pointer border-neutral-800 dark:border-[1px] dark:hover:bg-neutral-900 w-full flex items-center">
                <div class="flex items-center">
                    <div class="p-2 rounded-[10px] mr-3 text-[20px] shadow-based transition-all duration-300 border-neutral-800 dark:border-[1px] dark:hover:bg-neutral-900">
                        <Icon icon="fluent:mail-32-regular"/>
                    </div>
                    <p class="text-[20px] font-[500]">Email</p>
                </div>
                <div class="ml-auto">
                    <Contact>
                        <div class="shadow-based transition-all duration-300 border-neutral-800 dark:border-[1px] dark:hover:bg-neutral-900 w-max px-6 py-2 rounded-full ml-auto">Click</div>
                    </Contact>
                </div>
            </div>
        </Delay>

        <Delay delay={200}>
            <div class="shadow-based p-6 rounded-[15px] font-body hover:shadow-based-up transition-all duration-300 cursor-pointer border-neutral-800 dark:border-[1px] dark:hover:bg-neutral-900 w-full flex items-center">
                <div class="flex items-center">
                    <div class="p-2 rounded-[10px] mr-3 text-[20px] shadow-based transition-all duration-300 border-neutral-800 dark:border-[1px] dark:hover:bg-neutral-900">
                        <Icon icon="ic:baseline-discord"/>
                    </div>
                    <p class="text-[20px] font-[500]">Discord</p>
                </div>
                <a href="https://discord.com/users/1103253246807650344" class="shadow-based transition-all duration-300 border-neutral-800 dark:border-[1px] dark:hover:bg-neutral-900 w-max px-6 py-2 rounded-full ml-auto">Click</a>
            </div>
        </Delay>

        <Delay delay={300}>
            <div class="shadow-based p-6 rounded-[15px] font-body hover:shadow-based-up transition-all duration-300 cursor-pointer border-neutral-800 dark:border-[1px] dark:hover:bg-neutral-900 w-full flex items-center">
                <div class="flex items-center">
                    <div class="p-2 rounded-[10px] mr-3 text-[20px] shadow-based transition-all duration-300 border-neutral-800 dark:border-[1px] dark:hover:bg-neutral-900">
                        <Icon icon="mingcute:github-line"/>
                    </div>
                    <p class="text-[20px] font-[500]">Github</p>
                </div>
                <a href="https://github.com/hideko-dev" class="shadow-based transition-all duration-300 border-neutral-800 dark:border-[1px] dark:hover:bg-neutral-900 w-max px-6 py-2 rounded-full ml-auto">Click</a>
            </div>
        </Delay>

    </div>
</div>