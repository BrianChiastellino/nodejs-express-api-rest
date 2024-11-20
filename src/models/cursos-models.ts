
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable, BaseEntity } from "typeorm"
import { Profesor } from "./profesores-models";
import { Estudiante } from "./estudiantes-models";

// 'cursos' es el nombre de la tabla
@Entity('Cursos')
export class Curso extends BaseEntity {

    @PrimaryGeneratedColumn()
    id :number;

    @Column()
    nombre : String;
    
    @Column('text')
    descripcion : String;

    @CreateDateColumn()
    createdAt : Date;

    @UpdateDateColumn()
    updateAt : Date;

    // Relación muchos-a-uno con la entidad Profesor.
    // Esto significa que muchos cursos pueden estar asociados con un solo profesor,
    // pero cada curso solo puede tener un profesor.
    @ManyToOne(() => Profesor, (profesor) => profesor.cursos)
    // Especificamos que esta relación usa la columna 'profesor_id' en la tabla Curso,
    // que almacenará la clave foránea para la tabla Profesor.
    @JoinColumn({ name: 'profesor_id' })
    profesor: Profesor;

    // Relación muchos-a-muchos con la entidad Estudiante.
    // Esto significa que un curso puede tener muchos estudiantes inscritos
    // y, al mismo tiempo, un estudiante puede estar en varios cursos.
    @ManyToMany(() => Estudiante)
    // Como es una relación muchos-a-muchos, necesitamos una tabla intermedia
    // para almacenar las relaciones entre cursos y estudiantes.
    @JoinTable({
        // Definimos el nombre de la tabla intermedia como 'curso_estudiante'.
        name: 'curso_estudiante',
        // La columna 'curso_id' en la tabla intermedia se refiere a la entidad Curso.
        joinColumn: { name: 'curso_id' },
        // La columna 'estudiante_id' en la tabla intermedia se refiere a la entidad Estudiante.
        inverseJoinColumn: { name: 'estudiante_id' }
    })
    estudiante: Estudiante[];

};