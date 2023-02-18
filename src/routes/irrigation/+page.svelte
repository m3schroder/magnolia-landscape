<script>
	import FreeQuote from '@ui/FreeQuote.svelte';
	import PageTitle from '@ui/PageTitle.svelte';
	import { Card, Hr } from 'flowbite-svelte';
	import image from '../../static/sprinkler.webp?w=800';
</script>

<svelte:head>
	<title>Irrigation</title>
	<meta
		name="Expert irrigation installations"
		content="Keep your lawn and garden healthy with expert outdoor irrigation services. Our team installs and maintains custom sprinkler systems, drip irrigation, and drainage solutions for optimal water management. Contact us for a free consultation."
	/>
</svelte:head>

<PageTitle title="Irrigation" />

<Card class="card-image" img={image}>
	<p>
		No matter how many hours you spend caring for your yard, you're still always concerned with
		whether or not your plants are receiving enough water.
	</p>
</Card>
<Card class="card">
	<p>
		No matter how many hours you spend caring for your yard, you're still always concerned with
		whether or not your plants are receiving enough water. Picture waking up to an automated
		irrigation system that will automatically turn on at the perfect time and place. It's a single
		touch of the button and voila! Your plants receive the amount of water they need every day.
	</p>
</Card>
<FreeQuote />

<Card class="card">
	<p>
		To learn more about automating your landscape care, contact us today. Our team will help design
		and install a custom irrigation system designed just for you.
	</p>
</Card>
