<script lang="ts">
	import { page } from '$app/stores';
	import Call from './Call.svelte';
	import Map from './Map.svelte';
	import Menu from './Menu.svelte';
	import QuoteForm from './QuoteForm.svelte';
	import '../app.postcss';
	import Navbar from './Navbar.svelte';
	import { Card } from 'flowbite-svelte';

	$: navHeight = 60;
</script>

<main class="flex flex-col justify-end h-screen ">
	<content class="h-full flex flex-col items-center gap-7  w-screen overflow-auto py-5">
		{#if $page.route.id != '/'}<Card img={'/logo.jpeg'} class="mx-auto w-full h-fit p-3" />
		{/if}
		<slot />
		<Map />
	</content>
	<Navbar bind:navHeight />
	<div class={`fixed w-full z-10 flex-center`}>
		<QuoteForm bind:navHeight />
		<Menu bind:navHeight />
		<Call bind:navHeight />
	</div>
</main>
