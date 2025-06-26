import { UserDBType } from '../types/types';
import { usersCollection } from './db';

export const usersRepository = {
    async getAllUsers(): Promise<UserDBType[]> {
        return usersCollection
            .find()
            .toArray()
    },
    async createUser(user: UserDBType): Promise<UserDBType | any> {
        const result = await usersCollection.insertOne(user)
        return user
    },
    async findUserById(id: Object): Promise<UserDBType | null> {
        let product = await usersCollection.findOne({_id: id})
        if(product) {
            return product
        } else {
            return null
        }
    },     
    async findByLoginOrEmail(loginOrEmail: string) {
        const user = await usersCollection.findOne({ $or: [{email: loginOrEmail}, {userName: loginOrEmail}]})
        return user
    }
}
