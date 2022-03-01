import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Category{

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    kode_kategori : string;

    @Column()
    nama_kategori : string;

    @Column()
    icon : string;
}