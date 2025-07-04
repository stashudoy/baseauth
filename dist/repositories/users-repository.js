"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRepository = void 0;
const db_1 = require("./db");
exports.usersRepository = {
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return db_1.usersCollection
                .find()
                .toArray();
        });
    },
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = db_1.usersCollection.insertOne(user);
            return user;
        });
    },
    findByLogin(login) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield db_1.usersCollection.findOne({ login: login }); // findOne({$or: [{email: loginOrEmail}, {login: loginOrEmail},  ]})
            return user;
        });
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
};
