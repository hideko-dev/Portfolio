<script lang="ts">
    import "../app.css";
    import "$lib/fonts/font.css";
    import { ModeWatcher } from "mode-watcher";
    import NavigatorDrawer from "$lib/components/navigator-drawer.svelte";
    import EmailDrawer from "$lib/components/email-drawer.svelte";
    import Navigator from "$lib/components/navigator.svelte";
    import PageTransition from "$lib/components/page-transition.svelte";
    import FooterContent from "$lib/components/footer-content.svelte";
    import { Toaster } from "$lib/components/ui/sonner";
    import { pagenationStore } from "$lib/stores/pagenation.store";
    import { client } from "$lib/microcms";
    import { onMount } from "svelte";
    import {blogs, extensions} from "$lib/data-content";
    import type { BlogType } from "$lib/types/blogs.types";
    import type { ExtensionType } from "$lib/types/extensions.types";

    export let data;
    $: pagenationStore.set(data.pathname)
    let width = 0
    onMount(async() => {
        width = 10
        const blogsData = await client.getAllContents({ endpoint: "blogs" })
        const extensionsData = await client.getAllContents({ endpoint: "extensions" })
        blogs.set(blogsData as BlogType[])
        extensions.set(extensionsData as ExtensionType[])
        width = 100
    })
</script>

<ModeWatcher/>
<Toaster toastOptions={{ class: 'bg-blue-900 bg-opacity-20 backdrop-blur-2xl border-blue-700 border-opacity-10 rounded-[2px]' }}/>
<div class="a bg-primary h-[2px] bg-opacity-60 absolute top-0 left-0" style="width: {width}%; opacity: {width === 100 ? 0 : 100};"/>
<div class="font-inter-variable font-[500] text-[15px] tracking-tight min-h-screen h-max" data-vaul-drawer-wrapper>
    <NavigatorDrawer/>
    <EmailDrawer/>
    <Navigator/>
    <PageTransition pathname={data.pathname}>
        <slot/>
    </PageTransition>
    <FooterContent/>
</div>

<style>
    .a {
        transition: opacity 0.5s, width 0.2s;
    }
</style>