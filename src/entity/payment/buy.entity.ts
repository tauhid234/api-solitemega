import { Column, Entity, PrimaryColumn } from "typeorm";



@Entity()
export class Buy{

    @PrimaryColumn()
    id : string;

    @Column()
    id_user : string;

    @Column()
    id_produk : string;

    @Column({type : "date"})
    tanggal_beli : string;

    @Column()
    total_harga : string;

    @Column({type : "enum", enum : ["proses", "pengiriman", "sudah sampai"]})
    status_pengiriman : string;
}