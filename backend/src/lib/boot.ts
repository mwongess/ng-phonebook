import { FastifyInstance } from "fastify"

const PORT: string | number = 4000

export const startServer = (app:FastifyInstance) =>{
    app.listen(PORT, (error, address)=>{
        if(error){
            console.error(error)
            process.exit(1)
        }
        console.log(`Server is up and runnig on ${address}/`)
    })
}