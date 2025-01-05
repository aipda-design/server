import { Request, Response } from "express";
import { AppDataSource } from "../config/data-source";
import { User } from "../models/User";
import { Country } from "../models/Country";
import { Continent } from "../models/Continent";

export const createUser = async (req: Request, res: Response) => {
    const { name,email, profession, countryName, continentName } = req.body;

    console.log("les infos sont",name);

    const continentRepo = AppDataSource.getRepository(Continent);
    const countryRepo = AppDataSource.getRepository(Country);
    const userRepo = AppDataSource.getRepository(User);

    // Vérifie si le continent existe, sinon le crée
    let continent = await continentRepo.findOne({ where: { name: continentName } });
    if (!continent) {
        continent = continentRepo.create({ name: continentName });
        await continentRepo.save(continent);
    }

    // Vérifie si le pays existe, sinon le crée
    let country = await countryRepo.findOne({ where: { name: countryName } });
    if (!country) {
        country = countryRepo.create({ name: countryName, continent });
        await countryRepo.save(country);
    }

    // Crée et sauvegarde l'utilisateur
    const user = userRepo.create({ name,email, profession, country });
    await userRepo.save(user);

    res.status(201).json({user:user,message:"User created"});
};
