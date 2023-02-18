<script lang="ts">
	import ActionList from '@ui/ActionList.svelte';
	import FreeQuote from '@ui/FreeQuote.svelte';
	import PageTitle from '@ui/PageTitle.svelte';
	import { Card } from 'flowbite-svelte';
	import image from '@static/commercial-work.webp?w=1200&webp';
</script>

<svelte:head>
	<title>Commercial Service</title>
	<meta
		name="Commercial Landscaping Services in Brentwood and Franklin"
		content="Magnolia valley does commercial work for clients all of middle Tennessee, this includes all of our residential services and more!"
	/>
	<link rel="preload" as="image" href={'/commercial-work.webp'} />
</svelte:head>

<PageTitle title="Commercial Services" />

<Card class="card-image" img={image}>
	<p>
		<strong>The one stop shop for all of your commercial landscape maintenance</strong>
		We have experts for all of your commercial property needs.
	</p>
	<p>
		At <strong>Magnolia Valley Landscape</strong>, we let the work we do speak for itself. With
		<strong>hundreds</strong>
		of satisfied clients, our Commercial maintenance devision is top of the line when it comes to
		<strong>quality</strong>
		and <strong>responsiveness</strong>
	</p>
</Card>
<ActionList
	title="We take care of..."
	services={[
		'Weekly Maintenance',
		'Full Irrigation maintenance',
		'Landscape Design and Installation',
		'Customized Turf Treatments',
		'Trim/Prune',
		'Power Washing',
		'Snow Removal',
		'Mulching',
		'Hardscaping',
		'And MORE'
	]}
/>

<FreeQuote />
<Card class="card">
	<h3 class="text-center w-full header-pb">Process</h3>
	<p class="text-start p-2">
		On day one of choosing us, you will be paired with a magnolia valley trained property manager
		who is an expert in your property whether that be a corporate campus, retail location,
		apartment, HOA, retirement community, office building, or industrial property. You will have a
		direct line of contact with your magnolia valley expert property manager and he will be
		inspecting your property each week to ensure your commercial location is receiving top notch
		care.
	</p>
</Card>
<Card class="card">
	<p>
		Our uniformed commercial crews are backed with years of experience and are not allowed within
		our commercial division until they have proved to be experts in the landscape field.
	</p>
	<p>
		We cover all of your properties needs , we have designed our commercial division with one goal
		in mind. That's to be a one stop shop for all of our clients and future clients.
	</p>
	<p>
		<strong>
			Give us a call to get your commercial property back where it needs be with a team that cares.
			Our commercial clients put their trust in us to handle everything from A to Z.
		</strong>
	</p>
</Card>
