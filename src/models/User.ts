import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Country} from "./Country";
import {IsEmail} from "class-validator";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    @IsEmail()
    email: string;

    @Column()
    profession: string;

    @ManyToOne(() => Country, (country) => country.users, { onDelete: "CASCADE" })
    country: Country;
}