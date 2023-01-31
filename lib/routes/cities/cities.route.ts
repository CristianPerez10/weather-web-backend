import { CitiesController } from "../../controllers/cities.controller";
import { RouterBase } from "../lib/router.base";

const router = new RouterBase("/cities");
const controller = new CitiesController();

router.route("/").get(controller.getCities);

export default router;