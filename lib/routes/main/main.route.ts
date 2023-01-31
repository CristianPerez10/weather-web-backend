import { RouterBase } from "../lib/router.base";

const router = new RouterBase("/");

router.route('/').get(() => console.log("Server ON"))

export default router;