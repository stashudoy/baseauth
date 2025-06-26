
import { UserDBType } from "../types/types"
import bcrypt from 'bcrypt'
import {ObjectId} from 'mongodb'
import {usersRepository} from '../repositories/users-repository'


export const usersService = {    

    async createUser(login: string, email: string, password: string): Promise<UserDBType>
    {
       const passwordSalt = await bcrypt.genSalt(10)
       const passwordHash = await this._generateHash(password, passwordSalt)
       let user = ({_id: new ObjectId(), login, email, passwordHash, passwordSalt})
       return usersRepository.createUser(user)
   },


    // async findUserById(id: ObjectId): Promise<UserDBType | null> {
    //     return usersRepository.findUserById(id)
    // },
    async checkCredentials(login: string, password: string) {
        const user = await usersRepository.findByLogin(login)
        if(!user) return false
        const passwordHash = await this._generateHash(password, user.passwordSalt)
        if(user.passwordHash !== passwordHash){
            return false
        }
        return true
    },

    async findUsers(): Promise<UserDBType[]> {
        return usersRepository.getAllUsers()
    },

    async _generateHash(password: string, salt: string) {
        const hash = await bcrypt.hash(password, salt)
        return hash
    }

}
