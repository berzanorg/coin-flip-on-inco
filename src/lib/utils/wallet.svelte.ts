import { getWins } from './getWins'
import { wait } from './wait'

const createWallet = () => {
    let address: string | undefined = $state(undefined)
    let wins: number | undefined = $state(undefined)

    const connect = async () => {
        // Check if a wallet exists
        if (!('ethereum' in window)) {
            alert('No wallet found!')
        }

        // Request addresses
        const addresses = (await (
            window as any
        ).ethereum.enable()) as Array<string>

        // Add Inco to the wallet
        await (window as any).ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
                {
                    chainId: '0x2382', // Inco's Chain ID which is 0x2382 (9090)
                    chainName: 'Inco Testnet',
                    rpcUrls: ['https://testnet.inco.org'],
                    iconUrls: [],
                    nativeCurrency: {
                        name: 'Inco',
                        symbol: 'INCO',
                        decimals: 18,
                    },
                    blockExplorerUrls: ['https://explorer.testnet.inco.org'],
                },
            ],
        })

        // Switch the network to Inco
        await (window as any).ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [
                {
                    chainId: '0x2382', // Inco's Chain ID which is 0x2382 (9090)
                },
            ],
        })

        // Get the number of wins
        const stats = await getWins(addresses[0])

        // Update state variables
        address = addresses[0]
        wins = stats
    }

    const flip = async (): Promise<void> => {
        // Send a flip transaction
        const txId = await (window as any).ethereum.request({
            method: 'eth_sendTransaction',
            params: [
                {
                    from: address,
                    to: '0x3748d4C227772b9b5Ce2f2Bf4af0b12d70d2d843',
                    value: '0x0',
                    data: '0xcde4efa9',
                },
            ],
        })

        // Wait for the tx
        await wait(2000)

        // Refetch wins
        const newWins = await getWins(address!)

        // Check if the user won or not
        if (newWins > wins!) {
            wins = newWins
            alert('You won!')
        } else {
            alert('You lost!')
        }
    }

    return {
        get address() {
            return address
        },
        get wins() {
            return wins
        },
        connect,
        flip,
    }
}

export const wallet = createWallet()
