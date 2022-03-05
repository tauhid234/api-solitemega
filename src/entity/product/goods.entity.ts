import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Goods{

    @PrimaryColumn()
    id : string
    
    @Column()
    kode_kategori : string;

    @Column()
    judul_produk : string;

    @Column()
    harga_asli : string;

    @Column()
    uang_muka : string;

    @Column({type : "text"})
    deskripsi : string

    @Column({type : "text"})
    keterangan_produk : string

    @Column()
    cicilan6_bulan : string

    @Column()
    cicilan8_bulan : string;

    @Column()
    cicilan10_bulan : string;

    @Column()
    cicilan15_bulan : string;

    @Column()
    cicilan18_bulan : string;

    @Column()
    penilaian_produk : string;
}