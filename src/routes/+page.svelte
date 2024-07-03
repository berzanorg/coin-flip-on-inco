<script lang="ts">
    import { wallet } from '$lib/utils/wallet.svelte'
</script>

<section class="flex flex-col px-4 pt-4 pb-10 gap-y-6">
    <div class="flex flex-col font-medium">
        <p>
            Wins: {#if wallet.wins}
                {wallet.wins}
            {:else}
                ?
            {/if}
        </p>
    </div>
    <div class="flex flex-col gap-y-6 items-center">
        <h1 class="font-semibold text-3xl">Flip a Coin</h1>
        <button
            onclick={wallet.flip}
            disabled={wallet.address === undefined}
            class="bg-blue-500 h-52 w-52 rounded-full font-medium text-2xl"
            >Flip</button
        >
    </div>
</section>
