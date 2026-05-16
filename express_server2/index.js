import express from 'express';
import {dirname} from "path";
import { fileURLToPath } from 'url';
import bodyParser from "body-parser";
const __dirname =dirname(fileURLToPath(import.meta.url));

const app = express()
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/login", (req, res) => 
    {console.log(req.body.StreetName+" "+req.body.PetName);
});

app.listen(3000, "127.0.0.1", () => {
  console.log('Server is running on http://localhost:3000')
});