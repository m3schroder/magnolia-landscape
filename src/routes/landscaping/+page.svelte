<script lang="ts">
	import ActionList from '@ui/ActionList.svelte';
	import FreeQuote from '@ui/FreeQuote.svelte';
	import PageTitle from '@ui/PageTitle.svelte';
	import { Card } from 'flowbite-svelte';
	import image from '@static/dopeyard.webp?w=1000&jpeg';
</script>

<svelte:head>
	<title>Landscaping</title>
	<meta
		name="description"
		content="Create the perfect outdoor oasis with professional landscaping services. Our team designs, installs and maintains beautiful landscapes, including trees, shrubs, flowers, and hardscaping features. Contact us for a free consultation."
	/>
</svelte:head>

<PageTitle title="Landscaping Design & Installation" />
<Card class="card-image" img={image} alt="Great landscaping">
	<p>
		<strong>Your outdoor living area is an extension of your home.</strong>
		<br class="break-space" />
		Partner with one of our award-winning landscape designers to create
		<strong class="!inline">your</strong>
		little bit of heaven outside!
		<br class="break-space" />
		Whether you would like to renovate your existing landscape or create a custom design for your new
		home, our design team will blend your dreams with their expertise.
	</p>
</Card>
<FreeQuote />

<ActionList
	title="We take care of..."
	services={['Landscape Plants', 'Planting Plans', 'Outdoor Lighting', 'Irrigation Plans']}
/>
