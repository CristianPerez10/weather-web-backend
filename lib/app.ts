import * as express from "express";
import * as cors from "cors";

class App {
	public app: express.Application;

	constructor() {
		this.app = express();
	}

    // Configurate the paths of the RouterBase
	private async config() {
		this.app.use(
			cors({
				allowedHeaders: "*",
				origin: "*",
				methods: "*",
			})
		);
        const appRoutes = require("./routes/index");
        this.app.use("/api", appRoutes.default);
	}
    
	public async init() {
        await this.config()
    }
}

export default new App();