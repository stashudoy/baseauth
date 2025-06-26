
import {WithId} from 'mongodb'


export type UserDBType = WithId<{
    
    login: string
    email: string
    passwordHash: string
    passwordSalt: string
}>