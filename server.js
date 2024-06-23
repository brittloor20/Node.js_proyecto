const express = require("express")
const connectDb = require("./db/db")
const userRoutes = require("./routes/userRoutes")
const authRoutes= require("./routes/authRoutes")
const sessionRoutes= require("./routes/sessionRoutes")
const app = express()
const PORT= 3010

// Middleware

app.use(express.json()) 

// Rutas 

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes) 
app.use("/api/session", sessionRoutes)
connectDb()


app.listen(PORT,()=>{
    console.log("Servidor corriendo en el puerto: "+ PORT)
})


//Servidor local host 


const http = require('http');
const host = 'localhost';
const port = 8000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('¡Hola desde el servidor local!');
});

server.listen(port, host, () => {
    console.log(`Servidor escuchando en http://${host}:${port}`);
});