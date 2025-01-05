import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./User";
import {Continent} from "./Continent";

@Entity()
export class Country {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;


    @ManyToOne(() => Continent, (continent) => continent.countries,{ onDelete: "CASCADE" })
    continent: Continent


    @OneToMany(() => User, (user) => user.country)
    users: User[]
}