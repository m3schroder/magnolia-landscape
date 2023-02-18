<script>
	import FreeQuote from '@ui/FreeQuote.svelte';
	import PageTitle from '@ui/PageTitle.svelte';
	import { Card } from 'flowbite-svelte';
	import image from '../../static/powerwashing.webp?w=1000';
</script>

<svelte:head>
	<title>Pressure Washing</title>
	<meta
		name="Commercial Pressure Washing Services"
		content="Restore the beauty of your property with professional pressure washing services. Our team removes dirt, grime, and stains from surfaces, including siding, decks, driveways, and sidewalks"
	/>
</svelte:head>

<PageTitle title="Pressure Washing" />
<Card class="card-image" img={image}>
	<p>
		Your investment properties or commercial spaces need to be taken care of by a professional. Let
		us take care of your exterior so you know that if your tenants step outside, the environment
		will be free from toxins and residue. We also offer a variety of styles for our service — roofs,
		concrete, siding, and more.
	</p>
</Card>

<FreeQuote />

<Card class="card">
	<p>
		With our eco-friendly detergents, you will never have to worry about contaminating the outside
		world with any more chemicals than necessary. At Magnolia Valley Landscape, we're here to make
		life easier for you and make sure that your investments are taken care of without you having to
		think twice about their appearance or cleanliness.
	</p>
</Card>
