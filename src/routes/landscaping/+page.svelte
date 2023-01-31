<script lang="ts">
	import ActionList from '@ui/ActionList.svelte';
	import FreeQuote from '@ui/FreeQuote.svelte';
	import PageTitle from '@ui/PageTitle.svelte';
	import { Card } from 'flowbite-svelte';
</script>

<PageTitle title="Landscaping Design & Installation" />
<Card class="card-image" img="dopeyard.jpeg" alt="Great landscaping">
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
	services={['Landscape Plants', 'Planting Plans', 'Outdoor Lighting Plans', 'Irrigation Plans']}
/>
