<script>
	import { ModeWatcher } from "mode-watcher";
	import { Toaster } from "svelte-sonner";
	import "../app.pcss";
	import Header from "$lib/components/Header.svelte"

	import '@fontsource-variable/inter';
	import Footer from "$lib/components/Footer.svelte";
</script>

<div class="app">
	<ModeWatcher/>
	<Toaster/>
	<Header/>
	<slot/>
	<Footer/>
</div>