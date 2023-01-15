<script>
	export let size = '24';
	let viewBox = '0 0 24 24';
	let svgpath;
	export let ariaLabel = 'facebook';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	fill="none"
	{viewBox}
	stroke-width="2"
	on:click
	on:mouseenter
	on:mouseleave
	on:mouseover
	on:mouseout
	on:blur
	on:focus
>
	<path
		d="m32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584.312 3.584.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"
	/>
</svg>
