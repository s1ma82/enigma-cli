import dotenv from 'dotenv'
import tokyoGhoul from '../tools/tool.tokyoGhoul.js'

dotenv.config()

export default async function () {
    try {
        const toolList = process.env.TOOL_LIST.split(' ')
        const { tool } = await this.input({
            type: "list",
            name: "tool",
            message: "",
            choices: toolList,
            filter: value => value.toLowerCase()
        })
        if (tool === 'tokyo-ghoul') {
            const data = await tokyoGhoul()
            this.print.info('hahaha what a load of crap')
        }


    } catch (e) {
        this.print.err('Tools false, message: ' + e.message)
    }    
}