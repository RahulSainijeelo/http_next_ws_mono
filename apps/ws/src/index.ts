import { WebSocketServer } from "ws";
import { client } from '@repo/prisma/client';

const server = new WebSocketServer({
    port:8081
})

server.on("connection",async (socket)=>{
      await client.user.create({data:{
        username:Math.random().toString(),
        password:Math.random().toString()
      }})
    socket.send("connected to the server")
})