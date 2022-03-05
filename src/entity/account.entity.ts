import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class AccountEntity{

    @PrimaryColumn()
    id : string;

    @Column({length : 16})
    phone : string;

    @Column()
    password : string;
}