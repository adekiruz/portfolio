<script>
	// Your selected Skeleton theme:
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../../app.postcss';

	// Your custom Skeleton theme:
	import '../../theme.postcss';

	import {
		AppBar,
		AppShell,
		Avatar,
		Drawer,
		LightSwitch,
		Modal,
		Toast,
		drawerStore
	} from '@skeletonlabs/skeleton';
	import Navigation from '$lib/components/Navigation.svelte';

	function drawerOpen() {
		console.log(drawerStore.open);
		drawerStore.open();
	}

	let currentYear = new Date().getFullYear();
</script>

<Drawer width="w-1/2">
	<Navigation />
</Drawer>

<Modal />
<Toast />

<AppShell
	slotSidebarLeft="w-0 md:w-52 bg-surface-500/10 animate-fade-right animate-once animate-ease-in-out"
>
	<svelte:fragment slot="sidebarLeft"><Navigation /></svelte:fragment>
	<svelte:fragment slot="pageHeader">
		<AppBar>
			<svelte:fragment slot="lead">
				<button class="md:hidden btn btn-sm mr-4" on:click={drawerOpen}>
					<span>
						<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
							<rect width="100" height="20" />
							<rect y="30" width="100" height="20" />
							<rect y="60" width="100" height="20" />
						</svg>
					</span>
				</button>
				<a href="/">
					<strong class="text-xl uppercase">boilerplate</strong>
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />
				<Avatar initials="MD" background="bg-primary-500" width="w-10" />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<!-- content -->
	<div class="container mx-auto p-5">
		<slot />
	</div>

	<svelte:fragment slot="pageFooter">
		<div class="p-4">
			<div class="prose dark:prose-invert text-center m-auto">Copyright © {currentYear}</div>
		</div>
	</svelte:fragment>
</AppShell>
