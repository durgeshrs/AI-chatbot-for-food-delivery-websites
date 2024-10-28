import express from 'express';
import { addFood, listFood, removeFood } from '../controllers/foodController.js';
import multer from 'multer';
import authorisationMiddleware from '../middleware/authorisationMiddleware.js';
const foodRouter = express.Router();

//Image Storage Engine (Saving Image to uploads folder & rename it)

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        return cb(null,`${Date.now()}${file.originalname}`);
    }
})

const upload = multer({ storage: storage})

foodRouter.get("/list", listFood);
foodRouter.post("/add",upload.single('image'), authorisationMiddleware('admin'), addFood);
foodRouter.post("/remove", authorisationMiddleware('admin'), removeFood);

export default foodRouter;