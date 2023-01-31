import {Router} from "express";
import * as fs from 'fs';
import * as path from 'path';
import { RouterBase } from "./lib/router.base";

const router = Router();
const routesPath = path.join(__dirname);

fs.readdirSync(routesPath).forEach(folder => {
    if (folder.search("index") > -1) return;
    const files = fs.readdirSync(`${__dirname}/${folder}`)
    for (const file of files) {
        if (file.search(".route.js") > -1 && file.search(".map") == -1) {
            const route = require(`${__dirname}/${folder}/${file}`);
            const routeBase: RouterBase = route.default;
            router.use(routeBase.getPath(), routeBase.getRouter());
        }
    }
});

export default router;