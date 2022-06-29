<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				title: `${status}: ${error.message}`
			}
		}
	}
</script>

<script>
	export let title
</script>

<h1>UH OH! SPAGHETTI-O's</h1>
<h2>{title}</h2>

<style>
	h1 {
		padding-top: 20rem;
		font-size: 6rem;
		text-align: center;
	}
	h2 {
		text-align: center;
	}
</style>
