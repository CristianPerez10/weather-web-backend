import { Request, Response } from 'express';
import { CitiesService } from 'services/cities.service';

export class CitiesController {
	
	private service: CitiesService;
	constructor() {
		this.getCities = this.getCities.bind(this);
		this.service = new CitiesService();
	}

	public getCities(req: Request, res: Response) {
		const cities = this.service.getCities()
        res.status(200).send({data: cities})
    }
}
