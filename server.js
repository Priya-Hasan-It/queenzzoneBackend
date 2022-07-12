const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

const app = express()
dotenv.config()
app.use(express.json());

const options = {
    origin: 'http://localhost:3010',
    useSuccessStatus: 200
}      
app.use(cors(options))


app.get('/', (req, res)=>{
    res.send(`welcome from ${process.env.APPNAME} server` )

})


const PORT = process.env.PORT || 8000

app.listen(PORT, ()=>{
    console.log(`server is running at the port ${PORT}`);
    
})