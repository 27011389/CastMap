<script>
	import { Card } from 'flowbite-svelte'
</script>

<section>
	<div class="searchform">
		<form>
			<label
				for="default-search"
				class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label
			>
			<div class="absolute py">
				<div class="flex absolute inset-y-0 left-0 items-center pl-4 pointer-events-none">
					<svg
						class="w-5 h-5 text-gray-500 dark:text-gray-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/></svg
					>
				</div>
				<input
					type="search"
					id="default-search"
					class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								/>
				<button
					type="submit"
					class=" primary absolute right-2.5 bottom-2.5  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>Search</button
				>
			</div>
		</form>
	</div>
</section>

<!-- fish section -->
<div class="fish">
	<Card
		img="../static/images/fish/albacore.png"
		header="Albacore"
		link="https://www.fishspecies.nz/albacore/"
		btnLabel="Read more"
		btnColor="gray"
	>
		<p class=" mb-32 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
			The Albacore can be identified by a long pectoral fin which is usually around half the length
			of the body.
		</p>
	</Card>

	<Card
		img="../static/images/fish/black-oreo-dory.png"
		header="Black Oreo Dory"
		link="https://www.fishspecies.nz/black-oreo-dory/"
		btnLabel="Read more"
		btnColor="gray"
	>
		<p class="mb-28 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
			The fillets of the Black Oreo are firm and white, making them suitable for most cooking
			methods.
		</p>
	</Card>

	<Card
		img="../static/images/fish/blue-cod-parapercis-colias.png"
		header="Blue Cod"
		link="https://www.fishspecies.nz/blue-cod/"
		btnLabel="Read more"
		btnColor="gray"
	>
		<p class=" font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
			Most common in the colder waters around the South Island and to the east around the Chatham
			Islands. Blue Cod are bottom-dwellers, found up to a depth of 150m.
		</p>
	</Card>

	<Card
		img="../static/images/fish/bluenose.png"
		header="Bluenose"
		link="https://www.fishspecies.nz/bluenose/"
		btnLabel="Read more"
		btnColor="gray"
	>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
			Bluenose Warehou, Antarctic butterfish, Bonita, Griffins Silverfish, Big-Eye, Deepsea
			Trevally, Blue eye trevalla, Bluenose sea bass
		</p>
	</Card>

	<Card
		img="../static/images/fish/brown-trout.png"
		header="Brown Trout"
		link="https://www.fishspecies.nz/brown-trout/"
		btnLabel="Read more"
		btnColor="gray"
	>
		<p class="mb-20 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
			Brown Trout tend to be found in rivers but can be found in a number of places such as
			subalpine lakes. They can be found right around New Zealand, from the south of Auckland down.
		</p>
	</Card>

	<Card
		img="../static/images/fish/butterfish.png"
		header="Butterfish"
		link="https://www.fishspecies.nz/butterfish/"
		btnLabel="Read more"
		btnColor="gray"
	>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
			The main Butterfish fishery is centred on the Cook Strait, between Tasman Bay, Castlepoint and
			Kaikoura; a smaller fishery is located around Stewart Island. They are seldom found at depths
			greater than 15 metres.
		</p>
	</Card>

	<Card
		img="../static/images/fish/Flounder.png"
		header="Flounder"
		link="https://www.fishspecies.nz/flounder/"
		btnLabel="Read more"
		btnColor="gray"
	>
		<div slot="paragraph">
			<p class="mb-5 font-normal text-gray-700 dark:text-gray-400">
				Sand flounder are a green-brown colour on the top side, with a white belly. They have a
				diamond shaped body, with rounded 'corners' at the dorsal fins and nose.
			</p>
		</div>
	</Card>

	<Card
		img="../static/images/fish/gemfish.png"
		header="Gemfish"
		link="https://www.fishspecies.nz/gemfish/"
		btnLabel="Read more"
		btnColor="gray"
	>
		<p class="mb-12 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
			This species have an elongated body and shiny silver aesthetic over the body with a narrow
			blue stripe along the spine.
		</p>
	</Card>

	<Card
		img="../static/images/fish/golden-snapper.png"
		header="Golden Snapper"
		link="https://www.fishspecies.nz/golden-snapper/"
		btnLabel="Read more"
		btnColor="gray"
	>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
			The Golden Snapper is renowned for it’s high quality flesh and eating qualities.
		</p>
	</Card>

	<Card
		img="../static/images/fish/grey-mullet.png"
		header="Grey Mullet"
		link="https://www.fishspecies.nz/grey-mullet/"
		btnLabel="Read more"
		btnColor="gray"
	>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
			Grey mullet are known to travel as far as the Karapiro dam up the Waikato River, and to Te
			Kuiti in the neighbouring Waipa River. However, they must return to the sea to spawn.
		</p>
	</Card>

	<Card
		img="../static/images/fish/hapuka.png"
		header="Hapuka"
		link="https://www.fishspecies.nz/hapuku/"
		btnLabel="Read more"
		btnColor="gray"
	>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
			Hāpuku inhabit rugged, rocky areas of coastal New Zealand, at depths between 50 - 800 metres.
		</p>
	</Card>

	<Card
		img="../static/images/fish/hoki.png"
		header="Hoki"
		link="https://www.fishspecies.nz/hoki/"
		btnLabel="Read more"
		btnColor="gray"
	>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
			This species is identified by its a silvery dorsal surface, a teal / medium blue colouring and
			a long stretched tail with no distinction at the join with the body.
		</p>
	</Card>

	<Card
		img="../static/images/fish/john-dory.png"
		header="John Dory"
		link="https://www.fishspecies.nz/john-dory/"
		btnLabel="Read more"
		btnColor="gray"
	>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
			John Dory are located right around the New Zealand but found most commonly in the warm waters
			of the North Island.
		</p>
	</Card>

	<Card
		img="../static/images/fish/kingfish-yellowtail.png"
		header="Kingfish Yellowtail"
		link="https://www.fishspecies.nz/kingfish-yellowtail/"
		btnLabel="Read more"
		btnColor="gray"
	>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
			Mature Kingfish can be found living mainly around rocky reefs, outcrops and dropoffs in New
			Zealand coastal waters. Anglers may also find luck around pinnacles and offshore islands.
		</p>
	</Card>

	<Card
		img="../static/images/fish/king-salmon.png"
		header="King Salmon"
		link="https://www.fishspecies.nz/chinook-salmon/"
		btnLabel="Read more"
		btnColor="gray"
	>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
			The colour of the may vary between Blue-Green, Red or Purple on the top of the head and back,
			with silver or white sides and belly. The male and female have different colourings.
		</p>
	</Card>

	<Card
		img="../static/images/fish/leatherjacket.png"
		header="Leatherjacket"
		link="https://www.fishspecies.nz/leatherjacket/"
		btnLabel="Read more"
		btnColor="gray"
	>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
			The Leatherjacket has a tough leathery skin and a distinctive retractable dorsal spine, which
			can give the appearance of unicorn style horn.
		</p>
	</Card>

	<Card
		img="../static/images/fish/ling.png"
		header="Ling"
		link="https://www.fishspecies.nz/ling/"
		btnLabel="Read more"
		btnColor="gray"
	>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
			Ling is one of New Zealand's top ten export earners for seafood. Its large, boned-out fillets
			and thick steaks hold their shape well in cooking and have proved to be popular at home and in
			commercial kitchens.
		</p>
	</Card>

	<Card
		img="../static/images/fish/Orange-Roughy.png"
		header="Orange Roughy"
		link="https://www.fishspecies.nz/orange-roughy/"
		btnLabel="Read more"
		btnColor="gray"
	>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
			Orange Roughy are one of the more sought after eating fish in New Zealand with a large white
			fillet allowing for many types of preparation.
		</p>
	</Card>

	<Card
		img="../static/images/fish/pacific-bluefin.png"
		header="Pacific Bluefin"
		link="https://www.fishspecies.nz/pacific-bluefin-tuna/"
		btnLabel="Read more"
		btnColor="gray"
	>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
			Pacific Bluefin is a migratory species usually found in the northern Pacific Ocean, venturing
			further south to New Zealand waters before returning to their spawning grounds in the
			northwestern Philippine Sea and in the Sea of Japan.
		</p>
	</Card>

	<Card
		img="../static/images/fish/pacific-jack-mackeral.png"
		header="Pacific Jack Mackeral"
		link="https://www.fishspecies.nz/pacific-jack-mackeral/"
		btnLabel="Read more"
		btnColor="gray"
	>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
			Pacific mackerel grow fast, up to 25 inches and more than 6 pounds. They can live up to 18
			years but are able to reproduce by age 4, and sometimes as early as age 1.
		</p>
	</Card>

	<Card
		img="../static/images/fish/porae.png"
		header="Porae"
		link="https://www.fishspecies.nz/porae/"
		btnLabel="Read more"
		btnColor="gray"
	>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
			This species is found around the North Island, with some venturing towards the Cook Strait in
			the warmer months.
		</p>
	</Card>

	<Card
		img="../static/images/fish/red-gurnard.png"
		header="Red Gurnard"
		link="https://www.fishspecies.nz/red-gurnard/"
		btnLabel="Read more"
		btnColor="gray"
	>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
			Red gurnard are found on or near the seabed throughout parts of the Indian and Pacific Oceans.
			They are most abundant north of the Chatham Rise in shallow waters and although they are found
			around the entire New Zealand coast (except southern fiords)
		</p>
	</Card>

	<Card
		img="../static/images/fish/rig-shark-lemonfish.png"
		header="Rig Shark Lemonfish"
		link="https://www.fishspecies.nz/rig-shark-lemonfish/"
		btnLabel="Read more"
		btnColor="gray"
	>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
			A small shark with a darker bronze / grey top blending to a white bottom. Small white spots
			cover the upper body.
		</p>
	</Card>

	<Card
		img="../static/images/fish/snapper.png"
		header="Snapper"
		link="https://www.fishspecies.nz/snapper/"
		btnLabel="Read more"
		btnColor="gray"
	>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
			Snapper is a favourite amongst many New Zealanders for it's versatility in the kitchen and
			beautiful flavour.
		</p>
	</Card>

	<Card
		img="../static/images/fish/southern-hake.png"
		header="Southern Hake"
		link="https://www.fishspecies.nz/hake/"
		btnLabel="Read more"
		btnColor="gray"
	>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
			This species is found in New Zealand & Chilean waters. In New Zealand they are located around
			the Chatham Rise, Campbell Plateau and South Island northward to the East Cape.
		</p>
	</Card>

	<Card
		img="../static/images/fish/stargazer-monkfish.png"
		header="Stargazer Monkfish"
		link="https://www.fishspecies.nz/stargazer/"
		btnLabel="Read more"
		btnColor="gray"
	>
		<p class=" mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
			The Stargazer is a terrific eating fish featuring white, firm flesh and a low oil content.
		</p>
	</Card>

	<Card
		img="../static/images/fish/tarakihi.png"
		header="Tarakihi"
		link="https://www.fishspecies.nz/tarakihi/"
		btnLabel="Read more"
		btnColor="gray"
	>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
			Tarakihi are more numerous on each of the South Island coasts and the lower part of the North
			Islands east coast, but are quite common right around New Zealand.
		</p>
	</Card>

	<Card
		img="../static/images/fish/Trevally.png"
		header="Trevally"
		link="https://www.fishspecies.nz/trevally/"
		btnLabel="Read more"
		btnColor="gray"
	>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
			The Trevally makes for a decent eating fish, most commonly served as sashimi and in other raw
			fish dishes such as the Fijian Kokoda thanks to their high oil content. This species is does
			also make for enjoyable eating pan fried.
		</p>
	</Card>

	<Card
		img="../static/images/fish/trumpeter.png"
		header="Trumpeter"
		link="https://www.fishspecies.nz/trumpeter-latris-lineata/"
		btnLabel="Read more"
		btnColor="gray"
	>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
			Found in good numbers on the east coast of the South Island especially around the temperate
			waters near Kaikoura. Often deeper than 20m but in the right location
		</p>
	</Card>

	<Card
		img="../static/images/fish/yellow-eyed-mullet.png"
		header="Yellow Eyed Mullet"
		link="https://www.fishspecies.nz/yellow-eyed-mullet/"
		btnLabel="Read more"
		btnColor="gray"
	>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
			Yellow-eyed mullet is a schooling finfish species that occurs commonly in shallow coastal
			waters, estuaries and lower river systems of New Zealand, Norfolk Island and south and west
			Australia.
		</p>
	</Card>

	<Card
		img="../static/images/fish/yellow-fin-tuna.png"
		header="Yellow Fin Tuna"
		link="https://www.fishspecies.nz/yellowfin-tuna/"
		btnLabel="Read more"
		btnColor="gray"
	>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
			Yellowfin is an excellent eating fish best served grilled or in sashimi dishes.
		</p>
	</Card>
</div>

<style>
	.fish {
		padding-top: 5rem;
		padding-left: 10rem;
		padding-right: 10rem;
		display: grid;
		grid-template-columns: repeat(4, 4fr);
		grid-gap: 20px;
	}

	.searchform {
		padding-top: 10rem;

		padding-left: 10rem;
	}

	.searchform input {
		width: 100%;
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 4px;
		box-sizing: border-box;
		margin-top: 10px;
	}
</style>
