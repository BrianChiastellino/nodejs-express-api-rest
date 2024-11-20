import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

// 'estudiantes' hace referencia a la tabla
@Entity('Estudiantes')
export class Estudiante extends BaseEntity {

    @PrimaryGeneratedColumn()
    id :number;

    @Column()
    nombre : String;
    
    @Column()
    dni : String;

    @Column()
    apellido : String;

    @Column()
    email : String;

    @CreateDateColumn()
    createdAt : Date;

    @UpdateDateColumn()
    updateAt : Date;


};