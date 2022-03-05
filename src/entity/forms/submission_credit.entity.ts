import { Column, Entity, PrimaryColumn } from "typeorm";



@Entity()
export class SubmissionCredit{

    @PrimaryColumn()
    id : string;

    @Column()
    id_user : string;

    @Column()
    nama_lengkap : string;

    @Column()
    nama_panggilan : string;

    @Column({length : 16})
    nomor_whatsapp : string;

    @Column()
    lokasi_kota : string;

    @Column()
    status_rumah_kepemilikan : string;

    @Column({type : "text"})
    alamat_tinggal : string;

    @Column({type : "text"})
    alamat_domisili : string;

    @Column({type : "text"})
    alamat_ktp : string;

    @Column()
    foto_ktp : string;

    @Column()
    foto_kk : string;

    @Column()
    foto_wajah : string;

    @Column()
    foto_sk_domisili_pbb : string;

    @Column()
    nomor_rekening_listrik : string;

    @Column()
    pekerjaan : string;

    @Column()
    lama_bekerja : string;

    @Column()
    penghasilan_bulanan : string;

    @Column()
    jumlah_tanggungan : string;

    @Column()
    info_mula_solitemega : string;

    @Column()
    akun_instagram_follow : string;

    @Column({type : "date"})
    tanggal_survey : string;

    @Column()
    jam_survey : string;

    @Column({type : "boolean"})
    status_kebijakan : boolean;
}