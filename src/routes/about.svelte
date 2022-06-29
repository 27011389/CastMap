<script>
// @ts-nocheck

	import AgoraRTM from 'agora-rtm-sdk'
	import { onMount } from 'svelte'
	import { v4 as uuidv4 } from 'uuid'
	const APP_ID = '452f99a0814b44d29d9a446ec20356fc'
	const CHANNEL = 'wdj'
	let client = AgoraRTM.createInstance(APP_ID)
	let uid = uuidv4()
	let textc = ''
	let messagesRef
	let messages = []
	// set onMount
	let channel
	const appendMessage = (message) => {
		messages = [...messages, message]
		requestAnimationFrame(() => {
			messagesRef.scrollTop = messagesRef.scrollHeight
		})
	}
	onMount(async () => {
		await client.login({ uid, token: null })
		channel = await client.createChannel(CHANNEL)
		await channel.join()
		channel.on('ChannelMessage', (message, peerId) => {
			appendMessage({
				text: message.text,
				uid: peerId
			})
		})
	})
	function sendMessage() {
		if (textc === '') return
		channel.sendMessage({ textc, type: 'text' })
		appendMessage({
			text: textc,
			uid
		})
		textc = ''
	}
	function handleChange(e) {
		textc = e.target.value
	}
</script>

<div class="about">
	<!-- Local Buddy section -->
	<h1 class="text-5xl font-bold">Developers of CastMap</h1>
	<section class="py-20">
		<div class="flex justify-between mx-auto space-x-24 max-w-7xl">
			<div id="dev" class="relative w-1/2 bg-grey-900">
				<img
					src="/images/mark3.jpg"
					width={232}
					height={232}
					alt="Other 19"
					class="absolute -top-15 -left-12"
					style="border-radius: 20px;"
				/>
				<div>
					<p class="py-4 ma font-bold">Mark Pepere <br /> BSE - Developer</p>
				</div>

				<img
					src="/images/alex.jpg"
					width={235}
					height={235}
					alt="Other 18"
					class="absolute top-32 right-16"
					style="border-radius: 20px;"
				/>
				<p class="shadowfilter py-4 font-bold" id="al">Alex Hughes <br /> BSE - Developer</p>
			</div>
			<div class="flex flex-col space-y-5 w-1/2 z-[2]">
				<h1 class="text-4xl font-bold leading-[84px]">
					<span class="character-gradient">Our Story</span>
				</h1>
				<p class="leading-7">
					The project CastMap is be about recording live data regarding areas that are being fished
					around New Zealand. This information is displayed graphically as stats and heat maps. This
					in turn engages the people fishing and supplies MPI with live data. The longer-term
					outlook for this project is that the application will be hosted on the cloud with a
					built-in SQL database to hold and analyse gathered and exiting data. Currently, we have
					discovered the Ministry of Primary Industries (MPI) conducts research annually detailing
					the current state of fish stock and adjusts quotas to suit. Some documents detail the
					stats that are publicly published. Realistically we can safely assume that the average Joe
					will not read or take much notice of these documents provided by MPI. This is a worthwhile
					project as we can help drive sustainability for the ecosystem around the shores of New
					Zealand. The hope is that this application will be turned into a cloud-based native
					application to help share and collect information that provides education for those who
					use it. While the potential for this web application goes much further the scope will be
					reduced to ensure that the project workload is acceptable for the project timelines.
				</p>
			</div>
		</div>

		<div class="panelchat">
			<h1 class=" text-3xl font-normal leading-[50px]">
				<span class="">Chat with our staff</span>
			</h1>
			<div class="messageschat" bind:this={messagesRef}>
				<div class="innerchat">
					{#each messages as message}
						<div class="messagechat">
							{#if message.uid === uid}
								<div class="user-selfchat">You:&nbsp;</div>
							{:else}
								<div class="user-themchat">Them:&nbsp;</div>
							{/if}
							<div class="textchat">{message.text}</div>
						</div>
					{/each}
				</div>
			</div>

			<form on:submit|preventDefault={sendMessage}>
				<input class="inputchat" bind:value={textc} />
				<button class="buttonchat">+</button>
			</form>
		</div>

	</section>
</div>

<style>
	.about {
		padding-top: 10rem;
		padding-left: 5rem;
		padding-right: 5rem;
		text-align: center;
		display: block;
		margin: 20px auto;
	}
	#al {
		position: absolute;
		top: 23rem;
		right: 115px;
	}

	.ma {
		position: absolute;
		top: 14rem;
		right: 460px;
	}

	#dev {
		top: 8rem;
		z-index: 1;
	}

	:rootchat {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
		background: rgb(130, 209, 255);
		background: linear-gradient(
			90deg,
			rgb(174, 220, 238) 0%,
			rgba(194, 180, 217, 1) 49%,
			rgba(148, 187, 233, 1) 100%
		);
	}

	.panelchat {
		display: flex;
		flex-direction: column;
		padding: 18px;
		margin: 5rem auto;
		max-width: 600px;
		height: 350px;
		background: rgba(124, 153, 248, 0.25);
		box-shadow: 0 8px 32px 0 rgba(2, 0, 139, 0.37);
		backdrop-filter: blur(4px);
		border-radius: 15px;
		border: 1px solid rgba(255, 255, 255, 0.18);
	}
	.messageschat {
		height: 100%;
		width: 100%;
		overflow-y: scroll;
		border-radius: 15px;
		background-color: rgb(255, 255, 255);
	}
	.innerchat {
		padding: 10px;
		border-radius: 15px;
		color: black;
	}
	.messagechat {
		text-align: left;
		display: flex;
		margin-bottom: 6px;
		padding-left: 10px;
	}
	.user-selfchat {
		color: rgb(0, 0, 0);
	}
	.user-themchat {
		color: rgb(0, 9, 129);
	}
	.buttonchat {
		margin: 10px;
	}

	.inputchat {
		border-radius: 15px;
		height: 30px;
		width: 475px;
		padding-left: 10px;
	}

</style>
