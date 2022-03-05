import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Goods } from "./goods.entity";




@Entity()
export class ProductImage{

    @PrimaryColumn()
    id : string;

    @Column()
    id_produk : string;

    @Column({type : "text"})
    nama_file : string;

    @ManyToOne(() => Goods, goods => goods.id)
    goods : Goods;

}