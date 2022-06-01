import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import conectarDB from "./config/db.js";
import contactRouter from "./routers/contacts/contactRouter.js";

const app = express()




dotenv.config()
conectarDB()

//Configurar Cors 
app.use(cors())

//router
app.use(express.json())
app.use('/api/contacts', contactRouter)


app.listen( (process.env.PORT || 4000) , '0.0.0.0', () => {

    console.log("servidor funcionando: " + (process.env.PORT  || 4000))
})
