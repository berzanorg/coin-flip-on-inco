export const getWins = async (address: string): Promise<number> => {
    const res = await fetch('https://testnet.inco.org', {
        method: 'POST',
        body: `{
            "jsonrpc": "2.0",
            "method": "eth_call",
            "params": [
                {
                    "to": "0x3748d4C227772b9b5Ce2f2Bf4af0b12d70d2d843",
                    "data": "0xc23f85d6000000000000000000000000${address.slice(
                        2
                    )}"
                },
                "latest"
            ],
            "id": 67
        }`,
        headers: {
            'Content-Type': 'application/json',
        },
    })

    const json = await res.json()

    const wins = parseInt(json.result)

    return wins
}
