<script lang="ts">
	import ActionList from '@ui/ActionList.svelte';
	import PageTitle from '@ui/PageTitle.svelte';
	import { Card } from 'flowbite-svelte';
	import image from '@static/snow-removal.webp?w=900';
</script>

<svelte:head>
	<title>Snow Services</title>
	<meta
		name="description"
		content="Stay safe and warm this winter with reliable snow services. Our team provides snow removal, de-icing, and winter maintenance for commercial and residential properties."
	/>
</svelte:head>

<PageTitle title="Snow Removal" />

<Card class="card-image" img={image}>
	<p>
		Don't get buried in snow this season! We offer both residential, and commercial snow removal
		services to ensure your home or property is safe, accessible, and snow-free! No job is too big.
		We are on call <strong class="inline text-md mx-1">24/7</strong> for emergency management, so you'll
		never be stuck!
	</p>
</Card>

<ActionList
	title={'Let us take care of...'}
	services={[
		'Snow Plowing',
		'Salt Application',
		'Sidewalk Snow Removal',
		'Ice Melt Application',
		'Skidsteers & Loaders',
		'Snow Relocation',
		'24/7 Emergency Snow & Ice Management',
		'Post Storm Snow and Ice Removal'
	]}
/>
