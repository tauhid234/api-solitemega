import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Pendidikan{

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    kode_pendidikan : string;

    @Column()
    nama_pendidikan : string;

}