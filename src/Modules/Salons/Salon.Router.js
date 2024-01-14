import { Router } from 'express';
import * as salonController from "./Salon.Controller.js";
import ProductRouter from "../Products/Products.Router.js"
import fileUpload, {fileValidation} from "../../Services/multer.js"


const router = Router();

router.use("/:id/Product", ProductRouter)
router.post('/salon',fileUpload(fileValidation.image).single('image'), salonController.createSalon);
router.get('/salon', salonController.getAllSalons);
router.get('/salon/:id', salonController.getSalonById);
router.put('/salon/:id', salonController.updateSalon);
router.delete('/salon/:id', salonController.deleteSalon);

export default router;
