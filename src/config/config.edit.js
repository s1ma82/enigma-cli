import _ from 'lodash'
import yaml from 'js-yaml'
import fs from 'fs'
import getConfig from '../helpers/getConfig.js'
import print from '../helpers/print.js'


function remove(path) {
    const config = getConfig()
    print(path)
}

function change(paths, data) {
    const config = getConfig('data')

    paths.forEach(path => {
        const array = path.split('/')
        array.shift()
        const last = array[array.length -1]
        _.set(config, array, data[last])
        
    })
    print(config)
    fs.writeFileSync(getConfig(), yaml.dump(config))
}


function configEdit({ paths, data = null, method}) {
    try {
        switch (method) {
            case "remove":
                remove(paths)
                break
            case "add":
                break
            case "change":
                change(paths, data)
                break
            default: throw new Error('Method undefined ')
            
        }
        return {status: "succes"}
    } catch (e) {
        return {status: false, error: e.message}
    }
}

export default configEdit