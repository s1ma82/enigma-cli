import chalk from "chalk"
import dedent from "dedent"

function print(...args) {
    console.log("\n", ...args)
}

print.info = (text, data = '') => {
    if(data) return console.log(chalk.bgHex('B9F3E4').black(`\n\u24D8 ${text}:`) + chalk.hex('B9F3E4')(` ${data}`))
    return console.log(chalk.bgHex('B9F3E4').black(`\n\u24D8  ${text}`))
}

print.log = text => {
    console.log(`\n${text}`)
}

print.bigLog = text  => {
    console.log(chalk.bgWhite.hex('fff')(dedent`\n${text}`))
}

print.hex = (hex, text) => {
    console.log(chalk.hex(hex)(`\n ${text}`))  
}

print.err = text => {
    console.log(chalk.bgHex('FF7000')(`\n\u24BA Error:`) + chalk.hex('FF7000')(` ${text}`))
}

print.data = (text, data) => {
    console.log(chalk.hex('fff').bgHex('609EA2')(`\n\u2635 ${text}:\n\n`) + chalk.hex('609EA2')(JSON.stringify(data, false, "___")))
}

print.prim = arr => {
    arr.forEach(text => {
        console.log(chalk.hex('FFAACF')(`\n\u262D ${text} \u262D`))
    })
}

print.help = text => {
    console.log(chalk.hex('88E570')(`\n\u058E ${text}`))
}

print.inq = text => {
    return chalk.hex('BEF0CB')(text)
}

print.input = text => chalk.bgHex('F6E6C2').black(`\n\u2328  ${text}:`)

print.password = text => chalk.bgHex('F6E6C2').black(`\n\u2328  ${text}:`)

print.checkbox = text => chalk.hex('fff')(`\n${text}\n`)

print.list = text => chalk.hex('fff')(`\n${text}\n`)


export default print