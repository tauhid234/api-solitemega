import { Column, Entity, PrimaryColumn } from "typeorm";



@Entity()
export class AddressShipment{

    @PrimaryColumn()
    id : string;

    @Column()
    id_user : string;

    @Column()
    nama_peneriman : string;

    @Column({type : "text"})
    alamat_kirim : string;

    @Column({type : "boolean"})
    status_alamat : boolean;
}