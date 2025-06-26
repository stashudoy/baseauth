import {Request, Response, Router} from 'express'
import {usersService} from '../app/users-service'

export const usersRouter = Router({})

usersRouter.post('/',
  async(req: Request<{},{},{login: string, email: string, password: string}>, res: Response) => {    
    const newUser = await usersService.createUser(req.body.login, req.body.email, req.body.password)
    res.status(201).send(newUser)
  })

usersRouter.get('/', async(req: Request, res: Response) => {
    const result = await usersService.findUsers()
    res.json(result)
  })  