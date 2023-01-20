<script>
	import ActionList from '@ui/ActionList.svelte';
	import EyeCatcher from '@ui/EyeCatcher.svelte';
	import PageTitle from '@ui/PageTitle.svelte';
	import { Card, P, TabItem } from 'flowbite-svelte';
</script>

<PageTitle title="Grading and Drainage Solutions" />
<EyeCatcher
	message="Look toward Magnolia Valley Landscape for all of your grading and yard Drainage issues"
/>

<Card class="card">
	<p>
		Look toward Magnolia Valley Landscape for all of your grading and yard Drainage issues. Improper
		grades and poor drainage systems can cause serious foundational problems to your house down the
		road. Let one of our certified experts inspect your property and provide a solution to any of
		your drainage or grading issues. We provide quality and performance warranties on all of our
		drainage systems, because we believe our vast knowledge and experience have led us to be the
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
