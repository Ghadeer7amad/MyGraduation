import {Router} from 'express'
import * as postController from "./Post.Controller.js"
import fileUpload, {fileValidation} from "../../Services/multer.js"


const router = Router({mergeParams: true}); 



router.post("/post", fileUpload(fileValidation.image).single('image'), postController.createPost);
router.get("/post", postController.getAllPosts);
router.get('/post/:id', postController.getPostById);
router.put('/post/:id', postController.updatePost);
router.delete('/post/:id', postController.deletePost);
router.post('/post/:id/:Id', postController.increaseLikesController);

 
export default router; 