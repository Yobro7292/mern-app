import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'

const app = express();
 
app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));
app.use(cors());

const CON_URL = 'mongodb+srv://Yogi7292:Yogi&6708@cluster0.bzhsc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CON_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(
    () => app.listen(PORT, () => console.log(`Connected Successfully ! at ${PORT}`))
    )
.catch(
    (error) => consolr.log(error.message)
);

