import express from "express"
import cors from 'cors';
import 'dotenv/config'
import { setRoutes } from "./setRoutes";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

setRoutes('/', app)

app.get('/', (req, res)=>{
    res.send('Hellow')
})

app.listen(process.env.PORT || 8080, ()=>{
    console.log("Server is Running ⚡")
})

