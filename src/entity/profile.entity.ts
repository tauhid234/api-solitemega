import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Profile{

    @PrimaryGeneratedColumn()
    id : number;

    @Column({length : 16})
    phone : string;

    @Column()
    nama_lengkap : string;

    @Column()
    email : string;

    @Column()
    pendidikan : string;

    @Column()
    status_perkawinan : string;

    @Column()
    nama_ibu_kandung : string;

    @Column({type : "text"})
    alamat : string;
}