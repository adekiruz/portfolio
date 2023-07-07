<script>
	import { AppBar, Avatar, LightSwitch, drawerStore } from "@skeletonlabs/skeleton";

    function drawerOpen() {
		console.log(drawerStore.open);
		drawerStore.open();
	}
</script>

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
        <a href="">
            <strong class="text-xl uppercase">portfolio</strong>
        </a>
    </svelte:fragment>
    <svelte:fragment slot="trail">
        <LightSwitch />
        <Avatar initials="MD" background="bg-primary-500" width="w-10" />
    </svelte:fragment>
</AppBar>