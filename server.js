import express from "express"
import dotenv from "dotenv"
import cors from  'cors'
import morgan from "morgan"
import connectDB from './config/db.js'
import userRoutes from './rought/userRoutes.js'





const app = express()
dotenv.config()
app.use(express.json());
connectDB()


if (process.env.NODE_ENV === "Development") {
  app.use(morgan("dev"));
}

const options = {
    origin: 'http://localhost:3010',
    useSuccessStatus: 200
}
app.use(cors(options))


app.get('/', (req, res) => {
    res.send(`welcome from ${process.env.APPNAME} server`)

})

app.use("/api/users", userRoutes);



const PORT = process.env.PORT || 8800

app.listen(PORT, () => {
    console.log(`server is running at the port ${PORT} please opnen postman and go to http://localhost:${PORT}`);

})