<script lang="ts">
	import { page } from '$app/stores';
	import { afterUpdate, onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import * as ackeeTracker from 'ackee-tracker';

	import '../app.postcss';
	import { ackee } from '$lib/store';
	import Navbar from '@ui/Navbar.svelte';
	import Map from '@ui/Map.svelte';
	import Menu from '@ui/Menu.svelte';
	import QuoteForm from '@ui/QuoteForm.svelte';
	import Footer from '@ui/Footer.svelte';
	import ContactList from '@ui/ContactList.svelte';
	//@ts-ignore;
	import logo from '@static/magnolia-logo.png?w=400&webp';
	//@ts-ignore;
	import logoTitle from '@static/magnolia-logo.png?w=200&webp';

	afterNavigate(() => {
		$ackee?.record('8650a19f-ee96-4325-aa17-ca264d593edd');
	});

	onMount(() => {
		ackee.set(
			ackeeTracker.create('https://stats.magnoliavalleylandscape.com', {
				detailed: true,
				ignoreLocalhost: true,
				ignoreOwnVisits: false
			})
		);
	});
	let topLevel: HTMLElement;
	afterUpdate(() => {
		topLevel.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	});

	$: navHeight = 60;
</script>

<svelte:head>
	<link as="image" href={'/awesome_sealing.webp'} />
	<link rel="icon" href={logoTitle} />
</svelte:head>
<main
	class="flex flex-col  items-center h-screen overflow-y-auto overflow-x-hidden"
	bind:this={topLevel}
>
	<content
		class="h-fit lg:pt-28 flex flex-col items-center lg:gap-16 gap-9 lg:w-full w-screen pt-5 mb-24"
		style={`padding-bottom: ${navHeight}px;`}
	>
		<a href="/">
			<img
				src={logo}
				alt={'Mangolia Valley Landscape logo'}
				class={`p-5 transition-all ${$page.route.id != '/' ? 'lg:w-72 w-64' : 'lg:w-96 w-80'} p-3`}
			/>
		</a>
		<slot />
		<div
			class="flex lg:flex-row flex-col lg:items-start  lg:justify-center items-center gap-9 lg:w-full lg:max-w-3xl"
		>
			<Map />
			<Footer />
		</div>
		<div class="hidden items-center lg:flex justify-center gap-7 ">
			<ContactList />
		</div>
	</content>
	<Navbar bind:navHeight />
	<div class={`fixed w-full z-10 flex-center`}>
		<QuoteForm />
		<Menu />
		<!-- <Call bind:navHeight /> -->
	</div>
</main>
