async function input(i = 'cmd') {

    if (i === 'cmd') {
        const {c} = await this.prompt({
            name: 'c',
            prefix: '',
            message: this.print.input('/{command}'),
        })
        await this.cmd(c)
        return
    }

    if (Array.isArray(i)) {
        i.forEach(i => {
            i.prefix = ''

            if (i.type && i.type !== 'password') {
                this.print(i.type)
                i.message = this.print[i.type](i.message)
            } else {
                i.message = this.print.input(i.message)
            }

            return i
        })
        const ans = await this.prompt(i)
        return ans
    }

    if (typeof i === 'object') {
        i.prefix = ''
        
        if (i.type) {
            i.message = this.print[i.type](i.message)
        } else {
            i.message = this.print.input(i.message)
        }

        const ans = await this.prompt(i)
        return ans
    }

}
export default input 