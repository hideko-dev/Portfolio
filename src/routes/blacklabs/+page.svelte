<script>
    import Title from "$lib/components/Title.svelte"
    import Icon from "@iconify/svelte"
    import Delay from "$lib/components/delay/Delay.svelte"
    import { Avatar, Rocket } from "radix-icons-svelte"
    import * as Alert from "$lib/components/ui/alert"
    import BlackLabs from "$lib/assets/blacklabs.webp"
    import * as CnAvatar from "$lib/components/ui/avatar"
    import { Badge } from "$lib/components/ui/badge"
    import WorksDelay from "$lib/components/delay/WorksDelay.svelte"

    const members = [
        {name: "ひでこ", subName: "Hideko", github: "Hideko-Dev", tags: ["Owner"]},
        {name: "けと", subName: "Gbost_", github: "keto", tags: ["Developer"]},
        {name: "ぷらすちっく", subName: "pla.s2", github: "mad889jhj", tags: ["Admin", "Management"]},
        {name: "ぽけか", subName: "Pokeka", github: "MinePoke", tags: ["Admin", "PR"]}
    ]

    const projects = [
        {name: "Kuroneko Network", description: "Japanese Cross-Play Minigame Minecraft Server", url: "/", tags: ["Minecraft", "Minigames"], year: 24, month: "Apr", day: 5}
    ]
</script>

<svelte:head>
    <title>BlackLabs - Hideko</title>
</svelte:head>

<div class="min-h-[100vh]">
    <a href="/" class="h-[4.5rem] w-max flex items-center text-[30px] ml-[20px] opacity-60 transition-all hover:opacity-100 cursor-pointer"><Icon icon="mingcute:left-line"/></a>
    <div class="w-full mt-[5rem] px-[10%]">
        <Title>BlackLabs</Title>
        <p class="opacity-60">The development team I built</p>
        <div class="w-full h-[1px] rounded-full bg-neutral-200 dark:bg-neutral-800 mt-[3rem]"/>
    </div>
    <div class="px-[10%] block xl:flex items-center mt-8 gap-5">

        <div class="w-full xl:w-[40%] h-full xl:h-[30rem]">
            <Delay delay={100}>
                <Alert.Root class="w-full">
                    <Rocket class="h-4 w-4" />
                    <Alert.Title class="font-[500] w-[120px] h-[15px] invert dark:invert-0 relative">
                        <img src={BlackLabs} alt="" class="absolute left-5 bottom-[-5px] w-[90px]">
                    </Alert.Title>
                    <Alert.Description class="text-neutral-500 dark:text-neutral-400">BlackLabs is a team of Japanese creators founded by developer "Hideko". We mainly focus on the development of the Japanese Minecraft server "Kuroneko Network".</Alert.Description>
                </Alert.Root>
            </Delay>
            <Delay delay={200}>
                <Alert.Root class="w-full mt-5 h-max">
                    <Avatar class="h-4 w-4" />
                    <Alert.Title class="font-[500]">Members</Alert.Title>
                    <Alert.Description class="text-neutral-500 dark:text-neutral-400 mt-3 mb-1">
                        {#each members as member, index}
                            <Delay delay={index*100}>
                                <a href="https://github.com/{member.github}">
                                    <div class="bg-primary-foreground p-3 rounded-[10px] mt-2">
                                        <div class="flex items-center gap-2.5">
                                            <CnAvatar.Root>
                                                <CnAvatar.Image src="https://github.com/{member.github}.png" alt="@pla.s2"/>
                                                <CnAvatar.Fallback>...</CnAvatar.Fallback>
                                            </CnAvatar.Root>
                                            <div>
                                                <div class="flex items-center gap-1.5 text-primary">
                                                    <p>{member.name}</p>
                                                    <p>/</p>
                                                    <p>{member.subName}</p>
                                                </div>
                                                <div class="flex items-center gap-1">
                                                    {#each member.tags as tag}
                                                        <Badge class="h-5">{tag}</Badge>
                                                    {/each}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </Delay>
                        {/each}
                    </Alert.Description>
                </Alert.Root>
            </Delay>
        </div>

        <div class="w-full">
            <Delay delay={300}>
                <div class="border-[1px] rounded-[10px] h-[30rem] p-4 mt-5 xl:mt-0">
                    <div class="shadow-based rounded-[15px] font-body hover:shadow-based-up transition-all duration-300 cursor-pointer border-neutral-800 dark:border-[1px] dark:hover:bg-neutral-900">
                        {#each projects as project, index}
                            <WorksDelay delay={index*100}>
                                <a href={project.url}>
                                    <div class="p-6 flex flex-col justify-between h-full">
                                        <div>
                                            <p class="text-neutral-200 dark:text-neutral-600 text-[14px]">{project.month}, {project.day}, {project.year}</p>
                                            <p class="font-cal text-[25px] text-neutral-600 dark:text-neutral-200">{project.name}</p>
                                            <p class="text-[14px] opacity-50">{project.description}</p>
                                        </div>
                                        <div class="flex items-center mt-4 gap-1.5 font-body font-[500]">
                                            {#each project.tags as tag}
                                                <p class="text-[14px] bg-primary text-primary-foreground px-2.5 py-[1px] rounded-full opacity-100 transition-all hover:opacity-80">{tag}</p>
                                            {/each}
                                        </div>
                                    </div>
                                </a>
                            </WorksDelay>
                        {/each}
                    </div>
                </div>
            </Delay>
        </div>

    </div>
</div>