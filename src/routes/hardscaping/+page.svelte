<script>
	import PageTitle from '@ui/PageTitle.svelte';
	import { Card } from 'flowbite-svelte';
	import image from '@static/greatpaving.webp?w=900&jpeg';
</script>

<svelte:head>
	<title>Hardscaping</title>
	<meta
		name="description"
		content="Transform your outdoor space with professional Hardscaping services. We design, install and maintain beautiful patios, retaining walls, walkways and more. Discover our portfolio and get a free quote today."
	/>
</svelte:head>

<PageTitle title="Hardscaping" message="Outdoor Living Redefined" />
<Card class="card-image" img={image}>
	<p>
		Outdoor Living Redefined. We offer many design options including walls, pavers, outdoor
		kitchens, features, lighting, and more! With over 10 years of experience designing and
		installing in Middle Tennessee, we can help you create the perfect outdoor living space for your
		property. Our styles can range from modern to traditional, we use our expertise to add the
		finishing touches to your outdoor living space by blending together elements from the outdoor
		and indoor living spaces seamlessly.
	</p>
</Card>
