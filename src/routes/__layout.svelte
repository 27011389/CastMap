<script lang="ts">
	import '../app.css'
	import '@fontsource/inter/300.css'
	import '@fontsource/inter/400.css'
	import '@fontsource/inter/600.css'
	import '@fontsource/inter/700.css'
	import '@fontsource/inter/800.css'
	import Navbar from '$lib/components/Navbar.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import { isOverlayOpen } from '../stores/OverlayStore'
	import { SignIn } from '../stores/SignIn'
	import { LogIn } from '../stores/LogIn'
	import Overlay from '$lib/components/Overlay.svelte'
	import OverlaySignUp from '$lib/components/OverlaySignUp.svelte'
	import OverlayLogIn from '$lib/components/OverlayLogIn.svelte'
	import { initializeApp } from 'firebase/app'

	/////////////////// Firebase script and authentication////////////////////
	let email = ''
	let password = ''
	let active = false

	// Import the functions from the SDKs
	import {
		getAuth,
		signInWithEmailAndPassword,
		createUserWithEmailAndPassword,
		onAuthStateChanged
	} from 'firebase/auth'
	import { goto } from '$app/navigation'

	// Web app's Firebase configuration
	const firebaseConfig = {
		apiKey: 'AIzaSyBXth8FLkERBoSGJ9_F7WFB7wKSWUCgoQ8',
		authDomain: 'castmap-firebase.firebaseapp.com',
		projectId: 'castmap-firebase',
		storageBucket: 'castmap-firebase.appspot.com',
		messagingSenderId: '419648283723',
		appId: '1:419648283723:web:eabf3a527c27daf3e999ce'
	}

	// Initialize Firebase
	const app = initializeApp(firebaseConfig)

	//login authentication
	const login = () => {
		const auth = getAuth(app)
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user
				console.log(user)
			})
			.catch((error) => {
				const errorCode = error.code
				const errorMessage = error.message
			})
	}

	//sign in authentication
	const signup = () => {
		const auth = getAuth(app)
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				//Signed up
				const user = userCredential.user
				console.log(user)
			})
			.catch((error) => {
				const errorCode = error.code
				const errorMessage = error.message
				goto('/')
			})
	}

	//Authentication state observer assigned when user sign in state changes
	const auth = getAuth()
	onAuthStateChanged(auth, (user) => {
		if (user) {
			const uid = user.uid
		} else {
			// User is signed out
		}
	})
</script>

<div class="overflow-x-hidden text-white bg-dark">
	<Navbar />
	<slot />
	<!-- Quota form -->
	{#if $isOverlayOpen}
		<Overlay>
			<div class="top">
				<div class="name">
					<h2 class="text-5xl font-bold leading-[84px]">
						<span class="character-gradient">Quota Form</span>
					</h2>
					<div class="outer">
						<input class="inner" type="text" placeholder="Area" />
						<input class="inner" type="text" placeholder="Activity" />
						<input class="inner" type="text" placeholder="Targeted Species" />
						<input class="inner" type="text" placeholder="Full Name" />
						<button
							on:click={() => {
								active = true
							}}
							class="log"
							type="button">Confirm</button
						>
					</div>
				</div>
			</div>
		</Overlay>
	{/if}

	<!-- sign in  Form -->
	{#if $SignIn}
		<OverlaySignUp>
			<div class="top">
				<div class="name">
					<h2 class="text-5xl font-bold leading-[84px]">
						<span class="character-gradient">Log In</span>
					</h2>
					<div class="outer">
						<input class="inner" type="text" placeholder="Email" bind:value={email} />
						<input class="inner" type="password" placeholder="Password" bind:value={password} />
						<button on:click={login} class="log" type="button">Login</button>
						<p id="first" class="sign">New user <a href="#OverlayLogin">Sign up </a> for free</p>
					</div>
				</div>
			</div>
		</OverlaySignUp>
	{/if}

	<!-- Create an account Form -->
	{#if $LogIn}
		<OverlayLogIn>
			<div class="top">
				<div class="name">
					<h2 class="text-5xl font-bold leading-[84px]">
						<span class="character-gradient">Sign Up</span>
					</h2>
					<div class="outer">
						<input class="inner" type="text" placeholder="Email" bind:value={email} />
						<input class="inner" type="text" placeholder="Confirm Email" />
						<input class="inner" type="password" placeholder="Password" bind:value={password} />
						<input class="inner" type="password" placeholder="Comfirm Password" />
						<button on:click={signup} class="log" type="button">Signup</button>
						<p class="sign">Already have an account? <a href="#signup">Login</a></p>
					</div>
				</div>
			</div>
		</OverlayLogIn>
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

	.character-gradient {
		background: linear-gradient(
			245.29deg,
			#6dc1dc 13.32%,
			#a690fc 28.55%,
			#fc96bb 55.55%,
			#ffc397 84.12%
		);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-fill-color: transparent;
	}

	.top {
		background: rgba(255, 255, 255, 0.15);
		box-shadow: 0 8px 32px 0 #1f26875e;
		backdrop-filter: blur(3px);
		-webkit-backdrop-filter: blur(3px);
		border-radius: 10px;
		border: 1px solid #ffffff2e;
		width: 350px;
		height: 500px;
		padding: 20px;
		position: absolute;
		top: 50%;
		left: 50%;
		text-align: center;
		transform: translate(-50%, -50%);
	}
	.sign {
		text-decoration: none;
		font-weight: bold;
		cursor: default;
		transform: translate(-00%, 400%);
	}

	#first {
		padding-bottom: 1rem;
	}
	.sign a {
		text-decoration: none;
		color: rgb(140, 114, 255);
	}
	.outer {
		display: grid;
		place-items: center;
		height: 30vh;
	}
	.name {
		cursor: default;
	}
	.inner {
		color: rgb(255, 255, 255);
		width: 80%;
		position: relative;
		left: 50%;
		top: 15%;
		transform: translate(-60%, 20%);
		border-radius: 20px;
		margin-top: 20px;
		padding: 10px;
		outline: none;
		background: rgba(255, 255, 255, 0.15);
		box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
		backdrop-filter: blur(3px);
		-webkit-backdrop-filter: blur(3px);
		border-radius: 10px;
		border: 1px solid rgba(255, 255, 255, 0.18);
	}
	.log {
		color: rgb(255, 255, 255);
		width: 50%;
		position: relative;
		left: 50%;
		top: 56%;
		transform: translate(-100%, 30%);
		border-radius: 20px;
		margin-top: 20px;
		padding: 10px;
		background: rgba(140, 114, 255);
		box-shadow: 0 8px 32px 0 rgba(140, 114, 255);
		backdrop-filter: blur(100px);
		-webkit-backdrop-filter: blur(200px);
		border-radius: 10px;
		border: 1px solid rgba(255, 255, 255, 0.18);
		cursor: pointer;
	}
	h2 {
		font-size: 30px;
	}

	@media only screen and (max-width: 600px) {
		body {
			background-color: lightblue;
		}
	}
</style>
