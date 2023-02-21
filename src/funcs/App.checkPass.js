import getConfig from "../helpers/getConfig.js";

export default async function checkPass() {
    try {
        const config = getConfig('data')
        const validPass = config.user.password
        const answer  = await this.input({
            name: 'pass',
            message: 'Enter password',
            type: 'password',
            mask: ''
        })

        if (validPass !== answer.pass) {
            throw new Error('invalid password')
        }    
    } catch (e) {
        this.print.err(e.message)
        await this.checkPass()
    }
}