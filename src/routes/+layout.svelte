<script lang="ts">
    import { type Snippet } from 'svelte'
    import '../app.css'
    import Header from '$lib/components/Header.svelte'
    import Footer from '$lib/components/Footer.svelte'
    import Main from '$lib/components/Main.svelte'

    let { children }: { children: Snippet } = $props()
</script>

<Header/>
<Main>
    {@render children()}
</Main>
<Footer/>