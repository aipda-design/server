import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Country} from "./Country";

@Entity()
export class Continent {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(() => Country, (country) => country.continent)
    countries: Country[];
}