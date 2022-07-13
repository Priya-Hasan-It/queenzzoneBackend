const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const morgan  = require('morgan')
const connectDB = require('./config/db')



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


const PORT = process.env.PORT || 8800

app.listen(PORT, () => {
    console.log(`server is running at the port ${PORT} please opnen postman and go to http://localhost:${PORT}`);

})