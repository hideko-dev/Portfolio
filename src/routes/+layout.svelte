<script>
	import { ModeWatcher } from "mode-watcher"
	import { contactValue } from "$lib/pages/contact"
	import { Toaster } from "svelte-sonner"
	import "../app.pcss"
	import Header from "$lib/components/layout/Header.svelte"
	import '@fontsource-variable/inter'
	import '@fontsource-variable/noto-sans-jp'
	import Footer from "$lib/components/layout/Footer.svelte"
	import { onMount } from "svelte"
	import Transition from "$lib/components/Transition.svelte"
	import { onHydrated } from "$lib/hydrated"
	import { onNavigate } from "$app/navigation"
	import { location } from "$lib/location"

	export let data

	let loader = 0

	onMount(() => {
		onHydrated()
		onPageNavigation()
		location.set(window.location.pathname)
	})

	onNavigate((c) => {
		onPageNavigation()
		if(c.to != null) {
			location.set(`${c.to.route.id}`)
		}

	})

	function onPageNavigation() {
		loader = 100
		setTimeout(() => {
			loader = 0
		}, 400)
	}
</script>

<div class="bg-black">
	<div style="scale: {$contactValue ? 0.97 : 1}" class="bg-[var(--prime-tune)] rounded-[{$contactValue ? 15 : 0}px] transition-all duration-700">
		<div class="absolute h-[2px] bg-opacity-50 bg-primary transition-all duration-300" style={`opacity: ${loader === 100 ? 1 : 0}`}/>
		<ModeWatcher/>
		<Toaster/>
		<Header/>
		<Transition pathname={data.pathname}>
			<slot/>
		</Transition>
		<Footer/>
	</div>
</div>