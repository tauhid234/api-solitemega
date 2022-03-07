import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity()
export class UserAdmin{

    @PrimaryColumn()
    id : string;

    @Column()
    phone : string;

    @Column()
    email : string;

    @Column()
    nama : string;
    
    @Column()
    username : string;

    @Column()
    password : string;
}