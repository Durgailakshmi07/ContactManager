import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
createContact,
getContacts,
updateContact,
deleteContact
} from "../controllers/contactController.js";

const router = express.Router();

router.post("/",protect,createContact);
router.get("/",protect,getContacts);
router.put("/:id",protect,updateContact);
router.delete("/:id",protect,deleteContact);

export default router;