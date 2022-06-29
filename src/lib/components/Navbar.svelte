<script lang="ts">
	import { LogIn } from '../../stores/LogIn'
	import { SignIn } from '../../stores/SignIn'
</script>

<nav class="fixed top-0  z-10 w-full py-6 backdrop-blur-md">
	<div class="flex justify-between mx-auto max-w-7xl">
		<div class="flex items-center space-x-12">
			<img src="/images/logo.svg" class="absolute left-12 pt-20 -top-15" width={100} height={32} alt="Pixi Logo" />
			<a href="/" class="nav-link">Home</a>
			<a href="/fish" class="nav-link">Fish</a>
			<a href="/about" class="nav-link">About Us</a>
		</div>
		<div class="flex space-x-2" id="modal">
			<button
				on:click={() => {
					SignIn.set(true)
				}}>Sign In</button
			>
			<button
				class="primary"
				on:click={() => {
					LogIn.set(true)
				}}>Create Account</button
			>
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
