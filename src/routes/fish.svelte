<script>
  import { Card } from "flowbite-svelte";
</script>

<section>
    <div class="searchform">
      <form >   
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
        <div class="absolute py">
          <div class="flex absolute inset-y-0 left-0 items-center pl-4 pointer-events-none">
            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <input type="search" id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required>
          <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
      </form>
    </div>
</section>



<!-- fish section -->
<div class="fish">


  <!--<div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="../static/images/fish/albacore.png" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-10 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>-->


    <Card img="../static/images/fish/albacore.png" header="Albacore" link="/" btnLabel="Read more">
      <p class="py-10 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
      </p>
    </Card>

    <Card img="../static/images/fish/black-oreo-dory.png" header="Black Oreo Dory" link="/" btnLabel="Read more">
      <p class="py-6 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
      </p>
    </Card>

    <Card img="../static/images/fish/blue-cod-parapercis-colias.png" header="Blue Cod Parapercis Colias" link="/" btnLabel="Read more">
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
      </p>
    </Card>

    <Card img="../static/images/fish/bluenose.png" header="Bluenose" link="/" btnLabel="Read more">
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
      </p>
    </Card>

    <Card img="../static/images/fish/brown-trout.png" header="Brown Trout" link="/" btnLabel="Read more">
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
      </p>
    </Card>

    <Card img="../static/images/fish/butterfish.png" header="Butterfish" link="/" btnLabel="Read more">
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
      </p>
    </Card>

    <Card img="../static/images/fish/Flounder.png" header="Flounder" link="/" btnLabel="Read more">
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
      </p>
    </Card>

    <Card img="../static/images/fish/gemfish.png" header="Gemfish" link="/" btnLabel="Read more">
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
      </p>
    </Card>

    <Card img="../static/images/fish/golden-snapper.png" header="Golden Snapper" link="/" btnLabel="Read more">
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
      </p>
    </Card>

    <Card img="../static/images/fish/grey-mullet.png" header="Grey Mullet" link="/" btnLabel="Read more">
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
      </p>
    </Card>

    <Card img="../static/images/fish/hapuka.png" header="Hapuka" link="/" btnLabel="Read more">
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
      </p>
    </Card>

    <Card img="../static/images/fish/hoki.png" header="Hoki" link="/" btnLabel="Read more">
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
      </p>
    </Card>

    <Card img="../static/images/fish/john-dory.png" header="John Dory" link="/" btnLabel="Read more">
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
      </p>
    </Card>

    <Card img="../static/images/fish/kingfish-yellowtail.png" header="Kingfish Yellowtail" link="/" btnLabel="Read more">
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
      </p>
    </Card>

    <Card img="../static/images/fish/king-salmon.png" header="King Salmon" link="/" btnLabel="Read more">
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
      </p>
    </Card>

    <Card img="../static/images/fish/leatherjacket.png" header="Leatherjacket" link="/" btnLabel="Read more">
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
      </p>
    </Card>

    <Card img="../static/images/fish/ling.png" header="Ling" link="/" btnLabel="Read more">
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
      </p>
    </Card>

    <Card img="../static/images/fish/Orange-Roughy.png" header="Orange Roughy" link="/" btnLabel="Read more">
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
      </p>
    </Card>

    <Card img="../static/images/fish/pacific-bluefin.png" header="Pacific Bluefin" link="/" btnLabel="Read more">
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
      </p>
    </Card>

    <Card img="../static/images/fish/pacific-jack-mackeral.png" header="Pacific Jack Mackeral" link="/" btnLabel="Read more">
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
      </p>
    </Card>

    <Card img="../static/images/fish/porae.png" header="Porae" link="/" btnLabel="Read more">
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
      </p>
    </Card>

    <Card img="../static/images/fish/red-gurnard.png" header="Red Gurnard" link="/" btnLabel="Read more">
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
      </p>
    </Card>

    <Card img="../static/images/fish/rig-shark-lemonfish.png" header="Rig Shark Lemonfish" link="/" btnLabel="Read more">
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
      </p>
    </Card>

    <Card img="../static/images/fish/snapper.png" header="Snapper" link="/" btnLabel="Read more">
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
      </p>
    </Card>

    <Card img="../static/images/fish/southern-hake.png" header="Southern Hake" link="/" btnLabel="Read more">
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
      </p>
    </Card>

    <Card img="../static/images/fish/stargazer-monkfish.png" header="Stargazer Monkfish" link="/" btnLabel="Read more">
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
      </p>
    </Card>

    <Card img="../static/images/fish/tarakihi.png" header="Tarakihi" link="/" btnLabel="Read more">
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
      </p>
    </Card>

    <Card img="../static/images/fish/Trevally.png" header="Trevally" link="/" btnLabel="Read more">
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph" >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
      </p>
    </Card>

    <Card img="../static/images/fish/trumpeter.png" header="Trumpeter" link="/" btnLabel="Read more">
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
      </p>
    </Card>

    <Card img="../static/images/fish/yellow-eyed-mullet.png" header="Yellow Eyed Mullet" link="/" btnLabel="Read more">
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
      </p>
    </Card>

    <Card img="../static/images/fish/yellow-fin-tuna.png" header="Yellow Fin Tuna" link="/" btnLabel="Read more">
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" slot="paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
      </p>
    </Card>
</div>

<style>
    .fish {
        padding-top:5rem;
        padding-left: 10rem;
        padding-right: 10rem;
    		display: grid;
	    	grid-template-columns: repeat(4, 4fr);
	    	grid-gap: 20px;
    }
    
   .searchform{
  padding-top: 10rem;
  padding-left: 10rem;
  
   }
    
</style>