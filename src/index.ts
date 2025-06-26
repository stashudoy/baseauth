import express, {Request, Response} from 'express'
import {runDB} from './repositories/db'
import { authRouter } from './routes/auth-router'
import { usersRouter } from './routes/user-router'



const app = express()   
app.use(express.json())


const port = process.env.PORT || 9000


app.use('/registration', usersRouter)
app.use('/login', authRouter)



const startApp =  async () => {
    await runDB
    app.listen(port, () => {
        console.log(`Example app listen on port: ${port}`)
    })
}

startApp()