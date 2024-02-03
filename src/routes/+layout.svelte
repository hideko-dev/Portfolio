<script>
	import { ModeWatcher } from "mode-watcher"
	import { contactValue } from "$lib/contact";
	import { Toaster } from "svelte-sonner"
	import "../app.pcss"
	import Header from "$lib/components/Header.svelte"
	import '@fontsource-variable/inter'
	import Footer from "$lib/components/Footer.svelte"
	import {onMount} from "svelte";

	onMount(() => {
		console.log("\n" + "%c█▄█ ▀█▀ █▀▄ █▀▀ █▄▀ █▀█ Portfolio \n" +
				"█ █ ▄█▄ █▄▀ ██▄ █ █ █▄█ Site\n", "color: DodgerBlue; font-weight: bold")
	})
</script>

<div class="bg-black">
	<div class="bg-[var(--prime-tune)] scale-[{$contactValue ? 0.97 : 1}] rounded-[{$contactValue ? 15 : 0}px] transition-all duration-700">
		<ModeWatcher/>
		<Toaster/>
		<Header/>
		<slot/>
		<Footer/>
	</div>
</div>