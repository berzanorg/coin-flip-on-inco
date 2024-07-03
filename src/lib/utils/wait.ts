export const wait = async (ms: number): Promise<void> => {
    return new Promise((res) => setTimeout(res, ms))
}
