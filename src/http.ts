import express, { response } from "express";
import { createServer} from "http";
import { Server, Socket } from "socket.io"
import { routes } from "./routes";
import  path  from "path";
import"./database";

const app = express();


app.use(express.static(path.join(__dirname,"../public")));
app.set("views", path.join(__dirname,"..","public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (request, response) =>{

    return response.render("html/client.html")
})

const http = createServer(app); //Criando protocolo http
const io = new Server(http); // criando o protocolo WebSocket ws

io.on("connection", (socket: Socket)=>{
    console.log("Se conectou", socket.id);

});

app.use(express.json()) // Definindo que o express ira trabalhar com JSON na rota.
app.use(routes);

export {http, io};