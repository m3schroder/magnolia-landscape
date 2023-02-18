<script>
	import ActionList from '@ui/ActionList.svelte';
	import PageTitle from '@ui/PageTitle.svelte';
	import { Card } from 'flowbite-svelte';
	import image from '@static/grading.webp?w=1000';
</script>

<svelte:head>
	<title>Drainage & Grading</title>
	<meta
		name="description"
		content="Drainage Solutions for your property in Middle Tennessee. Our experts provide drainage assessments, installations, and repairs to prevent water damage and flooding. Contact us for a free consultation"
	/>
</svelte:head>

<PageTitle
	title="Grading and Drainage Solutions"
	message="Look toward Magnolia Valley Landscape for all of your grading and yard Drainage issues"
/>

<Card class="card-image" img={image}>
	<p>
		Improper grading and poor drainage systems can cause serious foundational problems to your house
		down the road. Let one of our certified experts inspect your property and provide a solution to
		any of your drainage or grading issues. We provide quality and performance warranties on all of
		our drainage systems, because we believe our vast knowledge and experience have led us to be the
		superior option when it comes to drainage issues.
	</p>
</Card>

<ActionList
	title="We take care of..."
	services={[
		'Yard Drainage',
		'Landscape Drainage',
		'French Drains',
		'Dry Wells',
		'Grading & Sloping',
		'Custom Drainage Solutions',
		'Residential & Commercial Service'
	]}
/>
