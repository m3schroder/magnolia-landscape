<script lang="ts">
	import { page } from '$app/stores';
	import Call from './Call.svelte';
	import Map from './Map.svelte';
	import Menu from './Menu.svelte';
	import QuoteForm from './QuoteForm.svelte';
	import '../app.postcss';
	import Navbar from './Navbar.svelte';

	$: navHeight = 60;
</script>

<main class="flex flex-col  items-center h-screen overflow-auto">
	<content
		class="h-fit flex flex-col items-center gap-9 lg:w-1/3 w-screen pt-5 mb-24"
		style={`padding-bottom: ${navHeight}px;`}
	>
		<a href="/">
			<img
				src={'/logo.jpeg'}
				alt={'Mangolia Valley Landscape logo'}
				class={`p-5 transition-all ${$page.route.id != '/' ? 'w-72' : 'w-80'} p-3`}
			/>
		</a>
		<slot />
		<Map />
	</content>
	<Navbar bind:navHeight />
	<div class={`fixed w-full z-10 flex-center`}>
		<QuoteForm bind:navHeight />
		<Menu bind:navHeight />
		<!-- <Call bind:navHeight /> -->
	</div>
</main>
