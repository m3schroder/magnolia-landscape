<script lang="ts">
	import { currentNav } from '@lib/menuStore';
	import FormInput from '@ui/FormInput.svelte';
	import { Button, Card, Label, Textarea } from 'flowbite-svelte';
	import Drawer from '@ui/Drawer.svelte';

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
	<Card color="alternative" class="bg-paper shadow-neu mb-4  border-1 border-secondary-dark">
		<form method="post" action="/" class="flex-col flex gap-2">
			<div class="flex justify-between flex-row gap-3">
				<FormInput label={'First Name'} id={'first'} />
				<FormInput label={'Last Name'} id={'last'} />
			</div>
			<FormInput label={'Phone'} id={'number'} type={'tel'} />
			<FormInput label={'Email'} id={'email'} type={'email'} />
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
			<Textarea id={'email'} />
			<Button class="mt-7" type="submit">Get Quote</Button>
		</form>
	</Card>
</Drawer>
