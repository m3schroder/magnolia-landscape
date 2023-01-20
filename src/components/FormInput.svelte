<script lang="ts">
	import { Helper, Input, Label } from 'flowbite-svelte';
	import type { InputType } from 'flowbite-svelte/types';
	export let label: string;
	export let placeholder: string = '';
	export let id: string;
	export let value: string | undefined = undefined;
	export let type: InputType = 'text';
</script>

<div class="flex flex-col gap-1 mb-2">
	<Label for={label} class="text-neutral-500 mb-1">{label}</Label>
	<Input name={id} {id} {value} {placeholder} {type} required={false} />
</div>
