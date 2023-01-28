<script lang="ts">
	import {
		Footer,
		FooterCopyright,
		FooterLinkGroup,
		FooterBrand,
		FooterLink
	} from 'flowbite-svelte';
</script>

<Footer footerType="logo">
	<div class="sm:flex sm:items-center sm:justify-between">
		<div class="mx-auto mb-5 w-fit">
			<FooterBrand src="/magnolia-logo.png" alt="Magnolia Logo" name="Magnolia Valley Landscape" />
		</div>
		<!-- <FooterLinkGroup
			ulClass="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400"
		>
			<FooterLink href="/">About</FooterLink>
			<FooterLink href="/">Licensing</FooterLink>
			<FooterLink href="/">Contact</FooterLink>
		</FooterLinkGroup> -->
	</div>
	<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
	<FooterCopyright href="/" by="Magnolia Valley Landscape™" />
</Footer>
<!-- <div class="text-color w-10/12 text-sm gap-4 flex flex-col">
	<section class="flex flex-col gap-3">
		<span>1410 Dalton Hollow Rd</span>
		<span>Hartsville, TN</span>
		<span>(615) - 663 - 5650</span>
	</section>
</div> -->
