import express from "express";
import {
    // countByCity,
    // countByType,
    createHotel,
    deleteHotel,
    getHotel,
    // getHotelRooms,
    getHotels,
    updateHotel,
} from "./../controllers/hotel.js";
import { verifyAdmin } from "./../utils/verifyToken.js"

const router = express.Router();

//* CREATE
router.post("/", verifyAdmin, createHotel);

//* UPDATE BY ID
router.put("/:id", verifyAdmin, updateHotel);

//* DELETE BY ID
router.delete("/:id", verifyAdmin, deleteHotel);

//* GET BY ID
router.get("/find/:id", getHotel);

//* GET ALL HOTELS
router.get("/", getHotels);

export default router