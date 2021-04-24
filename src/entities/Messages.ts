import {Entity, PrimaryColumn, CreateDateColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import { v4 as uuid} from "uuid";
import { User } from "./User";



@Entity("messages")
class Message {

    @PrimaryColumn()
    id: string;

    @Column()
    admin_id: string;

    @Column()
    text: string;


    @Column()
    user_id:string;

    @JoinColumn({ name: "user_id"})
    @ManyToOne(()=>User) //Muitas mensagens para um usuario // Many referencia a propria classe to one referencia com quem estou me relacionando no caso USERs
    user: User;
    
    @CreateDateColumn()
    created_at: Date;


    constructor(){

        if(!this.id){
            this.id = uuid();
        }
    }
}

export { Message }