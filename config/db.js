import mongoose from "mongoose";

const conectarDB = async() =>{

    try {

       const connection = await mongoose.connect(process.env.MONGO_DB,{
          useNewUrlParser:true,
          useUnifiedTopology:true
        })

        const url = `${connection.connection.host}:${connection.connection.port}`
        console.log("Conectado a la URL: "+ url) 
        

    } catch (error) {
        console.log(error)
        process.exit(1)
    }

}

export default conectarDB; 