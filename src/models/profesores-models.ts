import { Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn, OneToMany, BaseEntity } from "typeorm"
import { Curso } from "./cursos-models";

@Entity('Profesoes')
export class Profesor extends BaseEntity {

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

    @Column()
    profesion : String;

    @Column()
    telefono : String;



    //gestionar automáticamente las fechas de creación y de actualización de los registros en la base de datos
    @CreateDateColumn()
    createdAt : Date;

    @UpdateDateColumn()
    updateAt : Date;

    //!
    // Un profesor ( One ) tiene muchos ( ToMany ) cursos
    // Relación uno-a-muchos con la entidad Curso.
    // Esto significa que un profesor puede tener varios cursos,
    // pero cada curso solo puede tener un profesor.
    @OneToMany(() => Curso, (curso) => curso.profesor)
    // Esta propiedad 'cursos' es un array de cursos que están asociados a un profesor.
    cursos: Curso[];

    
};