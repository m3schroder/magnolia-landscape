<script lang="ts">
	import { currentNav } from '@lib/menuStore';
	import {
		Footer,
		FooterCopyright,
		FooterLinkGroup,
		FooterBrand,
		FooterLink
	} from 'flowbite-svelte';
</script>

<Footer footerType="logo" class="card max-w-xs">
	<div class="flex lg:justify-start px-4 items-center justify-between flex-col">
		<div class="w-full flex justify-evenly mb-8 ">
			<FooterBrand src="/magnolia-logo.png" alt="Magnolia Logo" name="Magnolia Valley Landscape" />
			<FooterLinkGroup
				ulClass="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400"
			>
				<!-- <FooterLink href="/"></FooterLink>About</FooterLink> -->
				<span on:click={() => currentNav.set('quote')} class="cursor-pointer"> Contact </span>
			</FooterLinkGroup>
		</div>

		<!-- <div class="text-color w-10/12 text-sm gap-4 flex flex-col">
			<section class="flex flex-col gap-3">
				<span>1410 Dalton Hollow Rd </span>
				<span>Hartsville, TN</span>
				<a href="tel:615-796-5388" class="appearance-none no-underline">
					<span>(<strong>615</strong>) - 663 - 5650</span>
				</a>
			</section>
		</div> -->
	</div>
	<hr class="my-6 w-5/6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
	<FooterCopyright aClass="w-" href="/" by="Magnolia Valley Landscape™" />
</Footer>
