<script lang="ts">
	const menus = ['Home', 'Fish', 'About Us']
	import {SignInModal} from "flowbite-svelte";
	import {ModalButton} from "flowbite-svelte";
	
	
</script>


<nav class="fixed top-0 z-40 w-full py-6 backdrop-blur-md">


	<img src="/images/logo.svg" class="absolute left-12 -top-15" width={100} height={32} alt="Pixi Logo" />
	<div class="flex justify-between mx-auto max-w-7xl">
		<div class="flex items-center space-x-12">
				<a href="/" class="nav-link">Home</a>
				<a href="/fish" class="nav-link">Fish</a>
				<a href="/about" class="nav-link">About Us</a>
		</div>
		<div class="flex space-x-2" id="modal">
				<ModalButton id="signin1" btnName="Sign In" btnColor="blue"/>
				<ModalButton id="signin2" btnName="Create an account" btnColor="blue" border-radius = "10px"/>	
		</div>
	</div>
</nav>

<style lang="postcss">

	.nav-link {
		@apply relative font-bold transition hover:text-info;
	}
	.nav-link:hover::after {
		content: '';
		position: absolute;
		bottom: -7px;
		left: 50%;
		border-radius: 10000px;
		width: 6px;
		height: 6px;
		background: linear-gradient(38.75deg, #6bd4ff 14.73%, #8c70ff 85.28%);
		z-index: 0;
	}


</style>
