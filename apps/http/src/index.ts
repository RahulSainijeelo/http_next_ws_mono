import express, { Request,Response } from "express"
import { client } from '@repo/prisma/client';

const app = express();

app.get("/",(req:Request,res:Response)=>{
    console.log(req.body())
    res.status(200).send("heath is ok")
})

app.post("/signup",async (req:Request,res:Response)=>{
    const username = req.body.username;
    const password = req.body.pass;

    const user = await client.uSER.create({
        data:{
            username,
            password
        }
    })

    res.json({
        message:"signup successfull",
        id:user.id
    })
})