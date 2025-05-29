import { Entity } from 'typeorm';
import { PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    handle: string;

    @Column()
    email: string;  

    @Column({nullable: true})
    image: string;

}