import inquirer from 'inquirer'
import dotenv from 'dotenv'
import print from './helpers/print.js'
import input from './helpers/input.js'
import cmd from './services/cmd.service.js'
import init from './funcs/App.init.js'
import setUser from './funcs/App.setUser.js'
import checkPass from './funcs/App.checkPass.js'
import tools from './funcs/App.tools.js'
import config from './config/config.js'

dotenv.config()

class App{
    constructor() {
        this.cmd        = cmd       .bind(this)
        this.init       = init      .bind(this)
        this.input      = input     .bind(this)
        this.tools      = tools     .bind(this)
        this.config     = config    .bind(this)
        this.setUser    = setUser   .bind(this)
        this.checkPass  = checkPass .bind(this)

        this.appName = 'enigma-cli'
        this.print = print
        this.prompt = inquirer.createPromptModule()

        this.user = null 
        this.author = {
            name: 's1ma82',
            email: 's1mahochukvas@vk.com',
            website: 'https://s1ma82.vercel.app'
        }

    }
    
    
    async start() {
        await this.init()
        // await this.checkPass()
        this.input()

    }

}
export default App