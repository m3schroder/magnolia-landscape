<script lang="ts">
	import { Input, Label } from 'flowbite-svelte';
	export let label: string;
	export let placeholder: string = '';
</script>

<div class="flex flex-col gap-1 mb-2">
	<Label for={label} class="text-neutral-500 mb-1">{label}</Label>
	<Input type="text" id={label} {placeholder} required />
</div>
