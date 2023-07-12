import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import express from 'express';
import dotenv from 'dotenv';
import { user } from './controller/user.js'
dotenv.config();

const appExpress = express();

const config = JSON.parse(process.env.MY_SERVER);

appExpress.use(express.json());


appExpress.get('/', function (req, res) {
    try {
        let data = plainToClass(user, req.body)
        console.log(data);
        res.send();
    } catch (error) {
        res.send(error)
    }
});

appExpress.listen(config, () => {
    console.log(`listening on http://${config.host}:${config.port}`);
});