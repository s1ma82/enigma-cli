export default async function tokyoGhoul() {
    let i = 1000
    await new Promise((res, rej) => {
        const interval = setInterval(() => {
            console.log(`${i} - 7 = ${i - 7}`)
            i -= 7
            if (i < 0) {
                clearInterval(interval)
                res()
            }
        }, 10)
    })

    return `I'm a ghoul`
}