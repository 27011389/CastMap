<script lang="ts">
	import { db } from '../firebase'
	import { onSnapshot, collection, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore'
	import Toastify from 'toastify-js'
	import { onDestroy } from 'svelte'

	let quota = {
		area: '',
		description: '',
		date: '',
		time: '',
		species: '',
		activity: ''
	}
	function scrollToTop() {
		document.body.scrollTop = 0
		document.documentElement.scrollTop = 0
	}

	let quotas = []
	let inputElement

	let editStatus = false
	let currentId = ''

	const unsub = onSnapshot(
		collection(db, 'quotas'),
		(querySnapshot) => {
			quotas = querySnapshot.docs.map((doc) => ({
				...doc.data(),
				id: doc.id
			}))
		},
		(err) => {
			console.error(err)
		}
	)

	const addquota = async () => {
		try {
			await addDoc(collection(db, 'quotas'), { ...quota, createdAt: Date.now() })
			Toastify({ text: 'New quota created' }).showToast()
		} catch (error) {
			console.error(error)
		}
	}

	const deletequota = async (id) => {
		try {
			await deleteDoc(doc(db, 'quotas', id))
		} catch (error) {
			console.error(error)
		}
	}

	const editquota = (currenquota) => {
		currentId = currenquota.id
		quota.area = currenquota.title
		quota.description = currenquota.description
		editStatus = true
	}

	const updatequota = async () => {
		try {
			await updateDoc(doc(db, 'quotas', currentId), quota)
			Toastify({
				text: 'quota updated'
			}).showToast()
		} catch (error) {
			console.error(error)
		}
	}

	const handleSubmit = () => {
		if (!quota.area) return

		if (!editStatus) {
			addquota()
		} else {
			updatequota()
			editStatus = false
			currentId = ''
		}

		quota = { area: '', description: '', date: '', time: '', species: '', activity: '' }
		inputElement.focus()
	}

	const onCancel = () => {
		editStatus = false
		currentId = ''
		quota = { area: '', description: '', date: '', time: '', species: '', activity: '' }
	}

	onDestroy(unsub)
</script>

<body>
	<!-- Hero section -->
	<section class="py-40 mt-10">
		<div class="flex justify-between mx-auto space-x-40 max-w-7xl">
			<div class="flex flex-col w-1/2">
				<h1 class="text-5xl font-bold leading-[84px]">
					Castmaps <span class="character-gradient">Heatmap</span>
				</h1>
				<p class="mt-8 leading-[36px]">
					Here is a live and interactive display of New Zealand fishing activities helping you make
					your decision on where to dive or fish while protecting coastal wildlife at the same time.
				</p>
				<br />
				<h1 class="text-3xl font-normal leading-[50px]">
					<span class="character-gradient">Please enter your quota information</span>
				</h1>

				<div class="container p-0">
					<div class="row">
						<div class="col-md-6 offset-md-3">
							<!-- quota Form -->
							<form on:submit|preventDefault={handleSubmit} class="card card-body p-5">
								<div class="mb-3">
									<label for="area" class="pr-10 fs-5">Area</label>
									<input
										type="text"
										bind:value={quota.area}
										bind:this={inputElement}
										placeholder="Area"
										class="form-i w-52"
									/>
								</div>

								<div class="mb-3">
									<label for="date" class="pr-10 fs-5">Date</label>
									<input
										type="date"
										bind:value={quota.date}
										bind:this={inputElement}
										placeholder="Area"
										class="form-i w-52"
									/>
								</div>

								<div class="mb-3">
									<label for="time" class="pr-10 fs-5 ">Time</label>
									<input
										type="time"
										bind:value={quota.time}
										bind:this={inputElement}
										placeholder="Time    "
										class="form-i w-52"
									/>
								</div>

								<div class="mb-3">
									<label for="activity" class="pr-5 fs-5 ">Activity</label>
									<select
										id="actType"
										name="actType"
										type="dropdown"
										bind:value={quota.activity}
										bind:this={inputElement}
										class="form-option1"
									>
										<option id="hide" value="" hidden disabled selected>Activity</option>
										<option value="Diving">Diving</option>
										<option value="Cast Fishing">Cast Fishing</option>
									</select>
								</div>

								<div class="mb-3">
									<label for="species" class="pr-4 custom-select ">Species</label>
									<select
										id="fishTypes"
										name="Fish"
										type="dropdown"
										bind:value={quota.species}
										bind:this={inputElement}
										class="form-option2"
									>
										<option value="" hidden disabled selected>Species</option>
										<option value="Albacore">Albacore</option>
										<option value="Black Oreo Dory">Black Oreo Dory</option>
										<option value="Blue Cod ">Blue Cod</option>
										<option value="Bluenose">Bluenose</option>
										<option value="Brown Trout">Brown Trout</option>
									</select>
								</div>

								<div class="d-flex gap-2 mt-8">
									<button class="btn btn-primary btn-sm d-flex" disabled={!quota.area}>
										<i class="material-icons" />
										<span class="ms-2">
											{#if !editStatus}Save{:else}Update{/if}
										</span>
									</button>
									{#if editStatus}
										<button on:click={onCancel} class="btn btn-info btn-sm">Cancel</button>
									{/if}
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div class="relative flex items-center justify-center w-1/2">
				<iframe
					width="100%"
					height="650px"
					src="https://fortress.maptive.com/ver4/06279490a6ab47ae25efb928921a5398"
					title="Basic"
					style="border:none; border-radius: 20px"
				/>
			</div>
		</div>
	</section>

	<!-- Weather section -->
	<!-- stacked unordered lists for the over lay of weather animation  -->
	<section class="relative py-20">
		<div class="mx-auto max-w-7xl">
			<div class="relative flex justify-between">
				<div class="wrapper">
					<div class="sun" />
					<div class="cloud">
						<div class="cloud1">
							<ul>
								<li />
								<li />
								<li />
								<li />
							</ul>
						</div>
						<div class="cloud1 c_shadow">
							<ul>
								<li />
								<li />
								<li />
								<li />
							</ul>
						</div>
					</div>

					<div class="cloud_s">
						<div class="cloud1">
							<ul>
								<li />
								<li />
								<li />
								<li />
							</ul>
						</div>
						<div class="cloud1 c_shadow">
							<ul>
								<li />
								<li />
								<li />
								<li />
							</ul>
						</div>
					</div>

					<div class="cloud_vs">
						<div class="cloud1">
							<ul>
								<li />
								<li />
								<li />
								<li />
							</ul>
						</div>
						<div class="cloud1 c_shadow">
							<ul>
								<li />
								<li />
								<li />
								<li />
							</ul>
						</div>
					</div>
					<div class="haze" />
					<div class="haze_stripe" />
					<div class="haze_stripe" />
					<div class="haze_stripe" />
					<div class="thunder" />
					<div class="rain">
						<ul>
							<li />
							<li />
							<li />
						</ul>
					</div>
					<div class="sleet">
						<ul>
							<li />
							<li />
							<li />
						</ul>
					</div>
				</div>

				<div />
				<!-- tailwind css built into classes for image live weather image  -->
				<div class="flex flex-col items-center w-3/4 space-y-7 z-[2]">
					<div class="relative">
						<div
							class="absolute w-[25px] h-[43px] bg-secondary rounded-full left-[35%] top-[65%] z-[1]"
						/>
						<img
							src="/images/objects/Other 02.png"
							width={124}
							height={124}
							alt="Other 02"
							class="relative z-10"
						/>
					</div>
					<!-- H1 text and check it out button tailwind css -->
					<h1 class="text-4xl font-bold leading-[84px] text-right">
						Check out the <span class="character-gradient">Live Weather</span> In your area here
					</h1>
					<button class="primary mt-12 w-fit px-9 py-[18px]">
						<a href="https://www.windy.com/?-39.935,172.771,6"> Check it out now</a>
					</button>
				</div>
			</div>
		</div>
		<div class="rectangle" />
	</section>

	<!-- Local Buddy section -->
	<!-- earth image and tailwind css with text h1 and paragraph tailwind css -->
	<section class="py-40 my-0">
		<div class="flex justify-between mx-auto space-x-15 max-w-7xl">
			<div class="relative w-1/2">
				<img src="/images/earth2t.png" width={448} height={448} alt="earth" class="rotate" />
			</div>
			<div class="flex flex-col space-y-10 w-1/2 z-[2]">
				<h1 class="text-4xl font-bold leading-[84px]">
					<span class="character-gradient">Local Buddy</span>
				</h1>
				<p class="leading-9">
					Finding a fishing or diving buddy can be hard sometimes. We want to connect you with other
					locals with the same interests. Find out who is fishing or diving in your local area.
				</p>
				<button class=" primary mt-12 w-fit px-9 py-[18px]"
					><a href="https://www.facebook.com/NZDIVE">Check facebook to see who is in the area </a> ->
				</button>
			</div>
		</div>
	</section>

	<!-- Fish section -->
	<section class="py-40 my-1">
		<div class="flex justify-between mx-auto space-x-24 max-w-7xl">
			<div class="flex flex-col space-y-10 w-1/2 z-[2]">
				<h1 class="text-4xl font-bold leading-[84px]">
					<span class="character-gradient">Fish Species</span> of New Zealand
				</h1>
				<p class="leading-9">
					Over 1200 species of fish exist in marine ecosystems within New Zealand waters including
					tidal estuaries, seamounts, and reefs and of these around 110 species are endemic or
					native to New Zealand. 50% or less are found in open sea with around 61% of fish species
					found in coastal rock pools.
				</p>
				<p class="leading-9">
					Learn more about each fish species such as it's physical characteristics, typical
					locations in New Zealand and suitability for eating.
				</p>
				<button class="primary mt-12 w-fit px-9 py-[18px]"> <a href="/fish">Try It Now</a></button>
			</div>
			<div id=" logo" class="relative flex justify-end w-1/2">
				<img
					src="/images/new zealand-map-outlines.png"
					width={448}
					height={448}
					alt="Island"
					class="shadowfilter"
				/>
			</div>
		</div>
	</section>

	<!-- Our clients section -->
	<section class="py-10">
		<div class="flex flex-col items-center">
			<h1 class="text-4xl font-extrabold">Local Fishing Information</h1>
			<p class="mt-2 font-light">Info you might need</p>
		</div>

		<div class="flex items-center justify-center mt-20 space-x-6">
			<div
				class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
			>
				<img class="rounded-t-lg" src="..\images\fisheries.jpg" alt="" />

				<div class="p-5">
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						Fisheries New Zealand
					</h5>
					<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
						New Zealand's fisheries provide an important source of food for recreational, cultural,
						and commercial purposes. MPI uses science and research to help protect our marine
						resources.
					</p>
					<button class="primary" href="https://fs.fish.govt.nz/Page.aspx?pk=91"
						><a href="https://www.maritimenz.govt.nz/default.asp">Read More</a></button
					>

					<svg
						class="ml-2 -mr-1 w-4 h-4"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/></svg
					>
				</div>
			</div>

			<div
				class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
			>
				<img class="rounded-t-lg" src="..\images\Maritime.png" alt="" />
				<div class="p-5">
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						Fisheries New Zealand
					</h5>
					<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
						Maritime NZ is the national regulatory, compliance and response agency for the safety,
						security and environmental protection of coastal and inland waterways throughout New
						Zealand.
					</p>
					<button class="primary" href="https://www.maritimenz.govt.nz/default.asp"
						><a href="https://www.maritimenz.govt.nz/default.asp">Read More</a></button
					>

					<svg
						class="ml-2 -mr-1 w-4 h-4"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/></svg
					>
				</div>
			</div>
		</div>
	</section>

	<div class="flex justify-end w-full px-10 py-12 mx-auto max-w-7xl">
		<div class="flex flex-col items-center justify-center space-y-2">
			<button class="back-to-top-button" on:click={scrollToTop}>
				<img src="/images/arrow.svg" alt="Arrow icon" width={16} height={16} />
			</button>
			<p class="text-center">Back to top</p>
		</div>
	</div>
</body>

<style lang="postcss">

	::-webkit-scrollbar {
		width: 20px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		box-shadow: inset 0 0 5px grey;
		border-radius: 10px;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: rgb(9, 13, 70);
		border-radius: 8px;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: #131f63;
	}

	.rectangle {
		position: absolute;
		width: 262.68px;
		height: 2762.24px;
		top: -15%;
		right: 40%;
		background: #291c52;
		border-radius: 140px;
		transform: rotate(38.51deg);
		z-index: 0;
	}

	.form-i {
		color: rgb(0, 0, 0);
		border-radius: 20px;
		height: 2.5rem;
		padding-left: 1rem;
		padding-right: 0.5rem;
	}

	.form-option1 {
		color: rgb(0, 0, 0);
		width: 13rem;
		height: 2.5rem;
		border-radius: 20px;
		padding-left: 1rem;
	}

	.form-option2 {
		color: rgb(0, 0, 0);
		width: 13rem;
		height: 2.5rem;
		border-radius: 20px;
		padding-left: 1rem;
		padding-right: 0.5rem;
	}

	#hide {
		color: blue;
	}

	/* Text color gradient  */
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

	.back-to-top-button {
		@apply flex items-center justify-center;
		width: 56px;
		height: 56px;
		background: #ebe6fa;
		box-shadow: 0px 30px 40px rgba(212, 217, 232, 0.2);
		border-radius: 88px;
	}
	/* css rotation and key frames for the earth animation */
	.rotate {
		animation: rotation 100s infinite linear;
	}

	@keyframes rotation {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(359deg);
		}
	}

	/* CSS style for the weather animation */
	.wrapper {
		width: 100px;
		height: 150px;
		position: absolute;
		top: 110px;
		left: 95px;
	}

	.sun {
		position: absolute;
		bottom: 0px;
		right: 0px;
		width: 85px;
		height: 85px;
		background: #f9db62;
		border-radius: 360px;
		opacity: 1;
		animation: sun 10s 0s linear infinite;
	}

	.cloud {
		position: absolute;
		bottom: 12px;
		left: 8px;
		z-index: 2;
		opacity: 0;
		animation: cloud 10s 0s linear infinite;
	}

	.cloud .cloud1:not(.c_shadow) ul li {
		animation: cloudi 10s 0.1s linear infinite;
	}

	.cloud .cloud1:not(.c_shadow):before {
		animation: cloudi 10s 0s linear infinite;
	}

	.cloud_s {
		position: absolute;
		bottom: 70px;
		left: 150px;
		transform: scale(0.7, 0.7) matrix(-1, 0, 0, 1, 0, 0);
		z-index: 1;
		opacity: 0;
		animation: cloud_s 10s 0s linear infinite;
	}

	.cloud_s .c_shadow {
		transform: scale(1.02, 1.02);
	}

	.cloud_vs {
		position: absolute;
		bottom: 90px;
		left: 30px;
		transform: scale(0.5, 0.5);
		z-index: 0;
		opacity: 0;
		animation: cloud_vs 10s 0s linear infinite;
	}

	.c_shadow {
		z-index: 4 !important;
		left: -5px;
		bottom: -3px !important;
	}

	.c_shadow:before {
		background: #33495f !important;
	}

	.c_shadow ul li {
		width: 60px !important;
		height: 60px !important;
		background: #33495f !important;
		float: left;
		position: absolute;
		bottom: -2px !important;
		border-radius: 360px;
	}

	.c_shadow ul li:nth-child(2) {
		width: 80px !important;
		height: 80px !important;
		background: #33495f !important;
		float: left;
		border-radius: 360px;
		position: absolute;
		bottom: 16px !important;
		left: 25px !important;
	}

	.c_shadow ul li:nth-child(3) {
		width: 70px !important;
		height: 70px !important;
		background: #33495f !important;
		float: left;
		border-radius: 360px;
		position: absolute;
		bottom: 6px !important;
		left: 60px !important;
	}

	.c_shadow ul li:last-child {
		width: 60px !important;
		height: 60px !important;
		background: #33495f !important;
		float: left;
		border-radius: 360px;
		position: absolute;
		bottom: 0px;
		left: 90px;
	}

	.cloud1 {
		position: absolute;
		bottom: 0px;
		z-index: 5;
	}

	.cloud1:before {
		content: '';
		position: absolute;
		bottom: 0px;
		left: 28px;
		width: 90px;
		height: 20px;
		background: #fff;
	}

	.cloud1 ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.cloud1 ul li {
		width: 50px;
		height: 50px;
		background: #fff;
		float: left;
		border-radius: 360px;
	}

	.cloud1 ul li:nth-child(2) {
		width: 70px;
		height: 70px;
		background: #fff;
		float: left;
		border-radius: 360px;
		position: absolute;
		bottom: 18px;
		left: 25px;
	}

	.cloud1 ul li:nth-child(3) {
		width: 60px;
		height: 60px;
		background: #fff;
		float: left;
		border-radius: 360px;
		position: absolute;
		bottom: 8px;
		left: 60px;
	}

	.cloud1 ul li:last-child {
		width: 50px;
		height: 50px;
		background: #fff;
		float: left;
		border-radius: 360px;
		position: absolute;
		bottom: 0px;
		left: 90px;
	}

	.haze {
		background: #33495f;
		position: absolute;
		bottom: 50px;
		left: 0px;
		width: 200px;
		height: 45px;
		z-index: 6;
		opacity: 0;
		animation: haze 10s 0s linear infinite;
	}

	.haze_stripe {
		background: #a3b5c7;
		position: absolute;
		bottom: 75px;
		left: 20px;
		width: 115px;
		height: 10px;
		z-index: 17;
		opacity: 0;
		border-radius: 360px;
		animation: haze_stripe 10s 0.1s linear infinite;
	}

	.haze_stripe:nth-child(6) {
		bottom: 55px;
		animation: haze_stripe 10s 0.2s linear infinite;
	}
	.haze_stripe:last-child {
		bottom: 35px;
		animation: haze_stripe 10s 0.4s linear infinite;
	}

	.thunder {
		position: absolute;
		bottom: 100px;
		left: 65px;
		width: 12px;
		height: 12px;
		background: #f9db62;
		transform: skew(-25deg);
		opacity: 0;
		animation: thunder 10s 0s linear infinite;
	}

	.thunder:before {
		content: '';
		position: absolute;
		top: 11px;
		left: 0px;
		width: 25px;
		height: 8px;
		background: #f9db62;
	}

	.thunder:after {
		content: '';
		position: absolute;
		width: 0;
		height: 0;
		top: 18px;
		right: -14px;
		border-left: 5px solid transparent;
		border-right: 5px solid transparent;

		border-top: 20px solid #f9db62;
		transform: skew(5deg);
	}

	.rain {
		position: absolute;
		bottom: 0px;
		left: 25px;
	}

	.rain ul {
		list-style: none;
		margin: 0;
		padding: 0px;
	}

	.rain ul li {
		float: left;
		position: absolute;
		bottom: 50px;
		left: 50px;
		margin-left: 20px;
		background: #6ab9e9;
		height: 40px;
		width: 10px;
		border-radius: 360px;
		transform: rotate(35deg);
		opacity: 0;
	}

	.rain ul li:first-child {
		animation: raini 10s 0s linear infinite;
	}

	.rain ul li:nth-child(2) {
		animation: rainii 10s 0.2s linear infinite;
	}

	.rain ul li:last-child {
		animation: rainiii 10s 0.4s linear infinite;
	}

	.sleet {
		position: absolute;
		bottom: 0px;
		left: 25px;
	}

	.sleet ul {
		list-style: none;
		margin: 0;
		padding: 0px;
	}

	.sleet ul li {
		float: left;
		position: absolute;
		bottom: 50px;
		left: 50px;
		margin-left: 20px;
		background: #fff;
		height: 40px;
		width: 10px;
		border-radius: 360px;
		transform: rotate(35deg);
		opacity: 0;
	}

	.sleet ul li:first-child {
		animation: raini 10s 1s linear infinite;
	}

	.sleet ul li:nth-child(2) {
		animation: rainii 10s 1.4s linear infinite;
	}

	.sleet ul li:last-child {
		animation: rainiii 10s 1.6s linear infinite;
	}

	/* keyframes for the weather animation*/
	@keyframes sun {
		0% {
			opacity: 1;
			bottom: 35px;
			right: 35px;
		}
		4% {
			bottom: 80px;
			right: 80px;
		}
		4.5% {
			bottom: 75px;
			right: 75px;
			opacity: 1;
		}
		40% {
			opacity: 1;
		}
		41% {
			bottom: 75px;
			right: 75px;
			opacity: 0;
		}
		100% {
			opacity: 0;
			bottom: 0px;
			right: 0px;
		}
	}

	@keyframes cloud {
		0% {
			transform: scale(0.8);
			left: 120px;
			bottom: 35px;
			opacity: 0;
		}
		2% {
			opacity: 1;
		}
		3.5% {
			bottom: 35px;
			left: 10px;
			opacity: 1;
		}
		16% {
			transform: scale(0.8);
		}
		18% {
			transform: scale(0.95);
		}
		19% {
			transform: scale(0.9);
		}
		48% {
			opacity: 1;
			bottom: 35px;
		}
		50% {
			bottom: 70px;
		}
		64% {
		}
		96% {
			opacity: 1;
		}
		100% {
			opacity: 0;
			bottom: 70px;
			left: 10px;
		}
	}

	@keyframes cloud_s {
		0% {
			transform: scale(0.6);
			opacity: 0;
			bottom: 40px;
			left: 18px;
		}
		23% {
			opacity: 0;
		}
		24% {
			opacity: 1;
			bottom: 40px;
			left: 30px;
		}
		28% {
			opacity: 1;
			bottom: 85px;
			left: 60px;
		}
		32% {
			transform: scale(0.6);
		}
		34% {
			transform: scale(0.75);
		}
		35% {
			transform: scale(0.7);
		}
		48% {
			opacity: 1;
		}
		49% {
			opacity: 0;
		}
		100% {
			transform: scale(0.7);
			opacity: 0;
			bottom: 85px;
			left: 60px;
		}
	}

	@keyframes cloud_vs {
		0% {
			opacity: 0;
			bottom: 85px;
			left: 60px;
		}
		39% {
			opacity: 0;
		}
		40% {
			opacity: 1;
			bottom: 85px;
			left: 60px;
		}
		42% {
			bottom: 125px;
			left: 10px;
		}
		43% {
			bottom: 120px;
			left: 15px;
		}
		48% {
			opacity: 1;
		}
		49% {
			opacity: 0;
		}
		100% {
			opacity: 0;
			bottom: 120px;
			left: 15px;
		}
	}

	@keyframes haze {
		0% {
			opacity: 0;
		}
		48% {
			height: 0px;
			opacity: 0;
		}
		49% {
			height: 45px;
			opacity: 1;
		}
		57% {
			opacity: 1;
			height: 45px;
		}
		58% {
			opacity: 0;
			height: 0px;
		}
	}

	@keyframes haze_stripe {
		0% {
			opacity: 0;
		}
		48% {
			opacity: 0;
		}
		49% {
			opacity: 1;
		}
		56% {
			opacity: 1;
		}
		57% {
			opacity: 0;
		}
	}

	@keyframes cloudi {
		0% {
			background: #fff;
		}
		56% {
			background: #fff;
		}
		57% {
			background: #92a4b6;
		}
		100% {
			background: #92a4b6;
		}
	}

	@keyframes thunder {
		0% {
			opacity: 0;
			bottom: 100px;
			left: 65px;
		}
		62% {
			opacity: 0;
			bottom: 100px;
			left: 65px;
		}
		64% {
			opacity: 1;
			bottom: 50px;
			left: 60px;
		}
		65% {
			opacity: 1;
			bottom: 55px;
			left: 61px;
		}
		72% {
			opacity: 1;
			bottom: 55px;
			left: 61px;
		}
		73% {
			opacity: 0;
		}
		100% {
			opacity: 0;
			bottom: 55px;
		}
	}

	@keyframes raini {
		0% {
			opacity: 0;
			bottom: 100px;
			left: 60px;
		}
		72% {
			opacity: 0;
			bottom: 100px;
			left: 60px;
		}
		73% {
			opacity: 1;
			bottom: 15px;
			left: 50px;
		}
		74% {
			opacity: 1;
			bottom: 25px;
			left: 52px;
		}
		80% {
			opacity: 1;
			bottom: 25px;
			left: 52px;
		}
		81% {
			opacity: 0;
			bottom: -15px;
			left: 6px;
		}
		100% {
			opacity: 0;
			bottom: 20px;
		}
	}

	@keyframes rainii {
		0% {
			opacity: 0;
			bottom: 100px;
			left: 30px;
		}
		72% {
			opacity: 0;
			bottom: 100px;
			left: 30px;
		}
		73% {
			opacity: 1;
			bottom: 15px;
			left: 20px;
		}
		74% {
			opacity: 1;
			bottom: 25px;
			left: 22px;
		}
		80% {
			opacity: 1;
			bottom: 25px;
			left: 22px;
		}
		81% {
			opacity: 0;
			bottom: -15px;
			left: -6px;
		}
		100% {
			opacity: 0;
			bottom: 20px;
		}
	}

	@keyframes rainiii {
		0% {
			opacity: 0;
			bottom: 100px;
			left: 0px;
		}
		72% {
			opacity: 0;
			bottom: 100px;
			left: 0px;
		}
		73% {
			opacity: 1;
			bottom: 15px;
			left: -10px;
		}
		74% {
			opacity: 1;
			bottom: 25px;
			left: -8px;
		}
		80% {
			opacity: 1;
			bottom: 25px;
			left: -8px;
		}
		81% {
			opacity: 0;
			bottom: -15px;
			left: -28px;
		}
		100% {
			opacity: 0;
			bottom: 20px;
		}
	}

	@keyframes fade_in {
		0% {
			opacity: 0;
		}
		8% {
			opacity: 1;
		}
		9% {
			opacity: 1;
		}
		11% {
			opacity: 1;
		}
		12% {
			opacity: 0;
		}
		100% {
			oapcity: 0;
		}
	}

	/* Css - glow effect using webkit filter and hover transition for nz map image */
	.shadowfilter {
		-webkit-filter: drop-shadow(0px 0px 25px rgba(216, 132, 36, 0.8));
		-webkit-transition: all 0.5s linear;
		-o-transition: all 0.5s linear;
		transition: all 0.5s linear;
	}
	.shadowfilter:hover {
		-webkit-filter: drop-shadow(0px 0px 25px rgba(36, 197, 116, 0.8));
	}
</style>
