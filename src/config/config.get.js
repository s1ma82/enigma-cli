import _ from 'lodash'
import getConfig from '../helpers/getConfig.js'

export default function get(path) {
    const config = getConfig('data')
    const array = path.split('/')
    array.shift()
    _.get(config, array)
    
}