import express, {Request, Response} from 'express'
import {runDB} from './repositories/db'
import { usersRouter } from './routes/user-router'
import bodyParser from 'body-parser'


const app = express() 


  
app.use(bodyParser.json());

const port = process.env.PORT || 9000



app.use('/users', usersRouter)



const startApp =  async () => {
    await runDB
    app.listen(port, () => {
        console.log(`Example app listen on port: ${port}`)
    })
}

startApp()