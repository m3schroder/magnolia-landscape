<script lang="ts">
	import { currentNav } from '@lib/menuStore';
	import FormInput from '@element/FormInput.svelte';
	import { Button, Card, Label, Textarea } from 'flowbite-svelte';
	import Drawer from '@component/Drawer.svelte';

	export let navHeight: number;
	export let hidden = true;

	currentNav.subscribe((val) => {
		hidden = val === 'quote' ? false : true;
	});

	$: handleService = (i: number) => {
		let update = [...services];
		update[i][1] = !update[i][1];
		services = update;
	};
	$: services = [
		['Hardscaping', false],
		['Tree Trimming', false],
		['Tree Removal', false],
		['Pressure Washing', false],
		['Sealing', false],
		['Snow Services', false],
		['Landscaping', false]
	];
</script>

<Drawer {navHeight} {hidden}>
	<Card
		color="alternative"
		class="bg-paper shadow-neu mb-4 flex-col flex gap-2 border-1 border-secondary-dark"
	>
		<div class="flex justify-between flex-row gap-3">
			<FormInput label={'First Name'} />
			<FormInput label={'Last Name'} />
		</div>
		<FormInput label={'Phone'} />
		<FormInput label={'Email'} />
		<Label class="text-neutral-500 mb-1">Select Services</Label>
		<div class="flex flex-row flex-wrap gap-4">
			{#each services as service, i}
				<Button
					pill={true}
					size="xs"
					on:click={() => handleService(i)}
					class={`cursor-pointer transition-colors  grow justify-around text-white ${
						service[1] ? '' : 'bg-secondary'
					}`}>{service[0]}</Button
				>
			{/each}
		</div>
		<Label class="text-neutral-500 mt-3">Additional Info</Label>
		<Textarea />
		<Button>Get Quote</Button>
	</Card>
</Drawer>
