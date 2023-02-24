<script lang="ts">
	import ActionList from '@ui/ActionList.svelte';
	import FreeQuote from '@ui/FreeQuote.svelte';
	import PageTitle from '@ui/PageTitle.svelte';
	import { Card } from 'flowbite-svelte';
	import image from '@static/dopeyard.webp?w=1000&jpeg';
</script>

<svelte:head>
	<title>Lawn Care</title>
	<meta name="Efficient lawncare in Frankling and Brentwood Tennessee" />
	<meta
		name="description"
		content="Get a lush, green lawn with expert lawncare services. Our team provides mowing, fertilization, weed control, aeration, and more for a healthy and vibrant lawn. Contact us for a free estimate."
	/>
</svelte:head>

<PageTitle title="Lawn Care" />
<Card class="card-image" img={image} alt="Great landscaping">
	<p>
		Magnolia Valley is your trusted provider of lawn care and landscaping services in the Franklin
		and Brentwood areas of Tennessee. Our team of experienced professionals is dedicated to helping
		you achieve a beautiful, healthy lawn and landscape that you can enjoy all year round.
		<!-- <strong>Your outdoor living area is an extension of your home.</strong>
		<br class="break-space" />
		Partner with one of our award-winning landscape designers to create
		<strong class="!inline">your</strong>
		little bit of heaven outside!
		<br class="break-space" />
		Whether you would like to renovate your existing landscape or create a custom design for your new
		home, our design team will blend your dreams with their expertise. -->
	</p>
</Card>
<FreeQuote />
<Card class="card">
	<p>
		At Magnolia Valley, we believe that a healthy, beautiful lawn is more than just a sign of good
		property management - it's a source of pride for homeowners and business owners alike. Our team
		of lawn care experts is <strong>passionate</strong> about delivering
		<strong>exceptional service</strong> and <strong>outstanding results</strong>. We use only the
		<br />highest-quality products and equipment, and we tailor our services to meet your specific
		needs and budget.
	</p>
</Card>

<ActionList
	title="We take care of..."
	services={[
		'Mowing, Edging, Trimming',
		'Fertilization',
		'Weed Control',
		'Design & Installation',
		'Seasonal clean-Up & Maintenance'
	]}
/>
