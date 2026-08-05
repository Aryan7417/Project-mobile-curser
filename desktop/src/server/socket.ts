import {Server} from "socket.io"

let io:Server | null = null 
export const initializeSocket =(httpServer :any)=>{
    io = new Server(httpServer,{
        cors:{
            origin:"*",
            methods:["GET","POST"]
        },
    })

    console.log("Socket.IO server INitialized")

    return io
}

export const getSocket = () =>{
    if(!io){
        throw new Error ("Socket Servre is not Initilization")
    }
    return io
}