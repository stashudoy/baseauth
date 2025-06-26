import {ObjectId, WithId} from 'mongodb'

export type UserDBType = WithId<{
    
    login: string
    email: string
    passwordHash: string
    passwordSalt: string
}>


        // const newUser: UserDBType = {
        //     _id: new ObjectId,
        //     login,
        //     email,
        //     passwordHash,
        //     passwordSalt,
            
        // }