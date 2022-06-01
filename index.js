import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import conectarDB from "./config/db.js";
import contactRouter from "./routers/contacts/contactRouter.js";
const app = express()
const port = 4000 || process.env.PORT


dotenv.config()
conectarDB()

//Configurar Cors 
app.use(cors())

//router
app.use(express.json())
app.use('/api/contacts', contactRouter)


app.listen(port, () => {

    console.log("Corriendo en el puerto: " + port)
})
