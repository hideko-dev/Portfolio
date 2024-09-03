<script lang="ts">
    import * as Drawer from "$lib/components/ui/drawer";
    import * as Dialog from "$lib/components/ui/dialog";
    import { Label } from "$lib/components/ui/label";
    import { Input } from "$lib/components/ui/input";
    import { Button } from "$lib/components/ui/button";
    import { Textarea } from "$lib/components/ui/textarea";
    import { emailDrawerStore } from "$lib/stores/email-drawer.store";
    import { mediaQuery } from "svelte-legos";
    import { toast } from "svelte-sonner";
    const isDesktop = mediaQuery("(min-width: 768px)");
    let email: string = "",
        body: string = "",
        buttonEnabled: boolean = true

    async function handleSubmit() {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !body) {
            toast.error("Fill out the form incorrectly?", {
                description: "Please complete the form in its entirety.",
                position: $isDesktop ? "bottom-right" : "top-center",
                class: "bg-red-200",
            })
            return;
        }
        if (!re.test(email)) {
            toast.error("Is the Email wrong?", {
                description: "The format of the Email is wrong.",
                position: $isDesktop ? "bottom-right" : "top-center",
            })
            return;
        }
        buttonEnabled = false
        const promise = fetch("https://formspree.io/f/mvgpyoyq", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, body })
        })
        toast.promise(promise, {
            loading: "Processing...",
            position: $isDesktop ? "bottom-right" : "top-center",
            success: () => {
                buttonEnabled = true
                return "Successfully."
            },
            description: "Sending you an email now...",
        })
    }
</script>

{#if $isDesktop}
    <Dialog.Root bind:open={$emailDrawerStore}>
        <Dialog.Content class="font-writer-regular">
            <Dialog.Header class="leading-[0.9rem]">
                <Dialog.Title class="text-[16px]">Email Contact</Dialog.Title>
                <Dialog.Description class="text-[10px]">If you would like to speak with me, please fill out the form below.</Dialog.Description>
            </Dialog.Header>
            <form class="grid items-start gap-4">
                <div class="grid gap-0.5">
                    <Label for="email" class="text-[13px]">Email</Label>
                    <Input type="email" id="email" class="placeholder:text-blue-400 focus-visible:ring-0 text-blue-400 placeholder:text-opacity-80 border-blue-500 border-opacity-50 focus:border-opacity-80 bg-blue-500 bg-opacity-10" bind:value={email} placeholder="hi@gmail.com" />
                </div>
                <div class="grid gap-0.5">
                    <Label for="email" class="text-[13px]">Body</Label>
                    <Textarea class="resize-none h-[9rem] placeholder:text-blue-400 focus-visible:ring-0 text-blue-400 placeholder:text-opacity-80 border-blue-500 border-opacity-50 focus:border-opacity-80 bg-blue-500 bg-opacity-10" bind:value={body} placeholder="Hello..." />
<!--                    <Textarea class="resize-none h-[9rem] ring-0 focus-visible:ring-transparent placeholder:text-blue-400 text-blue-400 placeholder:text-opacity-60 border-blue-500 border-opacity-50 focus:border-opacity-80 transition-all duration-200 bg-blue-500 bg-opacity-10" bind:value={body} placeholder="Hello..."/>-->
                </div>
                <div class="text-[13px] space-y-1">
                    <div on:click={() => {handleSubmit()}} class="bg-blue-100 dark:bg-blue-400 dark:bg-opacity-15 hover:bg-blue-200 hover:dark:bg-opacity-20 transition-all duration-200 py-1.5 rounded-[5px] text-center cursor-pointer {buttonEnabled?'opacity-100':'opacity-60'}" on:click={() => {}}>Send</div>
                    <Dialog.Close class="w-full">
                        <div class="bg-blue-50 dark:bg-blue-300 dark:bg-opacity-10 hover:bg-blue-100 hover:dark:bg-opacity-15 transition-all duration-200 py-1.5 rounded-[5px]">Close</div>
                    </Dialog.Close>
                </div>
            </form>
        </Dialog.Content>
    </Dialog.Root>
{:else}
    <Drawer.Root bind:open={$emailDrawerStore} shouldScaleBackground>
        <Drawer.Content class="font-writer-regular">
            <div class="px-6 pt-2">
                <div>
                    <p class="text-[16px]">Email Contact</p>
                    <p class="text-[10px] text-primary text-opacity-50">If you would like to speak with me, please fill out the form below.</p>
                </div>
                <div class="mt-3 grid gap-0.5">
                    <Label for="email" class="text-[13px]">Email</Label>
                    <Input type="email" id="email" class="placeholder:text-blue-400 focus-visible:ring-0 text-blue-400 placeholder:text-opacity-80 border-blue-500 border-opacity-50 focus:border-opacity-80 bg-blue-500 bg-opacity-10" bind:value={email} placeholder="hi@gmail.com" />
                </div>
                <div class="mt-2 grid gap-0.5">
                    <Label for="email" class="text-[13px]">Body</Label>
                    <Textarea class="resize-none h-[9rem] placeholder:text-blue-400 focus-visible:ring-0 text-blue-400 placeholder:text-opacity-80 border-blue-500 border-opacity-50 focus:border-opacity-80 bg-blue-500 bg-opacity-10" bind:value={body} placeholder="Hello..." />
                </div>
            </div>
            <Drawer.Footer class="px-6 text-[13px] mb-2">
                <div on:click={() => {handleSubmit()}} class="bg-blue-100 dark:bg-blue-400 dark:bg-opacity-15 hover:bg-blue-200 hover:dark:bg-opacity-20 transition-all duration-200 py-1 rounded-[5px] text-center cursor-pointer {buttonEnabled?'opacity-100':'opacity-60'}" on:click={() => {handleSubmit()}}>Send</div>
                <Drawer.Close class="bg-blue-50 dark:bg-blue-300 dark:bg-opacity-10 hover:bg-blue-100 hover:dark:bg-opacity-15 transition-all duration-200 py-1 rounded-[5px]">Cancel</Drawer.Close>
            </Drawer.Footer>
        </Drawer.Content>
    </Drawer.Root>
{/if}