<script>
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<strong class="text-xl uppercase">boilerplate</strong>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<LightSwitch />
		<a href="/login">Login</a>
	</svelte:fragment>
</AppBar>
