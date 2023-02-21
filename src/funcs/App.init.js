export default async function init() {
    const req = [
        {
            name: "name",
            message: "Enter your name",
        },
        {
            name: "email",
            message: "Enter your email",
        },
        {
            name: "password",
            message: "Enter your password",
            type: "password",
            mask: "\u262D "   
        }
    ]

    const data = await this.config(() => this.input(req))
    this.user = data.user
    
}
