import { UsersService } from "../services/UsersService";
import { Request, Response } from "express";


class UsersController {

    async create(request: Request, response: Response): Promise<Response> {
        const { email } = request.body;
        console.log("TSTES",email);
        
        const usersService = new UsersService();

        const user = await usersService.create(email);
        console.log("TESTES",response.json(user));
        return response.json(user)
    }

}

export { UsersController };