<section class="flex flex-col px-4 pt-4 pb-10 gap-y-6">
    <div class="flex flex-col">
        <h1 class="font-semibold text-2xl">User Stats</h1>
        <p>Won: 3</p>
        <p>Lost: 3</p>
        <p>Draw: 3</p>
    </div>
    <div class="flex flex-col gap-y-4">
        <h1 class="font-semibold text-3xl text-center">Choose Your Move</h1>
        <div class="flex flex-col items-center gap-y-4">
            <button class="bg-blue-500 h-11 w-80 rounded-full font-medium"
                >Rock</button
            >
            <button class="bg-blue-500 h-11 w-80 rounded-full font-medium"
                >Paper</button
            >
            <button class="bg-blue-500 h-11 w-80 rounded-full font-medium"
                >Scissors</button
            >
        </div>
    </div>
    <div class="flex flex-col gap-y-4">
        <h1 class="font-medium text-2xl text-center">Opponent's Move</h1>
        <button
            disabled
            class="bg-red-500 h-11 w-60 rounded-full font-medium self-center"
            >?</button
        >
    </div>
    <div class="flex flex-col gap-y-4">
        <h1 class="font-medium text-2xl text-center">Result</h1>
        <button
            class="bg-gray-500 h-11 w-60 rounded-full font-medium self-center"
            >You won! Play again?</button
        >
    </div>
</section>
