import { Router } from "express";
import * as ProductController from './Products.Controller.js'
import fileUpload, {fileValidation} from "../../Services/multer.js"

const router = Router()

router.get('/', ProductController.getProducts)
router.post("/CreateProducts", fileUpload(fileValidation.image).single('image'), ProductController.CreateProducts);
router.delete('/hardDelete/:id', ProductController.hardDelete)

export default router