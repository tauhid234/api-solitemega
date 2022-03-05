import { Column, Entity, PrimaryColumn } from "typeorm";



@Entity()
export class Billing{

    @PrimaryColumn()
    id : string;

    @Column()
    id_user : string;

    @Column()
    id_produk : string;

    @Column({type : "date"})
    tanggal_tagihan : string;
    
}