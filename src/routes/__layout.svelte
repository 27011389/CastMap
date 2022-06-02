<script lang="ts">
	import '../app.css'
	import '@fontsource/inter/300.css'
	import '@fontsource/inter/400.css'
	import '@fontsource/inter/600.css'
	import '@fontsource/inter/700.css'
	import '@fontsource/inter/800.css'
	import Navbar from '$lib/components/Navbar.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import {isOverlayOpen} from "../stores/OverlayStore"
	import Overlay from '$lib/components/Overlay.svelte';
	import { FloatingLabelInput } from 'flowbite-svelte'
	import {SignInModal} from "flowbite-svelte";
			 
</script>
<div class="signin">

</div>
<div class="overflow-x-hidden text-white bg-dark">
	<Navbar />
		<!-- Modal form for login and sign up  -->
		<SignInModal id="signin1" titleSignIn="Sign In" lostPasswordLink="/"/>
		<SignInModal id="signin2" titleSignIn="Create an Account" lostPasswordLink="/"/>
	<slot />
	{#if $isOverlayOpen}
		<Overlay>
			  <form> 
				<h1>Quota Request</h1>  
				<FloatingLabelInput id="email" name="email" type="email" required label="Area"/>
				<FloatingLabelInput id="password" name="password" type="password" required label="First Name" />
				<FloatingLabelInput id="confirm_password" name="confirm_password" type="password" required label="Last Name" />
				<FloatingLabelInput id="Last Name" name="first_name" type="text" required label="Password" />
				<button>Submit</button>
			  </form>
		</Overlay>
	{/if}
	<Footer />
</div>

<style lang="postcss" global>
	
	button {
		@apply px-[18px] py-[10px] rounded-[100px] font-bold;
		@apply text-primary bg-white;
	}
	button.primary {
		@apply text-white bg-primary;
	}
	.content {
    display: grid;
    grid-template-columns: 20% 80%;
    grid-column-gap: 10px;
  }
  input {
	  color: black;
  }
.signin{
	position: absolute;
	top: 10rem;
}

</style>
