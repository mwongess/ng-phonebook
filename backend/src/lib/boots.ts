import { FastifyInstance } from "fastify"

const PORT: string | number = 4000

export const startServer = (app:FastifyInstance) =>{
    app.listen(PORT, ()=>{
        console.log(`Server is up and runnig on port: ${PORT}`)
    })
}