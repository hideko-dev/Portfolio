<script>
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

    export let data;
    $: pagenationStore.set(data.pathname)
</script>

<ModeWatcher/>
<Toaster toastOptions={{ class: 'bg-blue-900 bg-opacity-20 backdrop-blur-2xl border-blue-700 border-opacity-10 rounded-[2px]' }}/>
<div class="font-inter-variable font-[500] text-[15px] tracking-tight bg-background" data-vaul-drawer-wrapper>
    <NavigatorDrawer/>
    <EmailDrawer/>
    <Navigator/>
    <PageTransition pathname={data.pathname}>
        <slot/>
    </PageTransition>
    <FooterContent/>
</div>