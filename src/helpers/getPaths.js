export default function (arg, string) {
    const keys = Object.keys(arg)
    const paths = keys.map(i => {
        return string + i
    })
    return paths
}