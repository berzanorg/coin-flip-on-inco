<script lang="ts">
    import type { Snippet } from 'svelte'

    let { children }: { children: Snippet } = $props()
</script>

<main class="flex flex-col flex-1">
    {@render children()}
</main>