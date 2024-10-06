<script lang="ts">
    import AnimatedTitle from "$lib/components/animated-title.svelte";
    import Icon from "@iconify/svelte";
    import DelayContent from "$lib/components/delay-content.svelte";
    import { page } from "$app/stores";
    import type { User } from "@auth/sveltekit";
    import { signIn, signOut } from "@auth/sveltekit/client";

    const session = $page.data.session
    let user: User | undefined = undefined;
    if(session) if(session.user) {
        user = session.user
    }

    let chatMessage = ""

    function sendMessage(e: KeyboardEvent) {
        if(e.key === "Enter") {
            chatMessage = ""
        }
    }

</script>

<div class="flex justify-center w-full h-screen font-writer-regular mb-[5rem] sm:mb-0">
    <div class="w-full md:w-max h-full flex flex-col">
        <div class="text-center mt-[7rem] md:mt-[12rem] flex flex-col items-center leading-[2.1rem]">
            <DelayContent delay={0} class="flex items-center gap-2">
                <AnimatedTitle class="text-[30px] font-googlesans-medium">Bits</AnimatedTitle>
                <p class="border-[1px] border-border px-2.5 rounded-[10px] font-[400] bg-primary bg-opacity-[8%] text-primary text-opacity-50 text-[20px] font-googlesans-medium">Chat</p>
            </DelayContent>
            <DelayContent delay={80}>
                <p class="text-primary text-opacity-40 text-[12px] md:text-[13px]">Able to have a simple chat.</p>
            </DelayContent>
        </div>

        <div class="mt-5 w-full px-4 md:px-0 md:w-[45rem] lg:w-[55rem] xl:w-[70rem] border-[1px] border-border border-opacity-80 bg-primary bg-opacity-5 rounded-[10px] flex-grow mb-10 relative">
            {#if user}

                <div class="flex items-center gap-[4px] bg-primary bg-opacity-5 px-1.5 rounded-full w-max text-[13px] pr-1.5 ml-auto m-1.5 text-primary text-opacity-40 cursor-pointer" on:click={() => signOut()}>
                    <img src={user.image} alt="" class="w-3.5 rounded-full">
                    <p class="mt-[1px]">{user.name}</p>
                </div>

                <div class="flex items-center absolute bottom-0 left-0 p-2 pl-2.5 w-full h-[2.7rem] gap-1.5">
                    <input type="text" bind:value={chatMessage} class="outline-none border-[1px] border-border rounded-[8px] px-2 w-full h-full" placeholder="Message" on:keydown={sendMessage}>
                    <div class="bg-blue-500 bg-opacity-10 border-[1px] border-blue-400 border-opacity-50 px-2 rounded-[6px] text-blue-400 text-[14px] h-full flex items-center justify-center pt-0.5 gap-0.5">
                        <p>Send</p>
                        <Icon icon="flowbite:caret-right-solid" class="mb-[1px]"/>
                    </div>
                </div>
            {:else}
                <div class="flex items-center justify-center h-full">
                    <div>
                        <p class="text-[13px] text-primary text-opacity-70">Looks like you need to be logged in to try this feature...</p>
                        <div on:click={() => signIn("github")} class="flex items-center gap-1.5 bg-primary bg-opacity-5 rounded-[10px] px-2 pr-2.5 py-1 text-primary text-opacity-60 hover:text-opacity-100 transition-all duration-200 cursor-pointer w-max m-auto mt-1">
                            <Icon icon="mdi:github" class="text-[18px]"/>
                            <p class="mt-[2px]">Login with Github</p>
                        </div>
                    </div>
                </div>
            {/if}

        </div>

    </div>
</div>
