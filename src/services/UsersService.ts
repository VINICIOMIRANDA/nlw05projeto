import { getCustomRepository, Repository, SimpleConsoleLogger } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";


class UsersService {

    private usersRepository: Repository<User>;

    constructor(){
        this.usersRepository = getCustomRepository(UsersRepository);

    }


    async create(email: string) {


        //Verificar se usuario existe

        const userExists = await this.usersRepository.findOne({
            email
        });

        if (userExists) {
            return userExists;
            // Se existir, retornar o usuario
        }

        const user = this.usersRepository.create({
            email
        });

        await this.usersRepository.save(user);

        // Se nao existir, salvar no BD

        return user;

    }

    async findByEmail(email:string){
        console.log('Email', email)

        const user = this.usersRepository.findOne({
            email
        })
        return user

    }
}

export { UsersService };