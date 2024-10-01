import { Request,Response } from "express";
import  * as userRepository from "../repository/userRepository";
import { promises } from "dns";

export const getUsers = async (req:Request, res:Response):Promise<void> => {
    try{
        const users = await userRepository.findAll()
        res.status(200).send(users)
    }catch(error){
        res.status(500).send(`Error:${error}`)
    }
}

export const getOne = async (req:Request, res:Response):Promise<void> => {
    try{
            const users = await userRepository.findOne(req.params.id)
        res.status(200).send(users)
    }catch(error){
        res.status(500).send(`Error:${error}`)
    }
}
