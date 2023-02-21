import dedent from "dedent"
import getConfig from '../helpers/getConfig.js'

const commands = {
    test: '/test',
    setUser: '/setuser',
    help: '/help',
    config: '/config',
    user: '/user',
    author: '/author',
    tools: '/tools'

}

async function cmd (c){
    const { test, setUser, help, user, config, author, tools } = commands
    
    switch (c) {
        case test:
            this.print.info('This is a test command')
            break
        
        case author:
            this.print.prim([
                `email => ${this.author.email}`,
                `website => ${this.author.website}`,
            ])
            break
        
        case setUser:
            await this.setUser()
            break
        
        case user:
            this.print.data('User', this.user)
            break
        
        case config:
            this.print.data('Config', getConfig('data'))
            break
        
        case help:
            this.print.help(dedent`
                    \n  
                      /help        - show commands list    |
                      /helpers       - show app tools        |
                      /setuser     - to change user name   |
                      /test        - test command          |
                      /config      - show config           |
                      /author      - show author contacts  |
            `) 
            break
        
        case tools:
            await this.tools()    

            break
        
        default:
            this.print.help(dedent`
                |You can use command /help|
                    |to see commands list|
            `)
    }
    this.input()
}
export default cmd