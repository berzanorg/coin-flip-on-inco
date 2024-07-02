<script lang="ts">
    import { wallet } from '$lib/utils/wallet.svelte'
</script>

<header
    class="sticky top-0 z-30 h-16 flex items-center justify-between px-4 border-b border-neutral-800 bg-neutral-900"
>
    <a href="/" class="font-semibold text-lg">Rock Paper Scissors</a>
    <button
        onclick={wallet.connect}
        disabled={wallet.address !== undefined}
        class="bg-blue-500 px-7 h-11 rounded-full font-medium"
    >
        {#if wallet.address}
            Connected
        {:else}
            Connect
        {/if}
    </button>
</header>
