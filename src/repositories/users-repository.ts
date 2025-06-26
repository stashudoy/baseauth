import { UserDBType } from '../types/types';
import { usersCollection } from './db';

export const usersRepository = {
    async getAllUsers(): Promise<UserDBType[]> {
        return usersCollection
            .find()
            .toArray()
    },
    async createUser(user: UserDBType): Promise<UserDBType>{
        const result =  usersCollection.insertOne(user) 
        return user
    },
    async findByLogin(login: string): Promise<UserDBType | null> {
        const user = await usersCollection.findOne({login: login})  // findOne({$or: [{email: loginOrEmail}, {login: loginOrEmail},  ]})
        return user
    },

    // async findUserById(id: Object): Promise<UserDBType | null> {
    //     let product = await usersCollection.findOne({_id: id})
    //     if(product) {
    //         return product
    //     } else {
    //         return null
    //     }
    // },     
    // async findByLoginOrEmail(loginOrEmail: string) {
    //     const user = await usersCollection.findOne({ $or: [{email: loginOrEmail}, {userName: loginOrEmail}]})
    //     return user
    // },
}

