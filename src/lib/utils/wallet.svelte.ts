import {
    type RockPaperScissorsChoice,
    RockPaperScissorsResult,
} from '$lib/types/rock-paper-scissors'

const createWallet = () => {
    let address: string | undefined = $state(undefined)

    const connect = async () => {
        alert('hi')
    }

    const playRockPaperScissors = async (
        choice: RockPaperScissorsChoice
    ): Promise<RockPaperScissorsResult> => {
        return RockPaperScissorsResult.Draw
    }

    return {
        address,
        connect,
        playRockPaperScissors,
    }
}

export const wallet = createWallet()
