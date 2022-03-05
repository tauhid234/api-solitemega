import { Column, Entity, PrimaryColumn } from "typeorm";



@Entity()
export class Favorite{

    @PrimaryColumn()
    id : string;

    @Column()
    id_user : string;

    @Column()
    id_produk : string;
}