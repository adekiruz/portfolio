<script>
	import { AppShell, AppBar, LightSwitch, Avatar } from '@skeletonlabs/skeleton';

	let currentYear = new Date().getFullYear();
</script>

<AppShell>
	<svelte:fragment slot="pageHeader">
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">boilerplate</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />
				<a href="/login">Login</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<!-- content -->
	<div class="flex items-center justify-center h-screen">
		<slot />
	</div>

	<svelte:fragment slot="pageFooter">
		<div class="p-4">
			<div class="prose dark:prose-invert text-center m-auto">Copyright © {currentYear}</div>
		</div>
	</svelte:fragment>
</AppShell>
