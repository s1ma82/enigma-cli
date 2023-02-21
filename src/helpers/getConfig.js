import dotenv from 'dotenv'
import yaml from 'js-yaml'
import fs from 'fs'
import print from './print.js'

dotenv.config()

export default function getConfig(data = null) {
    try {
        if (data === 'data') {
            const config = yaml.load(fs.readFileSync(process.env.CONFIG, 'utf8')) || null
            if (!config) { 
                throw new Error('config is not defined')
            }
            return config

        }
        return process.env.CONFIG
    } catch (e) {
        print.err('e.message')
        return null
    }
}