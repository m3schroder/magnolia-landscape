<script lang="ts">
	import { Card } from 'flowbite-svelte';
	import type { ComponentProps } from 'svelte';
	interface $$Props extends ComponentProps<Card> {}
</script>

<Card class={$$restProps.class + 'w-11/12 p-3'} {...$$restProps}>
	<slot:default />
</Card>
