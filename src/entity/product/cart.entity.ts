import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Cart{

    @PrimaryColumn()
    id : string;

    @Column()
    id_user : string;

    @Column()
    id_produk : string;

    @Column()
    status_keranjang : boolean;

    @Column()
    judul_produk : string;

    @Column()
    uang_muka : string;
}