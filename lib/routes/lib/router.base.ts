import * as express from "express";

export class RouterBase {
	protected router: express.Router;
	protected currentRoute: express.IRoute;
	protected path: string;

	constructor(pathReceived: string) {
		this.path = pathReceived;
		this.router = express.Router();
	}

	public getPath(): string {
		return this.path;
	}

	public route(route: string) {
		this.currentRoute = this.router.route(route);
		return this;
	}

	public get(...args: any[]) {
		this.currentRoute.get(...args);
		return this;
	}

	public post(...args: any[]) {
		this.currentRoute.post(...args);
		return this;
	}

	public getRouter(): express.Router {
		return this.router;
	}
}
