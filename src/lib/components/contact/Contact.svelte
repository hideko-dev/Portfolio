<script lang="ts">
    import * as Drawer from "$lib/components/ui/drawer";
    import { Button } from "$lib/components/ui/button";
    import { Input } from "$lib/components/ui/input";
    import { Textarea } from "$lib/components/ui/textarea";
    import { Alert } from "$lib/components/ui/alert";
    import Translations from "$lib/components/contact/Translations.svelte";
    import {submitContact} from "$lib/contact";
    let mail: string
    let content: string
</script>

<Drawer.Root>
    <Drawer.Trigger class="opacity-40 hover:opacity-100 transition-all">Contact</Drawer.Trigger>
    <Drawer.Content class="px-[10%] h-auto">
        <div class="grid place-items-center mt-[4rem]">
            <div class="w-full">
                <Drawer.Header class="p-0 mb-3">
                    <Drawer.Title>Would you like to get in touch with me?</Drawer.Title>
                    <Drawer.Description>Please fill out the form below to submit your information. Doing so will result in submission.</Drawer.Description>
                    <Translations/>
                </Drawer.Header>
                <Input bind:value={mail} class="mb-[10px]" placeholder="contact@gmail.com"/>
                <Textarea bind:value={content} placeholder="Hello!" class="h-[10rem] resize-none"/>
                <Drawer.Footer class="p-0 my-4 mb-10">
                    <Button on:click={() => submitContact(mail, content)}>Submit</Button>
                    <Drawer.Close asChild let:builder>
                        <Button builders={[builder]} variant="outline">Cancel</Button>
                    </Drawer.Close>
                </Drawer.Footer>
            </div>
        </div>
    </Drawer.Content>
</Drawer.Root>