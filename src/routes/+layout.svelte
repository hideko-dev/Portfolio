<script>
	import { ModeWatcher } from "mode-watcher"
	import { contactValue } from "$lib/contact"
	import { Toaster } from "svelte-sonner"
	import "../app.pcss"
	import Header from "$lib/components/layout/Header.svelte"
	import '@fontsource-variable/inter'
	import Footer from "$lib/components/layout/Footer.svelte"
	import { onMount } from "svelte"
	import Transition from "$lib/components/Transition.svelte";
	import { onHydrated } from "$lib/hydrated";
	export let data

	onMount(() => onHydrated())
</script>

<div class="bg-black">
	<div style="scale: {$contactValue ? 0.97 : 1}" class="bg-[var(--prime-tune)] rounded-[{$contactValue ? 15 : 0}px] transition-all duration-700">
		<ModeWatcher/>
		<Toaster/>
		<Header/>
		<Transition pathname={data.pathname}>
			<slot/>
		</Transition>
		<Footer/>
	</div>
</div>