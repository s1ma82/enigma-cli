import yaml from 'js-yaml'
import fs from 'fs'
import getConfig from '../helpers/getConfig.js'


async function config(callback = null) {
    if (!callback) return  
    
    try {
        
        const fileExists = fs.existsSync(getConfig())

        if (fileExists) {
            const config = getConfig('data')
            if (config.user) {
                return config
            } 
        }
        
        const data = await callback()
        const user = {
            user: data
        }

        fs.writeFileSync(getConfig(), yaml.dump(user))
        
        return data

    } catch (e) {
        this.print.err('Config-init false, message: ' + e.message)
    }
}

export default config