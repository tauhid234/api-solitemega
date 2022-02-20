import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class StatusPerkawinan{

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    kode_perkawinan : string;

    @Column()
    nama_perkawinan : string;

}