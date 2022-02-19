import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class AccountEntity{

    @PrimaryGeneratedColumn()
    id : number;

    @Column({length : 16})
    phone : string;

    @Column()
    password : string;
}