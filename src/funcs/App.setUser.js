import configEdit from '../config/config.edit.js'
import getPaths from '../helpers/getPaths.js'

export default async function setUser() { 
    const { answer } = await this.input({
        name: "answer",
        message: "Choose what you wanna change",
        type: "checkbox",
        choices: [
            {
                name: "name",
            },
            {
                name: "email",
            },
            {
                name: "password",
            },
        ]        
    })
    const handleAnswer = answer.map(i => ({
        name: i,
        message: `Enter new ${i}`,
    }))

    const newData = await this.input(handleAnswer)
    this.user = { ...this.user, ...newData }

    const paths = getPaths(newData, '/user/')
    console.log(paths)
    configEdit({
        paths,
        method: 'change',
        data: newData
    })
    
}