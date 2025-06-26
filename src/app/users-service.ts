
import { UserDBType } from "../types/types"
import bcrypt from 'bcrypt'
import {ObjectId} from 'mongodb'
import {usersRepository} from '../repositories/users-repository'


export const usersService = {

    

    async createUser(login: string, email: string, password: string): Promise<UserDBType>
    {
                const passwordSalt = "random1"
        const passwordHash = "random2"
       let user = {_id: new ObjectId(), login, email, passwordHash, passwordSalt}
       return usersRepository.createUser(user)
   },


    async findUserById(id: ObjectId): Promise<UserDBType | null> {
        return usersRepository.findUserById(id)
    },
    async checkCredentials(loginOrEmail: string, password: string) {
        const user = await usersRepository.findByLoginOrEmail(loginOrEmail)
        if(!user) return false
        const passwordHash = await this._generateHash(password, user.passwordSalt)
        if(user.passwordHash !== passwordHash){
            return false
        }
        return true
    },
    async _generateHash(password: string, salt: string) {
        const hash = await bcrypt.hash(password, salt)
        console.log('hash' + hash)
        return hash
    },

    async findUsers(): Promise<UserDBType[]> {
        return usersRepository.getAllUsers()
    }

}
