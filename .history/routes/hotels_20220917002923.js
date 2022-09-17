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

const router = express.Router();

//* CREATE
router.post("/", createHotel);

//* UPDATE BY ID
router.put("/:id", updateHotel);

//* DELETE BY ID
router.delete("/:id", deleteHotel);

//* GET BY ID
router.get("/find/:id", getHotel);

//* GET ALL HOTELS
router.get("/", getHotels);

export default router